const { Router } = require('express');
const router = Router();
 
const personas = [
    {
        id: 1,
        name: 'Luis',
        lastName: 'Mukul',
        age: 22
    },
    {
        id: 2,
        name: 'Merly',
        lastName: 'Jimenez',
        age: 22
    },
    {
        id: 3,
        name: 'Fatima',
        lastName: 'Perera',
        age: 22
    }
];

//Get all
router.get('/all', (req, res) => {    
    res.json(
        personas
    );
})
 
//Get one
router.get('/one/:id', (req, res) => { 
    
    const { id } = req.params;
    
    let person = null;

    personas.forEach(row => {
        if (row.id == id) {
            person = row;
        }
    })

    if (person) {
        res.json(
            person
        );
    } else {
        res.status(500).json({
            error: 'Not found',
            message: 'The person don\'t exist'
        });
    }

})

//Post Create a person
router.get('/new', (req, res) => {
    const { name, lastname, age } = req.query;

    console.log(req.query);
    console.log(req.params);
    if (name && lastname && age) {
        personas.push({
            id: personas.length,
            name: name,
            lastName: lastname,
            age: age
        })

        res.json(personas)
    } else {
        
        res.status(500).json({
            error: 'Fields not found',
            message: 'The name, lastname and age is required'
        })
    }
})
router.post('/new/', (req, res) => {
    const { name, lastname, age } = req.body;

    if (name && lastname && age) {
        personas.push({
            id: personas.length,
            name: name,
            lastName: lastname,
            age: age
        })

        res.json(personas)
    } else {
        res.status(500).json({
            error: 'Fields not found',
            message: 'The name, lastname and age is required'
        })
    }
})
module.exports = router;
