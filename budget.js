document.getElementById('btn-calculate').addEventListener('click', function(){
    // console.log("can")
    const inputField = document.getElementById('input-field');
    const inputAmountString = inputField.value;
    // console.log(inputAmountString);
    const newInputAmount = parseFloat(inputAmountString);
    console.log(newInputAmount);

// clear value
// inputField.value = '';

    const inputFieldElement = document.getElementById("total-Added");
    const previousInputTotalString = inputFieldElement.innerText;
    const previousInputTotal = parseFloat(previousInputTotalString);
    console.log(previousInputTotal)


    

})







document.getElementById('btn-calculateTotal').addEventListener('click', function(){
    // console.log("canty")
})