const textBox = document.getElementById("textBox");;
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    const temp = textBox.value
    if (isNaN(temp)) {
        result.textContent = "Por favor, insira um valor numérico!";
    }
    if(temp == ""){
        if(toFahrenheit.checked){
            result.textContent = "0°C é igual a 32°F (nada é igual a 0)"
        }
        else if(toCelsius.checked){
            result.textContent = "0°F é igual a -17.77777777777778°C (nada é igual a 0)"
        }
    }
    else if (toFahrenheit.checked) {
        let f = (temp * 1.8) + 32;
        result.textContent = `${temp}°C é igual a ${f}°F`;
    }
    else if (toCelsius.checked) {
        let c = (temp - 32) / 1.8;
        result.textContent = `${temp}°F é igual a ${c}°C`;
    }
    else if (!toFahrenheit.checked && !toCelsius.checked){
        result.textContent = "Você prescisa selecionar uma opção!";
    }
}





