

// var (glob), let(bättre), CONST - > variabels
//for-loop och for (each)

//document.querySelector('h1').innerText = hej;
var max = 14;
var min = 3;
var antal_ratt = 0
var user_input = localStorage.getItem("user_input");
var num1_array = document.getElementsByClassName('num1')
var num2_array = document.getElementsByClassName('num2')
var operator_array = document.getElementsByClassName('operator')
var equal_array = document.getElementsByClassName('eql') 
var input_array = document.getElementsByClassName('input')
let time_select = document.getElementById('time')
var time_tracker = 0;
let input_box_array = document.getElementsByClassName('textbox')
let button = document.getElementById('button_box')
let value = [];
let has_answered = false;
var answer_array = [];
var num1_array_in = [];
var num2_array_in = [];
var stat_array = [];
var stat_array_add = [];
var stat_array_sub = [];
var stat_array_mul = [];
var stat_array_div = [];
let game_log_add = [];
let game_log_sub = [];
let game_log_mul = [];
let game_log_div = [];
let last_result = 0;
let selector = document.getElementsByClassName('type_button')
let selector1 = document.getElementsByClassName('type_button1')
let selector2 = document.getElementsByClassName('type_button2')
let selector3 = document.getElementsByClassName('type_button3')
let selector4 = document.getElementsByClassName('type_button4')
let sub_select = document.getElementsByClassName('sub_button')
let div_select = document.getElementsByClassName('div_button')
let mul_select = document.getElementsByClassName('mul_button')
let add_select = document.getElementsByClassName('add_button')
let stats = document.getElementsByClassName('stat_list')
let show = document.querySelector('.result_board')
let time_used = 0;
try {
    selector1[0].addEventListener('click', () => {
        user_input = "+";
        localStorage.setItem("user_input", user_input);
    })
    console.log(selector2)
    selector2[0].addEventListener('click', () => {    
        user_input = "-";
        localStorage.setItem("user_input", user_input);
    })
    selector3[0].addEventListener('click', () => {
        user_input = "*";
        localStorage.setItem("user_input", user_input);
    })
    selector4[0].addEventListener('click', () => {
        user_input = "/";
        localStorage.setItem("user_input", user_input);
    })
}
catch (error) {

}
try {
    button.addEventListener('click', () => { 

    let value = []

    for (var i = 0; i < input_box_array.length; i++) {
        value[i] == input_box_array[i].value
    }

    console.log(value)

    return value

    })
}
catch (error) {
    
}

var start_timer = 30.00

var count_down_timer = 30.00

start_timer -= 0.01


var time_tracker = setInterval(function() {
    try {
        if (has_answered != true) {
        time_select.innerHTML = "Time: " +  count_down_timer.toFixed(2)
        if (count_down_timer < 0 || has_answered) {
        clearInterval(time_tracker);
        let value_array = []
        count_down_timer -= 0.01

            for (var i = 0; i < input_box_array.length; i++) {
                value_array[i] = input_box_array[i].value
            }

        console.log(value_array)
        
        console.log(num1_array_in)
        console.log(num2_array_in)
        console.log(user_input) 
        

        check_answers(value_array, answers(num1_array_in, num2_array_in, user_input))
        has_answered = true
        time_used = start_timer - count_down_timer
        console.log(time_used)
        console.log(time_used.toFixed(2))
        time_result.innerHTML = time_used.toFixed(2)
        time_select.innerHTML = "Slut på tid";
        show.classList.toggle('hidden_class')
        }
        else {
            count_down_timer -= 0.01
        }
    }
    }
    catch (error) {
    }
}, 10);

function getinput() {
    return input_array = document.getElementsByClassName('textbox')
}

function randomnum(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}
if (user_input != "/") {
    for (var i = 0; i < num1_array.length; i++) {
    num1_array_in[i] = randomnum(min, max)
    num1_array[i].innerHTML = num1_array_in[i]
    }

    for (var i = 0; i < num2_array.length; i++) {
    num2_array_in[i] = randomnum(min, max)
    num2_array[i].innerHTML = num2_array_in[i]
    }
}

if (user_input == "/") {
    for (var i = 0; i < num2_array.length; i++) {
        generated_number = randomnum(min, max)
        num2_array_in[i] = generated_number
        num1_array_in[i] = randomnum(min, max) * generated_number
        num2_array[i].innerHTML = num2_array_in[i]
        num1_array[i].innerHTML = num1_array_in[i]
    }
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

function answers(num1_array_in, num2_array_in, user_input) {
    for (var i = 0; i < num1_array_in.length; i++) {
    answer_array[i] = math[user_input](num1_array_in[i], num2_array_in[i])
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
            result_array[i] = 1
            check_array[i].classList.toggle('correctmark')
            last_result += 1
        }
        else {
            result_array[i] = 0
            check_array[i].classList.toggle('falsemark')
        }
    }

    return result_array

}

try {
button.addEventListener(`click`, (num1_array_in, num2_array_in) => { 
    if (has_answered != true){
        let value_array = []

        for (var i = 0; i < input_box_array.length; i++) {
            value_array[i] = input_box_array[i].value
        }

        console.log(value_array)

        console.log(num1_array_in)
        console.log(num2_array_in)
        console.log(user_input) 

        check_answers(value_array, answers(num1_array_in, num2_array_in, user_input))
        time_result_i = start_timer - count_down_timer
        time_result.innerHTML = time_result_i.toFixed(2)
        has_answered = true

        console.log(user_input)
        show.classList.toggle('hidden_class')
        stat_array = stats_log(user_input)
        console.log(game_log_add)
        console.log(stat_array)
        console.log(stats)

        for (var i = 0; i < stat_array.length; i++) {
            stats[i].innerHTML = stat_array[i]
        }
        
    }
})
}
catch (error) {

}

function stats_log(mode) {
    if (mode == "+") {
        console.log("inne i mode")
        if (localStorage.getItem("stat_log_add") != null) {
            game_log_add = localStorage.getItem("stat_log_add");
        }
        tio_senaste = 0.0
        tre_senaste = 0.0
        antal_fel = 0
        antal_ratt = 0
        procent_ratt = 0
        console.log(last_result)
        console.log(time_used)
        console.log(time_result)
        console.log(game_log_add)
        game_log_add[game_log_add.length] = [time_result_i, last_result];
        console.log(game_log_add)
        // if (game_log_add.length > 10) {
        //     game_log_add.shift()
        // }
        for (var i = game_log_add.length-1; i > -1; i--) {
            antal_fel = 10 - game_log_add[i][0]
            antal_ratt = game_log_add[i][0]
            procent_ratt = (parseFloat(antal_ratt / 10)*100).toFixed(1)
            if (i == 6) {
                tre_senaste = tio_senaste
            }
            tio_senaste += procent_ratt
        }
        antal_fel = 10 - last_result
        antal_ratt = last_result
        procent_ratt = (parseFloat(antal_ratt / 10)*100).toFixed(1)
        localStorage.setItem("stat_log_add", game_log_add);
        return [antal_ratt, antal_fel, procent_ratt, tre_senaste, tio_senaste]
    }
    else if (mode == "-") {
        console.log("inne i mode")
        if (localStorage.getItem("stat_log_add") != null) {
            game_log_add = localStorage.getItem("stat_log_add");
        }
        tio_senaste = 0.0
        tre_senaste = 0.0
        antal_fel = 0
        antal_ratt = 0
        procent_ratt = 0
        console.log(last_result)
        console.log(time_used)
        console.log(time_result)
        console.log(game_log_add)
        game_log_add[game_log_add.length] = [time_result_i, last_result];
        console.log(game_log_add)
        // if (game_log_add.length > 10) {
        //     game_log_add.shift()
        // }
        for (var i = game_log_add.length-1; i > -1; i--) {
            antal_fel = 10 - game_log_add[i][0]
            antal_ratt = game_log_add[i][0]
            procent_ratt = (parseFloat(antal_ratt / 10)*100).toFixed(1)
            if (i == 6) {
                tre_senaste = tio_senaste
            }
            tio_senaste += procent_ratt
        }
        antal_fel = 10 - last_result
        antal_ratt = last_result
        procent_ratt = (parseFloat(antal_ratt / 10)*100).toFixed(1)
        localStorage.setItem("stat_log_add", game_log_add);
        return [antal_ratt, antal_fel, procent_ratt, tre_senaste, tio_senaste]
    }
    else if (mode == "*") {
        console.log("inne i mode")
        if (localStorage.getItem("stat_log_add") != null) {
            game_log_add = localStorage.getItem("stat_log_add");
        }
        tio_senaste = 0.0
        tre_senaste = 0.0
        antal_fel = 0
        antal_ratt = 0
        procent_ratt = 0
        console.log(last_result)
        console.log(time_used)
        console.log(time_result)
        console.log(game_log_add)
        game_log_add[game_log_add.length] = [time_result_i, last_result];
        console.log(game_log_add)
        // if (game_log_add.length > 10) {
        //     game_log_add.shift()
        // }
        for (var i = game_log_add.length-1; i > -1; i--) {
            antal_fel = 10 - game_log_add[i][0]
            antal_ratt = game_log_add[i][0]
            procent_ratt = (parseFloat(antal_ratt / 10)*100).toFixed(1)
            if (i == 6) {
                tre_senaste = tio_senaste
            }
            tio_senaste += procent_ratt
        }
        antal_fel = 10 - last_result
        antal_ratt = last_result
        procent_ratt = (parseFloat(antal_ratt / 10)*100).toFixed(1)
        localStorage.setItem("stat_log_add", game_log_add);
        return [antal_ratt, antal_fel, procent_ratt, tre_senaste, tio_senaste]
    }
    else if (mode == "/") {
        console.log("inne i mode")
        if (localStorage.getItem("stat_log_add") != null) {
            game_log_add = localStorage.getItem("stat_log_add");
        }
        tio_senaste = 0.0
        tre_senaste = 0.0
        antal_fel = 0
        antal_ratt = 0
        procent_ratt = 0
        console.log(last_result)
        console.log(time_used)
        console.log(time_result)
        console.log(game_log_add)
        game_log_add[game_log_add.length] = [time_result_i, last_result];
        console.log(game_log_add)
        // if (game_log_add.length > 10) {
        //     game_log_add.shift()
        // }
        for (var i = game_log_add.length-1; i > -1; i--) {
            antal_fel = 10 - game_log_add[i][0]
            antal_ratt = game_log_add[i][0]
            procent_ratt = (parseFloat(antal_ratt / 10)*100).toFixed(1)
            if (i == 6) {
                tre_senaste = tio_senaste
            }
            tio_senaste += procent_ratt
        }
        antal_fel = 10 - last_result
        antal_ratt = last_result
        procent_ratt = (parseFloat(antal_ratt / 10)*100).toFixed(1)
        localStorage.setItem("stat_log_add", game_log_add);
        return [antal_ratt, antal_fel, procent_ratt, tre_senaste, tio_senaste]
    }
}

console.log(has_answered)
console.log(answers(num1_array_in, num2_array_in, user_input))
console.log(answers(num1_array_in, num2_array_in, user_input))
console.log(input_array)
console.log(time_select.innerHTML)

    //Har lagt till detta för att det inte ska bli helt error, vet dock inte hur spagetti koden är skriven, behöver hitta de 
    //exakta ställerna där de ska vara placerade. Vi använder häller inte getinput funktionen, så vet inte varför den är skriven
