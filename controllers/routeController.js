// Start our router
// Import express 
const express = require('express')
// only the router none of the other app stuff
const router = express.Router()
// Need the model because the job of the model is to give us access to the DB
const dataController = require('./dataController')
const viewController = require('./viewController')

//Routes

//Index
router.get('/', dataController.index, viewController.index)
//new
router.get('/new', viewController.newView)
//destroy
router.delete('/:id', dataController.destroy, viewController.redirectHome)
//update
router.put('/:id', dataController.update, viewController.redirectShow)
//create
router.post('/', dataController.create, viewController.redirectHome)
//edit
router.get('/:id/edit', dataController.showEdit, viewController.edit)
//show
router.get('/:id', dataController.showEdit, viewController.show)

module.exports = router 