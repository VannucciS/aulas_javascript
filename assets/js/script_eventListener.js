var number = document.getElementById('currentNumber')
var anothernumber = document.getElementById('anotherNumber')

var somar = document.getElementById('mais')
var subtrair = document.getElementById('menos')

var currentNumber = 0 ;

function increment(){
    currentNumber = currentNumber+1;
    number.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber-1;
    number.innerHTML = currentNumber;
}

somar.addEventListener('click', function(){
    if (currentNumber>=-1){
        currentNumber = currentNumber+1
        anothernumber.innerHTML=currentNumber
        anothernumber.style.color='black'
    }else{
        currentNumber=currentNumber+1
        anothernumber.innerHTML = currentNumber}
})

/*
somar.addEventListener('click', function(){
    if(currentNumber>=10){
        currentNumber = currentNumber
    }else{
    currentNumber=currentNumber+1
    anothernumber.innerHTML = currentNumber}
})


subtrair.addEventListener('click', function(){
    if (currentNumber<=0){
        currentNumber = currentNumber
    }else{
        currentNumber=currentNumber-1
        anothernumber.innerHTML = currentNumber}
    
})*/

subtrair.addEventListener('click', function(){
    if (currentNumber<=0){
        currentNumber = currentNumber-1
        anothernumber.innerHTML=currentNumber
        anothernumber.style.color='red'
    }else{
        currentNumber=currentNumber-1
        anothernumber.innerHTML = currentNumber}
    
})