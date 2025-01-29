
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
