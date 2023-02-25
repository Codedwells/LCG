const router = require('express').Router()

const test = require('./test')

router.use('/test',test)

module.exports = router