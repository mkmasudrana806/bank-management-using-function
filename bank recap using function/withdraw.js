document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const preWithdrawBalance = getElementValueById('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount + preWithdrawBalance;
    setNewInnerText('withdraw-total', newWithdrawTotal);

    const preBalancetotal = getElementValueById('balance-total');
    const newBalanceTotal = preBalancetotal - newWithdrawAmount;
    setNewInnerText('balance-total', newBalanceTotal);
})