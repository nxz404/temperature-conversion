const textBox = document.getElementById("textBox");;
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textBox.value); 
    if (textBox.value.trim() === "") {
        if(toFahrenheit.checked){
            result.textContent = "0°C é igual a 32°F (nada é igual a 0)";
            console.log("Converti para Fahrenheit OP 1");
        }
        else if(toCelsius.checked){
            result.textContent = "0°F é igual a -17.77°C (nada é igual a 0)";
            console.log("Converti para Celsius OP 1");
        }
        return;
    }
    if (isNaN(temp)) {
        result.textContent = "Por favor, insira um valor numérico!";
        console.log("Por favor, insira um valor numérico!");
    }
    else if (toFahrenheit.checked) {
        let f = (temp * 1.8) + 32;
        result.textContent = `${temp}°C é igual a ${f.toFixed(2)}°F`;
        console.log("Converti para Fahrenheit");
    }
    else if (toCelsius.checked) {
        let c = (temp - 32) / 1.8;
        result.textContent = `${temp}°F é igual a ${c.toFixed(2)}°C`;
        console.log("Converti para Celsius");
    }
    else {
        result.textContent = "Você precisa selecionar uma opção!";
    }
}





