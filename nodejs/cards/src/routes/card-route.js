const api = require('../controllers/card-controller')
var express = require('express')
var router = express.Router()

module.exports = (app) => {
    router.get('', api.findAll)
    router.get('/paginationAndSorting', api.pagination)
    router.post('', api.save)
    router.get('/:id', api.findById)
    router.delete('/:id', api.delete)
    router.put('/:id', api.update)

    app.use('/cards', router);
}