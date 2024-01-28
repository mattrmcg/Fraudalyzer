
function getData() {
    // Get the input element by its ID
    const inputElement = document.getElementById('textInput');

    // Get value entered by user
    const enteredText = inputElement.value;

    console.log(enteredText);

    fetch('/getData');
};