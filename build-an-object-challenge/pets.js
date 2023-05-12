// Create an array of 'pet' objects
let pets = [
  {
    name: 'Joey',
    type: 'Dog',
    breed: 'Australian Shepherd',
    age: 8,
    photo: 'img/aussie.jpg'
  },
  {
    name: 'Max',
    type: 'Dog',
    breed: 'Dachshund',
    age: 5,
    photo: 'img/dachshund.jpg'
  },
  {
    name: 'Charlie',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: 7,
    photo: 'img/golden.jpg'
  },
  {
    name: 'Bella',
    type: 'Cat',
    breed: 'Persian',
    age: 4,
    photo: 'img/persian.jpg'
  },
  {
    name: 'Milo',
    type: 'Dog',
    breed: 'Pug',
    age: 6,
    photo: 'img/pug.jpg'
  },
  {
    name: 'Whiskers',
    type: 'Cat',
    breed: 'Tabby',
    age: 3,
    photo: 'img/tabby.jpg'
  },
];

// Function to display pets in the webpage
function displayPets() {
  let mainElement = document.querySelector('main');
  pets.forEach(pet => {
    mainElement.innerHTML += `
      <h2>${pet.name}</h2>
      <h3>${pet.type} | ${pet.breed}</h3>
      <p>Age: ${pet.age}</p>
      <img src="${pet.photo}" alt="${pet.breed}">
    `;
  });
}

// Call the function to display the pets
displayPets();
