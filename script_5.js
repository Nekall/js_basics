const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
console.log("=============================================================================");
//Est-ce que tous les livres ont été au moins empruntés une fois ?
function borrowedBooks() {
  let counter = 0;
  let check = 0;

  console.log("Les livres ont été tous au moins empruntés une fois ?");
  while (true) {
    if(books.length == counter){
      break;
    }
    if(books[counter].rented > 0){
      check += 1
      }
      counter += 1;
  }
  if(check == books.length){
    console.log("Tous les livres ont été empruntés au moins une fois ;)");
  }
  else{
    console.log("Il semblerait que tous les livres non pas été empruntés.");
  }
}
borrowedBooks();
console.log("=============================================================================");
//Quel est livre le plus emprunté ?
function mostRead() {
  let counter = 0;

  console.log("Quel est livre le plus emprunté ?");
  while (true) {
    if(books.length == counter){
      break;
    }
    books.sort(function(a, b){
      if(a.rented < b.rented) { return -1; }
      if(a.rented > b.rented) { return 1; }
      return 0;
    })
  counter += 1;
  }
  console.log(`${books[counter-1].title} avec ${books[counter-1].rented} emprunts.`);
}

mostRead();
console.log("=============================================================================");
//Quel est le livre le moins emprunté ?
function leastRead() {
  let counter = 0;

  console.log("Quel est livre le moins emprunté ?");
  while (true) {
    if(books.length == counter){
      break;
    }
    books.sort(function(a, b){
      if(a.rented < b.rented) { return -1; }
      if(a.rented > b.rented) { return 1; }
      return 0;
    })
  counter += 1;
  }
  console.log(`${books[0].title} avec ${books[0].rented} emprunts.`);
}

leastRead();
console.log("=============================================================================");
//Trouve le livre avec l'ID: 873495
function foundId() {
  console.log("Quel est le livre avec l'ID: 873495 :");
  idsBook = books.find( ({ id }) => id === 873495 );
  console.log(`${idsBook.title} a l'id ${idsBook.id}`);
}

foundId();
console.log("=============================================================================");
//Supprime le livre avec l'ID: 133712
function deleteBook() {

  console.log("Supprimer le livre avec l'id : 133712");
  idsBook = books.find( ({ id }) => id === 133712 );
  books.shift()
  console.log(books);
}

deleteBook();
console.log("=============================================================================");
//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712)

function alphabeticalBooks() {
  let counter = 0;

  while (true) {
    if(books.length == counter){
      break;
    }
    books.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    })
    counter += 1;
  }
  console.log("Voici la liste des livres triée par l'odre alphabétique :");
  console.log(books);
}
alphabeticalBooks();
