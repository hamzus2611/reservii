import React from "react";
import "./homeP.scss";
import Navbar from "../../components/Navbar/NavbarH";
import SidebarH from "../../components/Sidebar/SidebarH";
import Events from "../../UserComponents/events/Events";
// import { useState } from "react";
// import Filter from "../../UserComponents/filter/Filter";
// import { useDispatch } from 'react-redux';
// import { useEffect } from "react";
// import { getevent } from "../../redux/Action/EventAction";
// import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {

  // const { loading, users, err } = useSelector((state) => state.User_Select);
  // const { Loading, user, error } = useSelector((state) => state.usereducer);
  // const token = localStorage.getItem("token")


  return (
    <div className="homeP">

      <div className="homeContainerP">
        <Navbar />
        {/* <Filter Eventname={Eventname} handlechange={handlechange} /> */}
        <Events />
      </div>
    </div>
  );
}

// Events={events.filter((Event) => Event.Eventname.toUpperCase().includes(Eventname.toUpperCase()))}

export default Home;
