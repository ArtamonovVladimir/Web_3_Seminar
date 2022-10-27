const degreesCelsius = Number.parseInt(prompt("Введите температуру в градусах Цельсия: "));
alert(`Температура ${degreesCelsius} в Цельсиях равна ${degreesFahrenheit(degreesCelsius)} в Фаренгейтах. `);

function degreesFahrenheit(celsius) {
    let result = (9 / 5) * celsius + 32;
    return result.toFixed(2);
}