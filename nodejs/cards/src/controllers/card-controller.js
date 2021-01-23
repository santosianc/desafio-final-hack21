const neDB = require('../configurations/database')
const api = {}

api.findAll = (request, response) => {
    neDB.find({}).sort({ customerName: 1 }).exec((exception, cards) => {
        if (exception) {
            const setence = 'Deu ruim na tentativa de listar todos os cards!'
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        response.json(cards)
    })
}

api.save = (request, response) => {
    const card = request.body
    neDB.insert(card, (exception, card) => {
        if (exception) {
            const setence = 'Deu ruim na tentativa de criar o card'
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        response.status(201)
        response.json(card)
    })
}

api.findById = (request, response) => {
    const {id} = request.params;
    neDB.find({_id: id}).sort({ customerName: 1 }).exec((exception, cards) => {
        if (exception) {
            const setence = 'Deu ruim na tentativa de encontrar o card '+id+"!";
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        response.json(cards)
    })
}

api.delete = (request, response) => {
    const {id} = request.params;
    neDB.remove({_id: id}, { multi: true }).sort({ customerName: 1 }).exec((exception, cards) => {
        if (exception) {
            const setence = 'Deu ruim na tentativa de deletar o card '+id+"!";
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        response.json(cards)
    })
}


api.update = (request, response) => {
    const {id} = request.params;
    const card = request.body;
    neDB.update({_id: id}, card, { multi: true }).sort({ customerName: 1 }).exec((exception, card) => {
        if (exception) {
            const setence = 'Deu ruim na tentativa de editar o card '+id+"!";
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        response.json(card)
    })
}

api.pagination = (request, response) => {
    let size, page;
    if(request.query.size){
        size = request.query.size;
    } else {
        size = 10;
    }

    if(request.query.page){
        page = request.query.page;
    } else {
        page = 0;
    }

    console.log(page);
    console.log(size);

    neDB.find({}).sort({ customerName: 1 }).skip(page * size).limit(size).exec((exception, card) => {
        if (exception) {
            const setence = 'Deu ruim na tentativa de listar o card '+id+"!";
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        response.json(card)
    })
}

module.exports = api