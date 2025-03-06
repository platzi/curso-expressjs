const { Router } = require('express');
const {
  createTimeBlock,
  listReservations
} = require('../controllers/adminController');

const router = Router();

router.post('/time-blocks', createTimeBlock);
router.get('/reservations', listReservations);
