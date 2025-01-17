
function deletelast() {
    const num1 = document.getElementById('num1')

    num1.value = num1.value.slice(0, -1)
}


function ClearDisplay() {

    const num1 = document.getElementById('num1').value = '';
}


const num1 = document.getElementById("num1");


function numbers(input) {
    num1.value += input;
}


function calculate() {
    num1.value = eval(num1.value);
}



































// function numbers(oprtr) {
//     console.log(oprtr, "calll")
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let numbers = parseFloat(document.getElementById("numbers").value);


//     let sum

//     if (oprtr == 'add') {

//         sum = num1 + numbers;

//     }


//     if (oprtr == 'subtract') {

//         sum = num1 - numbers

//     }

//     if (oprtr == 'multiply') {

//         sum = num1 * num2

//     }


//     if (oprtr == 'divide') {

//         sum = num1 / num2

//     }



//     document.getElementById('result').innerText = sum;
// }






/////////////////////////////////
// function numbers(number) {

//     document.getElementById("num1").value = document.getElementById("num1").value + number

// }


// function input(number) {

//     document.getElementById("result").value = document.getElementById("numbers").value + numbers
// }

