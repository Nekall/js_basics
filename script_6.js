let arn = "";
arn = prompt("Entre l'ARN à traduire en protéines :(Exemple: CCGUCGUUGCGCUACAGC; CCUCGCCGGUACUUCUCG)");
//===========================================================
//split en codon
function splitCodons() {
  let counter = 0;
  let buildCodon = "";
  let codonSize = 0;
  arrCodon = [];

  while(true){
    buildCodon = buildCodon + arn.charAt(counter);
    counter += 1;
    codonSize +=1;
    if(codonSize == 3){
      arrCodon.push(buildCodon);
      buildCodon = "";
      codonSize = 0;
    }
    if(counter == 18){
      break;
    }
  }
}
//===========================================================
//identification des codon
function identifyCodons() {
  let counter = 0;

  while(true){
    identifyCodon = arrCodon[counter];

    if(identifyCodon == "UUU" || identifyCodon == "UUC")
      arrCodon[counter] = "Phénylalanine";
    else if(identifyCodon == "UUA" || identifyCodon == "UUG")
      arrCodon[counter] = "Leucine";
    else if(identifyCodon == "UAU" || identifyCodon == "UAC")
      arrCodon[counter] = "Tyrosine";
    else if(identifyCodon == "CGU" || identifyCodon == "CGC" || identifyCodon == "CGA" || identifyCodon == "CGG" || identifyCodon == "AGA" || identifyCodon == "AGG")
      arrCodon[counter] = "Arginine";
    else if(identifyCodon == "UCU" || identifyCodon == "UCC" || identifyCodon == "UCA" || identifyCodon == "UCG" || identifyCodon == "AGU" || identifyCodon == "AGC")
      arrCodon[counter] = "Sérine";
    else if(identifyCodon == "CCU" || identifyCodon == "CCC" || identifyCodon == "CCA" || identifyCodon == "CCG")
      arrCodon[counter] = "Proline";


    counter += 1;
    if(counter == arrCodon.length){
      break;
    }
  }
}
//===========================================================
//Réunification en acides aminés
function joinAcides() {
  let counter = 0;
  let times = arrCodon.length;

  while(true){
    if(arrCodon[counter] == ""){
    arrCodon.splice(counter, 64);
    }
    if(counter == times){
      break;
    }
    counter += 1;
  }
}
splitCodons();
identifyCodons(arrCodon);
joinAcides();
console.log(`Ce morceau d'ARN : ${arn} nous donne la protéine suivante : ${arrCodon.join('-')}`);
