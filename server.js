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
    const csv_string = "0.9, 0.990414754481376, 11, 4, 40, 0.0146395901020007, -0.897717544979573, AC, 1853, 6711.52302668149, 4868.77948800739, 4988.82796078214, 0, 19, CA, 113, 1, BC, 0, 1, -1, 0, 200, 0, INTERNET, 6.15031705083009, windows, 0, 1, 0, 0";

    try {
        const { stdout, stderr } = await execPromise(`aws --region us-east-1 sagemaker-runtime invoke-endpoint --endpoint-name canvas-deployment-2 --cli-binary-format raw-in-base64-out --body "${csv_string}" --content-type text/csv --accept application/json result.txt`);
    } catch (error) {
        console.error("Error:", error);
        throw new Error('Error in inference');
    }

        
}

app.get('/getTextFileContent', (req, res) => {
    const filePath = 'result.txt'
})

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