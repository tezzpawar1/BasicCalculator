let currentDisplay ='';

function clearFun(){
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}
function calFun(num){
    currentDisplay = currentDisplay + num;
    document.querySelector('#display').value = currentDisplay;
}

function calEqualFun(num){
    let result  = eval(currentDisplay);
    currentDisplay = result;
    document.querySelector('#display').value = currentDisplay;
}