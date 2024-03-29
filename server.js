const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(require('child_process').exec);
const fs = require('fs');

const port = 3000;
const app = express();
app.use(cors()); // Allows incoming requests from any IP

app.use(bodyParser.json());

app.post('/get-data', async (req, res) => {
    const userText = req.body.text;

    try {
        await getInference(userText);
        res.json({ result: processedResult });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
});

async function getInference(csvData) {
    const csv_string = csvData;

    try {
        const { stdout, stderr } = await execPromise(`aws --region us-east-1 sagemaker-runtime invoke-endpoint --endpoint-name canvas-deployment-2 --cli-binary-format raw-in-base64-out --body "${csv_string}" --content-type text/csv --accept application/json result.txt`);
    } catch (error) {
        console.error("Error:", error);
        throw new Error('Error in inference');
    }

        
}

app.get('/getTextFileContent', (req, res) => {
    const filePath = './result.txt';
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
        } else {
            res.send(data);
        }
    });
});

app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'uploads/'); // Uploads stored in 'uploads directory
    },
    filename: function(req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname); // Use a unique file name
    },
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});

app.post("/upload", upload.single('file') ,(req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    
    res.send('File uploaded successfully');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});