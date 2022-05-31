import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Home from './HomeOrg';
import { getOrganStatus, getuserinfo } from "../../../redux/Action/UserAction";

function Index() {

  const { Loading, user, error } = useSelector((state) => state.usereducer);
  const { LOADING, isActivate, err } = useSelector(
    (state) => state.OrganisateurReducer
  );
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (token) {

      dispatch(getOrganStatus(token));
      dispatch(getuserinfo(token));

    }
  }, [])
  return (
    <div>
      {
        LOADING ? (
          <h1 className="text" >
            {" "}
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
          </h1> 
        ) : (user) ? (
          (user.User.UserRole == "Admin") ?
            (<Navigate to="/Admin" />) :
            (user.User.UserRole == "client") ?
              (<Navigate to="/" />) :
              (<Home />)
        )
          :
          <Navigate to="/login" />

      }
    </div >

  )
}

export default Index;