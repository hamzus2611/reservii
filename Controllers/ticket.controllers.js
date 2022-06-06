const Event = require('../models/Event');
const Ticket = require('../models/Ticket')
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User')

const secret = config.get('secret');

// const date = require('date')

//****** */ cree une ticket **********
exports.CreateTicket = async (req, res) => {
    const { Date, NumPlaceReserve, id_Event } = await req.body;
    const token = req.headers.authorization;
    // console.log(req.headers)
    const decodedToken = await jwt.verify(token, secret);
    const id_User = await decodedToken.id;
    const id_Organisateur = await decodedToken.id;
    // const today= await date.now()
    try {
        let evt = await Event.findOne({ id_Event })
        if (!evt) {
            return res.status(501).json("Vérifier l'evenement")
        }
        // else if(Date <= today){
        //  res.status(301).json("L'evenement")
        // }

        console.log(`nombre de place reste ${evt.NumPlaceRest}`)
        const x = await (evt.NumPlaceRest - NumPlaceReserve)
        console.log(NumPlaceReserve)
        console.log(`x=${x}`)
        evt = await Event.findByIdAndUpdate(id_Event, { NumPlaceRest: x })
        console.log(evt.NumPlaceRest)

        if (evt.NumPlaceRest <= 0) {
            return res.status(301).json('Les tickets sont complé')
        }
        for (pas = 0; pas < NumPlaceReserve; pas++) {

            const array = await Event.findById(id_Event)
            const array2 = await array.numberTickedispo


            console.log(array2)
            const array3 = await array2.shift()
            console.log(array2)

            const updtevent = await Event.findOneAndUpdate({ _id: id_Event }, { numberTickedispo: array2 })
            let NewTicket = await new Ticket({
                TicketNum: updtevent.numberTickedispo[0],
                Date,
                id_Event,
                id_User
            })
            // console.log(NewTicket)
            await NewTicket.save();
        }
        return res.send("ticke saved");
    } catch (error) {
        console.log(error.response.data)
        res.status(500).json({ msg: error.message })
    }
}


// ****** Annulation ticket

exports.AnnulationTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findOneByIdAndDelete(req.body._id)
        const event = await Event.findByIdAndUpdate(ticket.id_Event, { NumPlaceRest: NumPlaceRest + ticket.NumPlaceReserve })

        res.status(301).json("Ticket annuler par successe")

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}


//****** Get ticket
exports.getTicket = async (req, res) => {
    const TICK = []
    const token = req.headers.authorization;
    try {
        const decodedToken = await jwt.verify(token, secret);
        const id_User = await decodedToken.id;
        let ticket = await Ticket.find({ id_User: id_User })
        if (ticket) {
            for (let pas = 0; pas < ticket.length; pas++) {
                let id = ticket[pas].id_Event.toString();
                const event = await Event.findOne({ "_id":id })
                console.log(event)
                if (event) {
                    const ticketinfo = {
                        ticketNum: ticket[pas].TicketNum,
                        Eventname: event.Eventname,
                        date: event.date,
                        Prix: event.Prix
                    };
                    TICK.push(ticketinfo)
                }

            }
            console.log(TICK)
            return res.send(TICK)
        }
        console.log(ticket)
        return res.send(ticket);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//**** Get ticket 

exports.GetTicketinfo = async (req, res) => {

    let TICK = []

    try {
        token = await req.headers.authorization;
        const decodedToken = jwt.verify(token, secret);
        const id = decodedToken.id;
        const MyEvent = await Event.find({ "id_User": id })
        if (MyEvent) {
            for (let pas = 0; pas < MyEvent.length; pas++) {
                // console.log(MyEvent[pas])
                let id_MyEvent = await (MyEvent[pas]._id).toString();
                console.log(id_MyEvent)
                let ticket = await Ticket.find({ "id_Event": id_MyEvent })
                if (ticket) {
                    for (let i = 0; i < ticket.length; i++) {
                        _id_user = await ticket[i].id_User.toString();
                        let user = await User.findOne({"_id": _id_user })
                        if (user) {
                            const tick_info = {
                                ClientName: user.Username,
                                ClientLastname: user.Lastname,
                                datetick: ticket[i].Date,
                                id_tick: ticket[i]._id,
                                nameEvent: MyEvent[pas].Eventname
                            };
                            TICK.push(tick_info)

                        }
                    }
                }
            }
        }



        return res.send(TICK)



    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}




