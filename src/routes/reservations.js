const { Router } = require('express');
const reservationController = require('../controllers/reservationController');
const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, reservationController.createReservation);
router.get('/:id', authenticateToken, reservationController.getReservation);
router.put('/:id', authenticateToken, reservationController.updateReservation);
router.delete(
  '/:id',
  authenticateToken,
  reservationController.deleteReservation
);

module.exports = router;
