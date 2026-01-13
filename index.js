const textBox = document.getElementById("textBox");;
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    const temp = textBox.value
    if (toFahrenheit.checked) {
        let f = (temp * 1.8) + 32;
        result.textContent = `${temp}°C é igual a ${f}°F`;
    }
    else if (toCelsius.checked) {
        let c = (temp - 32) / 1.8;
        result.textContent = `${temp}°F é igual a ${c}°C`;
    }
    if (!toFahrenheit.checked && !toCelsius.checked){
        result.textContent = "Você prescisa selecionar uma opção!";
    }
}
