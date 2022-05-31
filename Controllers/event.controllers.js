const Event = require('../models/Event')
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('secret');

// import MyEvents from './../client/src/OrganisateurPages/Event/Event';


exports.CreateEvent = async (req, res) => {
  const { Eventname, date, EventType, NumPlaceTotal, NumPlaceRest, Prix, Eventimage } = req.body;
  token = await req.headers.authorization;
  const decodedToken = jwt.verify(token, secret);
  const id = decodedToken.id;
  let numberTickedispo = []
  try {
    for (let index = 1; index <= NumPlaceTotal; index++) {
      numberTickedispo.push(index);

    }
    let NewEvent = await new Event({
      Eventname,
      date,
      EventType,
      NumPlaceTotal,
      NumPlaceRest,
      numberTickedispo,
      Prix,
      Eventimage,
      id_User: id
    })
    await NewEvent.save();
    return res.send(NewEvent);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


exports.DeleteEvent = async (req, res) => {

  try {
    const deleteEvent = await Event.findByIdAndDelete(req.params.id)
    res.send({ msg: `${deleteEvent.Eventname} was successfully Deleted` })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


exports.EditEvent = async (req, res) => {

}

// getEvent 
exports.getevent = async (req, res) => {

  try {
    let event = await Event.find()
    return res.send(event);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

//********* get event by id***** */

exports.getoneevent = async (req, res) => {

  try {
    let myevent = await Event.findById(req.params.id)
    console.log(req.params)
    return res.status(200).send(myevent)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


// get organisatuer events


exports.getEventOrganisateur = async (req, res) => {

  // mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
  // const { id } =mongoose.Types.ObjectId(req.params.id);

  console.log(req.params.id)
  try {
    const token = req.params.id
    const decodedToken = jwt.verify(token, secret);
    console.log(decodedToken)
    const id = decodedToken.id;
    let MyEvent = await Event.find({
      "id_User": id
    })
    return res.send(MyEvent)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }



}