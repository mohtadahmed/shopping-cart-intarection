function updatePhoneQuentity(isIncrease){
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputValueString = phoneInputField.value;
    const phoneInputValue = parseInt(phoneInputValueString);

    let newPhoneNumber;
    
    if(isIncrease === true){
        newPhoneNumber = phoneInputValue + 1;
    }
    else{
        newPhoneNumber = phoneInputValue - 1;
    }

    phoneInputField.value = newPhoneNumber;
    return newPhoneNumber;
}

function calculatePhonePrice(){
    const previousPhonePrice = document.getElementById('phone-price');
    const previousPhonePriceString = previousPhonePrice.innerText;
    const updatedPhonePrice = parseInt(previousPhonePriceString);

    const phoneNumberValue = document.getElementById('phone-input-field').value;
    const newPhonePrice = phoneNumberValue * 1219;
    previousPhonePrice.innerText = newPhonePrice;
}


// Event Handler for increasing the Amount of the Phone Quentity
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const updatePhoneNumber = updatePhoneQuentity(true);
    console.log(updatePhoneNumber);
    // increases the price of the Phone
    calculatePhonePrice();
});

// Event Handler for decreasing the Amount of the Phone Quantity
document.getElementById('btn-phone-minus').addEventListener('click', function(){
  updatePhoneQuentity(false)
  // decrease the price of the Phone
  calculatePhonePrice()
});