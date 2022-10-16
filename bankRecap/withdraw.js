document.getElementById('withdraw-btn').addEventListener('click', function(){
     //withdraw input field a user ja dibe store korbo then parseFloat korbo 
     const withdrawInputField = document.getElementById('withdraw-field');
     const withdrawtAmount = parseFloat(withdrawInputField.value);
     withdrawInputField.value = '';
     


     
})