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
var input_array = document.getElementsByClassName('input').element.querySelector(input)
var time_tracker = 0
let input_box_array = document.getElementsByClassName('textbox')
let button = document.getElementById('button_box')
let value = []
let selector = document.getElementsByClassName('type_button')
let sub_select = document.getElementsByClassName('sub_button')
let div_select = document.getElementsByClassName('div_button')
let mul_select = document.getElementsByClassName('mul_button')
let add_select = document.getElementsByClassName('add_button')


// document.getElementsByClassName('operator').innerText = '+';


selector.addEventListener('click', () => {
    let operator = ""
    if( selector = sub_select){
      operator = "-";
    }
    if( selector = add_select){
        operator = "+";
    }
    if( selector = mul_select){
        operator = "*";
    }
    if( selector = div_select){
        operator = "/";
    }
})

button.addEventListener(`click`, () => { 

    let value = []

    for (var i = 0; i < input_box_array.length; i++) {
        value[i] = input_box_array[i].value
    }

    console.log(value)

    return value

})

function getinput() {
    return input_array = document.getElementsByClassName('textbox')
}

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
    end
}




console.log(answers(num1_array, num2_array, user_input))
console.log(input_array)

console.log(operator)
