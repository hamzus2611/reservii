const express = require('express');
const cors = require("cors");
const connectDB = require("./config/connectDB")
const user = require('./routes/user')
const event = require('./routes/event')
const ticket = require('./routes/ticket')
const messages = require('./routes/messages')
const socket = require("socket.io");
const app = express();
connectDB();

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;
app.use('/user', user);
app.use('/message', messages);
app.use('/event', event);
app.use('/ticket', ticket)


const server = app.listen(PORT, err => err ? console.log(err) : console.log(`serveur running on PORT ${PORT}`));
const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });
  global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
