const idade = 16;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorIdade && possuiCNH; //E, and
console.log('Pode viajar sozinho?', podeDirigir);

const podeViajarSozinho = maiorIdade || possuiCNH; //ou, OR
console.log('Pode viajar sozinho?' , podeViajarSozinho);

const precisaDeAcompanhante = !maiorIdade;
console.log('Precisa de acompanhante?', precisaDeAcompanhante);