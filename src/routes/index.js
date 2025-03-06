const { Router } = require('express');
const authRouter = require('./auth');
const adminRouter = require('./admin');
const router = Router();

router.use('/auth', authRouter);
router.use('/admin', adminRouter);

module.exports = router;
