function convert() {

const inputValue = document.querySelector("input").value;
const milesToKm = document.querySelector("select").value;
let result = 0;
let resultString = "";

if (milesToKm === "milesToKm") {
    result = inputValue * 1.60934;
    resultString = inputValue + " миль = " + result + " км";
}

else {
    result = inputValue / 1.60934;
    resultString = inputValue + " км = " + result + " миль";
}

console.log(resultString);

const resultElement = document.getElementById("resultElement");
resultElement.innerHTML = resultString;
}