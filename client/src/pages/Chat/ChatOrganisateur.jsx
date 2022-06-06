import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";

import Chatorg from "../../components/chat/Chatorg";
const host = "http://localhost:5000";

export default function ChatOrganisateur() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const token = localStorage.getItem("token");
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }
  }, []);
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(async () => {
    if (currentUser) {
      if (currentUser) {
        const data = await axios.get("/user/getadmin/", {
          headers: {
            authorization: token,
          },
        });
        console.log(data.data);
        setContacts(data.data);
        setCurrentChat(contacts[0]);
        //   } else {
        //     navigate("/setAvatar");
        //   }
      }
    }
  }, [currentUser]);

  return (
    <Container>
      <div className="container">
        <Chatorg currentChat={currentChat} socket={socket} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 320px;
  right: 0;
  height: 400px;
  width: 300px;
  border: 3px solid #73ad21;
  text-align: center;
  background-color: #131324;
  .container {
    text-align: center;
    rigth: 0;
    height: 380px;
    width: 280px;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 100% 100%;
  }
`;
