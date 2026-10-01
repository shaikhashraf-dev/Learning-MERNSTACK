let displayText = '';

function Btn1(){
    displayText = '';
   document.querySelector('.display').innerText = displayText;
}
function Btn2(){
displayText += '1';
   document.querySelector('.display').innerText =displayText;
}
function Btn3(){
    displayText += '2';
   document.querySelector('.display').innerText =displayText;
}
function Btn4(){
    displayText += '+';
   document.querySelector('.display').innerText =displayText;
}
function Btn5(){
    displayText += '3';
   document.querySelector('.display').innerText =displayText;
}
function Btn6(){
    displayText += '4';
   document.querySelector('.display').innerText =displayText;
}
function Btn7(){
    displayText += '-';
   document.querySelector('.display').innerText =displayText;
}
function Btn8(){
    displayText += '5';
   document.querySelector('.display').innerText =displayText;
}
function Btn9(){
    displayText += '6';
   document.querySelector('.display').innerText =displayText;
}
function Btn10(){
    displayText += '*';
   document.querySelector('.display').innerText =displayText;
}
function Btn11(){
    displayText += '7';
   document.querySelector('.display').innerText =displayText;
}
function Btn12(){
     displayText += '8';
   document.querySelector('.display').innerText =displayText;
}
function Btn13(){
    displayText += '/';
   document.querySelector('.display').innerText =displayText;
}
function Btn14(){
     let finalValue = eval(displayText);
     displayText = finalValue;
   document.querySelector('.display').innerText =displayText;
}
function Btn15(){
    displayText += '9';
   document.querySelector('.display').innerText =displayText;
}
function Btn16(){
    displayText += '0';
   document.querySelector('.display').innerText =displayText;
}
function Btn17(){
    displayText += '.';
   document.querySelector('.display').innerText =displayText;
}