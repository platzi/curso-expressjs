const { Router } = require('express');
const authRouter = require('./auth');
const adminRouter = require('./admin');
const reservations = require('./reservations');
const router = Router();

router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/reservations', reservations);

module.exports = router;
