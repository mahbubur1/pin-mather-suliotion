function getPin(){
    const pin = Math.round(Math.random() * 10000 );
    const pinString = pin + '';
    if(pinString.length == 4 ){
        return pin;
    }
    else{
        getPin();
    }
}
function generateButton(){
   const pin = getPin();
   document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('numbers-display');
    if(isNaN(number)){
        
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
    const perviousNumber = calcInput.value;
    const newNumber = perviousNumber + number;
    calcInput.value = newNumber;
    }
});
function verifyPin(){
   const pinGenerate = document.getElementById('display-pin').value;
   const numbersDisplay = document.getElementById('numbers-display').value;
   const notifySuccess = document.getElementById('notify-success');
   const notifyFail= document.getElementById('notify-fail');
   if(pinGenerate == numbersDisplay){
      notifyFail.style.display = 'none';
      notifySuccess.style.display = 'block';
   }
   else{
     notifySuccess.style.display = 'none';
     notifyFail.style.display = 'block';
   }
}