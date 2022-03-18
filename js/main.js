// var (glob), let(bättre), CONST - > variabels
//for-loop och for (each)

//document.querySelector('h1').innerText = hej;
var max = 14;
var min = 3;
var user_input = '+';
var num1_array = document.getElementsByClassName('num1')
var num2_array = document.getElementsByClassName('num2')
var operator_array = document.getElementsByClassName('operator')
var equal_array = document.getElementsByClassName('eql') 
var input_array = document.getElementsByClassName('input')


// document.getElementsByClassName('operator').innerText = '+';

function randomnum(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

for (var i = 0; i < num1_array.length; i++) {
    num1_array[i].innerHTML = randomnum(min, max)
}

for (var i = 0; i < num2_array.length; i++) {
    num2_array[i].innerHTML = randomnum(min, max)
}

for (var i = 0; i < operator_array.length; i++) {
    operator_array[i].innerHTML = user_input
}

for (var i = 0; i < equal_array.length; i++) {
    equal_array[i].innerHTML = '='
}

var math = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y }
}


var answer_array = [];
function answers(num1_array, num2_array, user_input) {
    for (var i = 0; i < num1_array.length; i++) {

      answer_array[i] =  math[user_input](num1_array[i], num2_array[i])
    }
    return answer_array
}

function toggleCheckmark() {
    if function() == true
        document.querySelector('.check').classList.toggle('correctmark')
    else
        document.querySelector('check').classList.toggle('falsemark')
}


console.log(answers(num1_array, num2_array, user_input))
console.log(input_array)