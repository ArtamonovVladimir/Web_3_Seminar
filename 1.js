const degreesCelsius = Number.parseInt(prompt("Введите температуру в градусах Цельсия: "));
alert(degreesFahrenheit(degreesCelsius));

function degreesFahrenheit(celsius) {
    let result = Math.round10((9 / 5) * celsius + 32);
    return result;
}