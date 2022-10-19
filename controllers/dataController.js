const Fruit = require('../models/fruit')

const dataController = {
    //index
    index(req, res, next){
        Fruit.find({}, (err, foundFruits) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.fruits = foundFruits
                next()
            }
        })

    },
    //destroy
    destroy(req, res, next){
        Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
            if (err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.fruit = deletedFruit
                next()
            }
        })
    }, 
    //update
    update(req, res, next){
        req.body.readyToEat = req.body.readyToEat === 'on'? true : false
        Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedFruit) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.fruit = updatedFruit
                next()
            }
        })
    },
    //create
    create(req, res, next){
        req.body.readyToEat = req.body.readyToEat === 'on'? true : false
        Fruit.create(req.body, (err, createdFruit) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.fruit = createdFruit
                next()
            }
        })
    },
    //edit and show are pulling the same data
    showEdit(req, res, next){
        Fruit.findById(req.params.id, (err, foundFruit) => {
            if (err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a fruit with that ID'
                })
            } else {
                res.locals.data.fruit = foundFruit
                next()
            }
        })
    }
}

module.exports = dataController