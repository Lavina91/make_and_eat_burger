// requiring in the express package
const express = require('express');

// creating a variable to store the router method
const router = express.Router();

// --------- ROUTES -----------------------------

// homepage route
router.get('/', (req, res) => {});

// create burger route
router.post('/api/burgers', (req, res) => {});

// devoured or not route
router.put('/api/burgers/:id', (req, res) => {});




