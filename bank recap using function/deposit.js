document.getElementById('deposit-btn').addEventListener('click', function(){
    // call function to get input field value 
    const newDepositAmount = getInputValueById('deposit-field');

    // call function to get element value 
    const preDepositAmount = getElementValueById('deposit-total');

    // add previous deposit amount and new deposit amount 
    const newDepositTotal = newDepositAmount + preDepositAmount;

    // set total deposit value to the element innert text 
    setNewInnerText('deposit-total', newDepositTotal);

     // call function to get element value 
    const preBalanceAmount = getElementValueById('balance-total');

    // add deposited amount to the previous balance 
    const newBalanceTotal = preBalanceAmount + newDepositAmount;

       // set total deposit value to the element innert text as new
       setNewInnerText('balance-total', newBalanceTotal);
})