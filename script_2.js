// Demander un chiffre, et en répondre la factorielle"
let answer = "";
let temp = 1;
answer = prompt("Choisis un chiffre pour en avoir la factorielle :");

for(let count = 1; count <= answer; count++){
  temp = (count*temp);
}

console.log(`La factorielle de ${answer} est : ${temp}`);
