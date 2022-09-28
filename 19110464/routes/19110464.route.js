const express = require('express')
const router = express.Router()

const controller_19110464 = require('../controllers/19110464.controller')

router.get('/:id', controller_19110464.get)

router.post('/', controller_19110464.post)

module.exports = router