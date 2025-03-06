const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUserAppointments = async userId => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: { userId: parseInt(userId) },
      include: { timeBlock: true }
    });
    return appointments;
  } catch (error) {
    throw new Error('Error al obtener el historial de citas');
  }
};
