/*
    Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
    Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
    Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
*/
let sentence = "";
sentence = prompt("Wesh tu veux quoi ?");

//split sentence

let counter = 0;
let size = sentence.length
var arrChars = [];


while (true) {
  if (counter == size) {
    break;
  }
  character = sentence.charAt(counter);
  arrChars.push(character);
  counter += 1;
}


if (sentence == "") {
  console.log("T'es en PLS ?");
} else if (arrChars[size] == "?") {
  console.log("Ouais Ouais...");
} else {
  console.log("balek.");
}
