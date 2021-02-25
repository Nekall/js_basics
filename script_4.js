const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("=============================================================================");
//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70:
function saySeventy() {
  let counter = 0;
  console.log("Voici un listing des entrepreneurs née dans les années 70 :");
  while (true) {
    if(entrepreneurs.length == counter){
      break;
    }
  if(entrepreneurs[counter].year >= 1970 && entrepreneurs[counter].year < 1980){

    console.log(`${entrepreneurs[counter].first} ${entrepreneurs[counter].last} est né·e en ${entrepreneurs[counter].year}.`);
  }
    counter += 1;
  }
}

saySeventy();
console.log("=============================================================================");
//Sors une array qui contient le prénom et le nom des entrepreneurs:
function sayNames() {
  let counter = 0;
  let arrNames = [];
  console.log("Voilà un array avec les noms et prénoms de chacun des entrepreneurs de l'array donné:");
  while (true) {
    if(entrepreneurs.length == counter){
      break;
    }
    arrNames.push(entrepreneurs[counter].first+ " " +entrepreneurs[counter].last);
    counter += 1;
  }
  console.log(arrNames);
}

sayNames();
console.log("=============================================================================");
//Quel âge aurait chaque inventeur aujourd'hui ?
function sayAges() {
  let counter = 0;
  console.log("Quel âge aurait chaque entrepreneurs aujourd'hui ?");
  while (true) {
    if(entrepreneurs.length == counter){
      break;
    }
    result  = (2021 - (entrepreneurs[counter].year));
    console.log(`L'age de ${entrepreneurs[counter].first} ${entrepreneurs[counter].last}aujourd'hui: ${result} ans.`);
    counter += 1;
  }
}

sayAges();
console.log("=============================================================================");
//Trie les entrepreneurs par ordre alphabétique du nom de famille:
function alphabeticalOrder() {
  let counter = 0;

  while (true) {
    if(entrepreneurs.length == counter){
      break;
    }
    entrepreneurs.sort(function(a, b){
      if(a.last < b.last) { return -1; }
      if(a.last > b.last) { return 1; }
      return 0;
    })
    counter += 1;
  }
  console.log("Voici la liste des entrepreneurs triée par l'odre alphabétique de leurs noms de famille: ");
  console.log(entrepreneurs);
}

alphabeticalOrder();
