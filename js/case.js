function updateCaseNumber(isIncrease){
    const caseInputField = document.getElementById('case-input-field');
    const caseInputFieldString = caseInputField.value;
    const previousCaseField = parseInt(caseInputFieldString);

    let newCaseInput;
    if(isIncrease === true){
        newCaseInput = previousCaseField + 1;
    }
    else{
        newCaseInput = previousCaseField - 1;
    }
    caseInputField.value = newCaseInput;
    return newCaseInput;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false)
});