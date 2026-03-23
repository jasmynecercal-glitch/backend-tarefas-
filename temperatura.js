//Conversão de temperturas

const cidade ="Curitiba";
const tempCelsius = 23.3;

const tempFahrenheit =tempCelsius * (9/5)+ 32;
const tempKelvin = tempCelsius + 273.15;
const variacaoDiaria = 26.3 - tempCelsius;

console.log(`\nTemperatura em ${cidade} hoje está ${tempCelsius}.`);
console.log(`Celsius: ${tempCelsius}`);
console.log(`Fahrenheit: ${tempFahrenheit.toFixed(1)}Fº`);
console.log(`Kelvin:${tempKelvin}Kº`);
console.log(`\nVariação prevista:${variacaoDiaria.toFixed(1)}Cº`);

//fazer console.log para fahrenheit e para Kelvin