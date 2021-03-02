// requiring in the express package
const express = require('express');
const burger = require('../models/burger.js')

// creating a variable to store the router method
const router = express.Router();

// --------- ROUTES -----------------------------

// homepage route
router.get('/', (req, res) => {

    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    })

});

// create burger route
router.post('/api/burgers', (req, res) => {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({id: result.insertId});
    })
});

// devoured or not route
router.put('/api/burgers/:id', (req, res) => {

    const condition = `id = ${req.params.id}`;
    console.log('condition', condition)

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
               return res.status(404).end(); 
            }
            res.status(200).end()
        })
    });


module.exports = router;

