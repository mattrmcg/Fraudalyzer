const fs = require('fs');

async function getData() {
    // Get the input element by its ID
    const inputElement = document.getElementById('textInput');

    // Get value entered by user
    const enteredText = inputElement.value;
    console.log("TEXT RECEIVED")

    try {
        const response = await fetch('/get-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: enteredText }),
        });
        console.log("POST REQ SENT");
        const result = await response.json();
        console.log('Processed Result:', result.result);

        const filepath = './result.txt';

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading fle:', err);
            } else {
                console.log('File content:', data);
            }
        })
    } catch (error) {
        console.log("SCRIPTJS FETCH FAILED")
        console.error('Error:', error);
    }
    console.log(enteredText);
};