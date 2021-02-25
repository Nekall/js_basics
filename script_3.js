//Demander un chffre et en faire une pyramide ;)
let answer = "";
answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let space = " "
let compt = answer
let symbo = "#"

for(let count = 1; count <= answer; count++){
  compt-=1;
  check = space.repeat(compt);
  symb = symbo.repeat(count)
  console.log(check+symb);
}


/*
//Le ".repeat" :
//test = myString.repeat("Coucou");
//console.log(test);
*/
