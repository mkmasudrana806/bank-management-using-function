// function to get input field value from user in number type
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

// function to get element innertext and convert it in number 
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementInnerValue = parseFloat(element.innerText);
    return elementInnerValue;
}

// set innet text as a new 
function setNewInnerText(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}