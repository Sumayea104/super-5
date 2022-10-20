document.getElementById('btn-calculate').addEventListener('click', function(){
    // console.log("can")
    const inputField = document.getElementById('input-field');
    const inputAmountString = inputField.value;
    // console.log(inputAmountString);
    const newInputAmount = parseFloat(inputAmountString);
    // console.log(newInputAmount);

// clear value
// inputField.value = '';

    const inputFieldElement = document.getElementById("total-Added");
    const previousInputTotalString = inputFieldElement.innerText;
    const previousInputTotal = parseFloat(previousInputTotalString);
    // console.log(previousInputTotal)

    

    const playerExpenses = document.getElementById("player-exp");

    const newPlayerExpenses = newInputAmount * previousInputTotal;
    // console.log(newPlayerExpenses);
    playerExpenses.innerText = newPlayerExpenses;
    // console.log(newPlayerExpenses);


})


document.getElementById("btn-calculateTotal").addEventListener('click', function(){
    // console.log("clicked");
    
    const calculatedPlayerExp = document.getElementById("player-exp");
    const calculatedPlayerExpString = calculatedPlayerExp.innerText;
    // console.log(calculatedPlayerExpString);
    const newCalculatedPlayerExp = parseFloat(calculatedPlayerExpString);


    const managerExp = document.getElementById("manager-exp");
    const managerExpString = managerExp.value;
    // console.log(managerExpString);
    const newManagerExp = parseFloat(managerExpString);
    // console.log(newManagerExp);

    const coachExp = document.getElementById("coach-exp");
    const coachExpString = coachExp.value;
    // console.log(coachExpString);
    const newCoachExp = parseFloat(coachExpString);
    // console.log(newCoachExp);
    const newTotal = document.getElementById("final-total");
    const newTotalAmount = newCalculatedPlayerExp + newManagerExp + newCoachExp;
    // console.log(newTotalAmount);
    newTotal.innerText = newTotalAmount;
})
