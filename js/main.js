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
let input_box_array = document.getElementsByClassName('textbox')
let button = document.getElementById('button_box')
let value = [];
var answer_array = [];
var num1_array_in = [];
var num2_array_in = [];




// document.getElementsByClassName('operator').innerText = '+';


function getinput() {
    return input_array = document.getElementsByClassName('textbox')
}

function randomnum(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

for (var i = 0; i < num1_array.length; i++) {
    num1_array_in[i] = randomnum(min, max)
    num1_array[i].innerHTML = num1_array_in[i]
}

for (var i = 0; i < num2_array.length; i++) {
    num2_array_in[i] = randomnum(min, max)
    num2_array[i].innerHTML = num2_array_in[i]
}

for (var i = 0; i < operator_array.length; i++) {
    operator_array[i].innerHTML = user_input
}

for (var i = 0; i < equal_array.length; i++) {
    equal_array[i].innerHTML = '='
}

var math = {
    '+': function (x, y) { x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y }
}

function answers(num1_array, num2_array, user_input) {
    for (var i = 0; i < num1_array.length; i++) {
      answer_array[i] =  math[user_input](num1_array[i], num2_array[i])
    }
    return answer_array
}

function check_answers(value_array, answer_array) {

    var result_array = []

    let check_array = document.getElementsByClassName('check')


    for (var i = 0; i < answer_array.length; i++) {
        console.log(value_array[i])
        console.log(answer_array[i])
        parseInt(value_array[i])
        if (value_array[i] == answer_array[i]) {
            console.log('rätt svar')
            result_array[i] = 1
            check_array[i].classList.toggle('correctmark')
        }
        else {
            console.log('er her')
            result_array[i] = 0
            check_array[i].classList.toggle('falsemark')
        }
    }

    return result_array

}



function draw(result_array) {
    if (result_array[0] == 1) {
        document.querySelector('.check').classList.toggle('correctmark')
    }
    else {
        document.querySelector('.check').classList.toggle('falsemark')
    }
}

console.log(num1_array)
console.log(num2_array)

button.addEventListener(`click`, (num1_array, num2_array, user_input) => { 

    let value_array = []

    for (var i = 0; i < input_box_array.length; i++) {
        value_array[i] = input_box_array[i].value
    }

    console.log(value_array)

    console.log(num1_array_in)
    console.log(num2_array_in)
    console.log(user_input) 

    check_answers(value_array, answers(num1_array_in, num2_array_in, user_input))

})

console.log(answers(num1_array, num2_array, user_input))