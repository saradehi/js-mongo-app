const {Router} = require('express');
const {getAllDogs} = require('../controllers/cards')


const router = Router();



router.get('/', async (req, res) => {
    const {name} = req.query;

    // if(name) {
    //     const card = await Cards.find({name: name})
    //     res.json(card)
    // } else {
    //     const cards = await Cards.find()
    //     res.json(cards)
    // }

    // const cards = await Cards.find()

    // if(name){
    //     const card = cards.filter(ele => ele.name.includes(name))
    //     res.json(card)
    // } else {
    //     res.json(cards)
    // }

    const dogs = await getAllDogs()

    if(name) {
        const card = dogs.filter(ele => ele.name.includes(name))
        res.json(card)
    } else {
        res.json(dogs)
    }
})

router.get('/:id', async(req, res) => {
    const {id}= req.params;

    const finded = await Cards.findById(id);

    if(finded){
        res.json(finded)
    } else {
        res.json('Dog not found')
    }
})

router.post('/', async(req, res) => {
    const {name, weight, life_span, image} = req.body;

    const newCard = new Cards({name, weight, life_span, image})
    await newCard.save()
    res.json(newCard)
});

router.put('/:id', async(req, res) => {
    const {id} = req.params;
    const {name, weight, life_span, image} = req.body;

    await Cards.findByIdAndUpdate(id, {name, weight, life_span, image})
    res.json({status: 'updated successfully'})
});

router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    
    await Cards.findByIdAndRemove(id)

    res.json({status: 'deleted succesfully'})
})

module.exports = router;