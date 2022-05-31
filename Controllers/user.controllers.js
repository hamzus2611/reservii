const bc = require('bcrypt')
const user = require('../models/User');
const Event = require('../models/Event')
const Ticket = require('../models/Ticket')
var jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('secret');
const nodemailer = require('nodemailer');
const { findByIdAndUpdate, count } = require('../models/User');
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: 'Reservi@outlook.fr',
    pass: 'projet22PFE'
  }
}
)


exports.register = async (req, res) => {

  const { Username, Lastname, Email, Phone, Password, UserRole } = req.body;
  // console.log(req)
  try {
    let User = await user.findOne({ Email })
    if (User) {
      return res.status(400).json("user is exist")
    }
    let NewUser = await new user({
      Username,
      Lastname,
      Email,
      Phone,
      Password: hash,
      UserRole
    })
    var slat = await bc.genSalt(10);
    var hash = await bc.hash(Password, slat);
    NewUser.Password = hash;
    NewUser.save();
    const payload = {
      id: NewUser._id,
      UserRole: NewUser.UserRole

    }
    const token = jwt.sign(payload, secret);
    // console.log(token)
    res.send({
      token,
      user: {
        name: Username,
        lastname: Lastname,
        email: Email,
        phone: Phone,
        isActivated: true,
        role: UserRole
      }
    });
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


exports.login = async (req, res) => {

  const { Email } = req.body;
  try {
    let User = await user.findOne({ Email })
    if (!User) {
      return res.status(401).json("wrong password or email");
    }
    const validationPassword = await bc.compare(req.body.Password, User.Password)
    if (!validationPassword) {
      return res.status(401).json("wrong password or email");
    }
    const payload = {
      id: User._id,
      UserRole: User.UserRole
    }
    const token = jwt.sign(payload, secret)

    res.send({
      token,
      User: {
        name: User.Username,
        UserRole: User.UserRole,
        lastname: User.Lastname,
        email: User.Email,
        phone: User.Phone,
      }
    })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


// getClient 
exports.getClient = async (req, res) => {

  try {
    let client = await user.find({ "UserRole": "Client" })

    let clients = [];
    // client sans motpass
    for await (let i of client) {
      const cl = {
        _id: i._id,
        Username: i.Username,
        Lastname: i.Lastname,
        Email: i.Email,
        Phone: i.Phone,
      }
      clients.push(cl)
    }

    return res.send(clients);

  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// get organisateur
exports.getOrganisateur = async (req, res) => {
  try {
    let organisateur = await user.find({ "UserRole": "Organisateur" })
    //if (organisateur) return organisateur
    // organisateur sans motpass
    let organisateurs = [];
    for await (let i of organisateur) {
      const or = {
        _id: i._id,
        Username: i.Username,
        Lastname: i.Lastname,
        Email: i.Email,
        Phone: i.Phone,
      }
      organisateurs.push(or)
    }
    return res.send(organisateurs);

  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

exports.getAdmin = async (req, res) => {
  try {
    let admin = await user.find({ "UserRole": "Admin" })

    let admins = [];
    for await (let i of admin) {
      const ad = {
        _id: i._id,
        Username: i.Username,
        Lastname: i.Lastname,
        Email: i.Email,
        Phone: i.Phone
      }
      admins.push(ad)
    }
    return res.send(admins);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

exports.registerOrganisateur = async (req, res) => {
  const { Username, Lastname, Email, Phone, Password } = req.body;
  const UserRole = "Organisateur"
  console.log(Password)
  try {
    let User = await user.findOne({ Email })
    if (User) {
      return res.status(400).json("user does exist")
    }
    let NewUser = await new user({
      Username,
      Lastname,
      Email,
      Phone,
      isActivated: false,
      UserRole,
      Password: hash
    })
    var slat = await bc.genSalt(10);
    var hash = await bc.hash(Password, slat);
    NewUser.Password = hash;
    NewUser.save()

    var mailOptions = {
      from: 'Reservi@outlook.fr',
      to: Email,
      subject: 'Sending Email for your password',
      text: `Hello ${Username}
       congratulation!! You have subscribed to Organisteur-community 
       YOUR 
                  - Email : ${Email}
                  - Password : ${Password} 
      thanks!.`
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    const payload = {
      id: NewUser._id,
      UserRole: NewUser.UserRole

    }
    const token = jwt.sign(payload, secret);
    console.log(token)
    return res.send({ token })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

function strRandom(o) {
  var a = 10,
    b = 'abcdefghijklmnopqrstuvwxyz',
    c = '',
    d = 0,
    e = '' + b;
  if (o) {

    if (o.length) {
      a = o.length;
    }
    if (o.includeUpperCase) {
      e += b.toUpperCase();
    }
    if (o.includeNumbers) {
      e += '1234567890';
    }
  }
  for (; d < a; d++) {
    c += e[Math.floor(Math.random() * e.length)];
  }
  return c;
}

exports.registerAdmin = async (req, res) => {
  const { Username, Lastname, Email, Phone } = req.body
  const UserRole = "Admin"
  const passwordM = await strRandom({
    includeUpperCase: true,
    includeNumbers: true,
    length: 8
  })
  const Password = passwordM
  try {
    let User = await user.findOne({ Email })
    if (User) {
      return res.status(400).json("user does exist")
    }
    let NewUser = await new user({
      Username,
      Lastname,
      Email,
      Phone,
      UserRole,
      Password
    })
    NewUser.save()

    var mailOptions = {
      from: 'Reservi@outlook.fr',
      to: Email,
      subject: 'Sending Email for your password',
      text: `Hello ${Username}
       congratulation!! You have subscribed to Admin-community 
       YOUR 
                  - Email : ${Email}
                  - Password : ${Password} 
      thanks!.`
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    return res.send('Admin register')
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

//getuserinfo with token

exports.getuserinfo = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, secret);
    const id = decodedToken.id;
    console.log(id)
    const USER = await user.findById(id);
    console.log(USER.Username)
    if (!USER) {
      return res.status(403).json("user id invalide!");
    }

    const userinfo = {
      Username: USER.Username,
      UserRole: USER.UserRole,
      Lastname: USER.Lastname,
      Email: USER.Email,
      Phone: USER.Phone
    }
    return res.send(userinfo)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// get organisateur non accepté
exports.getOrgNonAcc = async (req, res) => {
  try {
    const User = await user.find({ "isActivated": false })
    if (!User) {
      return res.status(200).json("Aucune invitation existe")
    }
    return res.send(User)
  } catch (error) {
    res.status(500).json({ msg: error.message })

  }
}


//get organisateur status
exports.getOrgstat = async (req, res) => {
  const token = await req.headers.authorization
  const decodedToken = jwt.verify(token, secret);
  const id = decodedToken.id;
  // console.log(id)
  try {
    const USER = await user.findById(id);
    if (!USER) {
      return res.status(301).json("Aucune invitation existe")
    }

    return res.send(USER.isActivated)
  } catch (error) {
    res.status(500).json({ msg: error.message })

  }
}
// Accept Organisateur

exports.AcceptOrgan = async (req, res) => {
  try {
    id = await req.params.id
    console.log(id)
    user.findByIdAndUpdate(id,
      {
        $set: {
          isActivated: true
        }
      },
      {
        new: true, upsert: true, setDefaultsOnInsert: true
      }, (err, docs) => {
        if (err) { return res.status(500).json({ message: err }) }
      }
    )
    return res.status(200).json("ok")
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Edit User

exports.EditUser = async (req, res) => {
  try {
    token = await req.headers.authorization;
    const decodedToken = jwt.verify(token, secret);
    const id = decodedToken.id;
    user.findByIdAndUpdate(id,
      {
        $set: {
          Username: req.body.Username,
          Lastname: req.body.Lastname,
          Email: req.body.Email,
          Phone: req.body.phone
        }
      },
      {
        new: true, upsert: true, setDefaultsOnInsert: true
      }, (err, docs) => {
        if (err) { return res.status(500).json({ message: err }) }
      }
    )
    return res.status(200).json("ok")
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}


// stat admin 
exports.statAdmin = async (req, res) => {
  try {

    token = await req.headers.authorization;
    const decodedToken = jwt.verify(token, secret);
    const id = decodedToken.id;
    const Event_Num = await Event.count()
    const Ticket_Num = await Ticket.count()

    const admin = await user.find({ "UserRole": "Admin" })
    console.log(admin.length)
    Admin_Num = await admin.length

    const organ = await user.find({ "UserRole": "Organisateur" })
    Organ_Num = await organ.length

    let client = await user.find({ "UserRole": "Client" })
    Client_Num = await client.length;


    const User_Num = await user.count()

    const Stat = {
      Event_Num: Event_Num,
      Ticket_Num: Ticket_Num,
      Client_Num: Client_Num,
      Admin_Num: Admin_Num,
      Organ_Num: Organ_Num,
      User_Num: User_Num,
    }

    return res.send(Stat)

  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

// stat Organisateur
exports.statOrgan = async (req, res) => {
  const TICK = []

  try {
    token = await req.headers.authorization;
    const decodedToken = jwt.verify(token, secret);
    const id = decodedToken.id;
    const MyEvent = await Event.find({ "id_User": id })
    if (MyEvent) {
      for (let pas = 0; pas < MyEvent.length; pas++) {
        console.log(MyEvent[pas]._id)
        let id_MyEvent = await (MyEvent[pas]._id).toString();
        let ticket = await Ticket.find({ id_Event: id_MyEvent })
        TICK.push(ticket)
      }
    }
    const Event_Num = await MyEvent.length

    const Stats = {
      Event_Num: Event_Num,
      Ticket_Num: TICK.length,
    }

    return res.send(Stats)

  } catch (error) {

    res.status(500).json({ msg: error.message })
  }
}