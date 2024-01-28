const express = require('express');
const multer = require('multer');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(cors()); // Allows incoming requests from any IP

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
    res.sendFile(__dirname + '/index.html');
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