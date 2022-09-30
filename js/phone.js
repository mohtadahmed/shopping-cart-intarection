function updatePhoneQuentity(isIncrease){
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputValueString = phoneInputField.value;
    const phoneInputValue = parseInt(phoneInputValueString);
    
    if(isIncrease === true){
        const newPhoneNumber = phoneInputValue + 1;
        phoneInputField.value = newPhoneNumber;
    }
    else{
        const newPhoneNumber = phoneInputValue - 1;
        phoneInputField.value = newPhoneNumber;
    }
    
}


// Event Handler for increasing the Amount of the Phone Quentity
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    updatePhoneQuentity(true);
});

// Event Handler for decreasing the Amount of the Phone Quantity
document.getElementById('btn-phone-minus').addEventListener('click', function(){
  updatePhoneQuentity(false)
});