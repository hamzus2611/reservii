import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getuserinfo } from '../../../redux/Action/UserAction';
import Home from './Home';

function Index() {

 const { loading, users, err } = useSelector((state) => state.User_Select);
 const { Loading, user, error } = useSelector((state) => state.usereducer);
 const dispatch = useDispatch()
 const token = localStorage.getItem("token")
 useEffect(() => {
  if (token) {
   dispatch(getuserinfo(token))
  }
 }, [])
 return (
  <div>

   {loading ? (
       <h1 className="text" >
         {" "}
         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
       </h1>
   ) : token ? (
    (user) ? (
     (user.User.UserRole == "client") ? (
      <Navigate to="/" />)
      :
      (user.User.UserRole == "Organisateur") ? (
       <Navigate to="/organisateur" />
      ) : (<Home />)
    ) : (users) ? (
     (users.UserRole == "client") ? (<Navigate to="/" />) :
      (users.UserRole == "Organisateur") ? (<Navigate to="/organisateur" />) : (
       <Home />)
    ) :
     <Navigate to="/" />

   ) :

    <Navigate to="/" />
   }
  </div>
 )
}

export default Index