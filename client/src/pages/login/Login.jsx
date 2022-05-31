import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuserinfo, login } from "../../redux/Action/UserAction";
import "./Login.css";
import { BrowserRouter as Switch, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../Logo.png";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.usereducer);
  const { Loading, users, err } = useSelector((state) => state.User_Select);
  const token = localStorage.getItem("token");
  // console.log(users.UserRole);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ Email, Password }));
  };
  useEffect(() => {
    if (token) {
      dispatch(getuserinfo(token));
    }
  }, []);
  return (
    <div className="bodyL" >
      {Loading ? (
        <h1 className="text" >
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </h1> 
      ) : token ? (
        users.UserRole == "Admin" ? (
          <Navigate to="/Admin" />
        ) : users.UserRole == "Organisateur" ? (
          <Navigate to="/organisateur" />
        ) : (
          <Navigate to="/" />
        )
      ) : (
          <div className="L">
            <form onSubmit={handleLogin} >
              <div className="TitL" >
                    <img
                      src={Logo}
                      alt=""
                      width="150"
                      height="150"
                    />
                <h1 className="titreL"> </h1>
              </div>
              <div className="formL">
                {/* <label className="labelL" >Email</label> */}
                <input
                  type="email"
                      className="inputL" placeholder="Entrer l'adresse e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <label className="labelL">Password</label> */}
                <input
                  type="password"
                      className="inputL" placeholder="Entrer le mot de pass" 
                  onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="footerL">
                {error ? (
                      <div style={{ color: "red" }}>Adresse e-mail ou mot de passe incorrect</div>
                ) : (
                  " "
                )}
                    <button className="buttonL">Connexion</button>
              Vous n'avez pas encore de compte ?{" "}
                    <Link className="linkL" to="/register">S'inscrire!</Link>
              </div>
            </form>
          </div>
      )}
    </div>
  );
};

export default Login;
