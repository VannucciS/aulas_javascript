var number = document.getElementById('currentNumber')
var somar = document.getElementById('somar')
var subtrair = document.getElementById('subtrair')

var currentNumber = 0 ;

function increment(){
    currentNumber = currentNumber+1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber-1;
    currentNumberWrapper.innerHTML = currentNumber;
}
