const {Router} = require('express');

const cardRoutes = require('./cardRoutes.js')

const router = Router();

router.use('/cards', cardRoutes)

module.exports = router;