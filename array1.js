//Lista de frutas - ARRAY

const frutas = ["Maçã", "Banana", "Uva", "Manga" ];
//ÌNDICE frutas 0 1 2 3

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas.length);
frutas[1] = "Morango"; //Altera o valor do elemento
frutas.push("Pessego");
frutas.unshift("Pera");
console.log(frutas)
console.log(frutas.length);

frutas[3]= "abacate";
frutas.push("melao");
console.log(frutas);

