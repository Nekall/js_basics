// Demander un chiffre, et en répondre la factorielle"
var answer = "";
var temp = 1;
answer = prompt("Choisis un chiffre pour en avoir la factorielle :");

for(var count = 1; count <= answer; count++){
  temp = (count*temp);
}

console.log(temp);
