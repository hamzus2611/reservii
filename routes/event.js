const express = require('express');
const { CreateEvent, DeleteEvent, getevent, getoneevent ,getEventOrganisateur } = require('../Controllers/event.controllers');
const { CreateEventsRules, validator } = require('../Middleware/EventsRules');
// const multer = require('multer')
// const upload = multer({ dest: "./client/public/eventsimg/"})   upload.single('Eventimage')
const router = express.Router();

router.post('/CreateEvent', CreateEventsRules(), validator, CreateEvent);
router.delete('/DeleteEvent' , DeleteEvent);
router.get('/getoneevent/:id',getoneevent)
router.get('/getevent', getevent);
router.get('/getEventOrganisateur/:id', getEventOrganisateur);

module.exports = router;