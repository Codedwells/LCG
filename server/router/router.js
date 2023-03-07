const { Router } = require('express');
const v1 = require('./v1/index');

const router = Router();

router.use('/api/v1', v1);

module.exports = router;
