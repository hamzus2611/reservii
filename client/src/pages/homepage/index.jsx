import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getuserinfo } from "../../redux/Action/UserAction";
import { useNavigate } from "react-router-dom";
import Home from "./HomePage";

function Index() {
  const navigate = useNavigate();

  const { loading, users, err } = useSelector((state) => state.User_Select);
  const { Loading, user, error } = useSelector((state) => state.usereducer);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      if (
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY.UserRole) ==
        "Admin"
      ) {
        navigate("/Admin");
      }
      if (
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY.UserRole) ==
        "Organisateur"
      ) {
        navigate("/organisateur");
      }
    } else {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    if (token) {
      dispatch(getuserinfo(token));
    }
  }, []);
  return (
    <div>
      {loading ? (
        <h1 className="text">
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </h1>
      ) : token ? (
        user ? (
          user.User.UserRole == "Admin" ? (
            <Navigate to="/Admin" />
          ) : user.User.UserRole == "Organisateur" ? (
            <Navigate to="/organisateur" />
          ) : (
            <Home />
          )
        ) : users ? (
          users.UserRole == "Admin" ? (
            <Navigate to="/Admin" />
          ) : users.UserRole == "Organisateur" ? (
            <Navigate to="/organisateur" />
          ) : (
            <Home />
          )
        ) : (
          <Home />
        )
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Index;
