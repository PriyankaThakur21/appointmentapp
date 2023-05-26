const express = require('express');
const router = express.Router();

const controller = require('./controllers');

router.get('/appointmentapp', controller.getAppointmentApp);

router.post('/users/data', controller.PostUsers);

router.get('/getUsers', controller.getUsers)

router.delete('/deleteUser/:userid', controller.deleteUsers)

module.exports = router;