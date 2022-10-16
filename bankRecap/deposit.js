// deposit amount section 
// add event handler with the deposit button 
document.getElementById('deposit-btn').addEventListener('click', function(){
    // input field a user ja dibe store korbo then parseFloat korbo 
    const depositInputField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositInputField.value);
    depositInputField.value = '';

    // akhon deposit Total section er element access korbo then parseFloat korbo shei element er innert text
    const DepositTotalElement = document.getElementById('deposit-total');
    const depositTotalAmount = parseFloat(DepositTotalElement.innerText);
    
    // akhon addition korbo deposit a user input ja dibe + deposit previous amount 
    const newTotalDeposit = depositTotalAmount + depositAmount;
    DepositTotalElement.innerText = newTotalDeposit;

    // akhon previous balance element access korbo,then variable rakhbo then convert korbo number a
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);

  // akhon addition korbo deposit a user input ja dibe + previous balance er sathe 
  var newTotalBalance = depositAmount + balanceTotal;
  balanceTotalElement.innerText = newTotalBalance;
})