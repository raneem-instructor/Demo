// index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body for POST requests
app.use(express.json());

// In-memory "database" of pets
let pets = [
  { id: 1, name: 'Buddy', type: 'Dog' },
  { id: 2, name: 'Mittens', type: 'Cat' }
];

// GET endpoint to retrieve all pets
app.get('/pets', (req, res) => {
  res.json(pets);
});

// POST endpoint to add a new pet
app.post('/pets', (req, res) => {
  const newPet = req.body;
  newPet.id = pets.length + 1; // Automatically assign an ID
  pets.push(newPet);
  res.status(201).json(newPet); // Return the new pet
});

// GET endpoint to retrieve a pet by ID
app.get('/pets/:id', (req, res) => {
  const petId = parseInt(req.params.id, 10);
  const pet = pets.find(p => p.id === petId);
  
  if (!pet) {
    return res.status(404).json({ message: 'Pet not found' });
  }
  
  res.json(pet);
});

// Start the server
app.listen(port, () => {
  console.log(`Pets API is running at http://localhost:${port}`);
});
