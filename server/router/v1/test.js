const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`<h1>Hello world!!</h1>`);
    res.end()
});

module.exports = router