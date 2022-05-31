import React, { useState } from "react";
import {
  getuserinfo,
  register,
  registerorganisateur,
} from "../../redux/Action/UserAction";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css";
import { Navigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useEffect } from "react";

const Register = () => {
  const [Username, setUsername] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  let { Loading, user, error } = useSelector((state) => state.usereducer);

  const token = localStorage.getItem("token");
  const handleLogin = (e) => {
    e.preventDefault();

    if (value === "Client") {
      setUserRole("Client");
      dispatch(register({ Username, Lastname, Email, Phone, Password }));
      setError(false);
    } else if (value === "Organisateur") {
      setUserRole("Organisateur");
      dispatch(
        registerorganisateur({ Username, Lastname, Email, Phone, Password })
      );

      setError(false);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  const [value, setValue] = React.useState("");
  const [UserRole, setUserRole] = React.useState("");
  const [Error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };
  const { loading, users, err } = useSelector((state) => state.User_Select);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "Client") {
      setUserRole("Client");
      setError(false);
    } else if (value === "Organisateur") {
      setUserRole("Organisateur");
      setError(false);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  useEffect(() => {
    if (token) {
      dispatch(getuserinfo(token));
    }
  }, []);
  return (
    <div className="bodyR">
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
        <div className="R">
          <form onSubmit={handleLogin} >
            <div className="TitR" >
              <h1 className="titreR">Créez votre compte</h1>
            </div>
            <div className="FormR">
              <div>
                <div>
                  <label className="labelR"> Nom </label>
                  <input
                    type="text"
                    className="inputR"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label className="labelR"> Prénom </label>
                  <input
                    type="text"
                    className="inputR"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div>
                <div>
                  <label className="labelR"> Adresse e-mail </label>
                  <input
                    type="email"
                    className="inputR"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="labelR"> Num téléphone </label>
                  <input
                    type="text"
                    className="inputR"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="motpassR">
                <div>
                  <label className="labelR"> Mot de pass </label>
                  <input
                    type="password"
                    className="inputR"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="labelR"> Confirmer mot de pass </label>
                  <input
                    type="password"
                    className="inputR"
                  // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div style={{ "textAlign": "center" }}>


            </div>
            <div className="choiceR">
              <FormControl sx={{ m: 3 }} Error={Error} variant="standard">
                <div className="choiceBR">
                  <FormLabel>
                    Choisissez le type de compte:
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="radios"
                    name="userRole"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="Client"
                      control={<Radio />}
                      label="Client"
                    />
                    <FormControlLabel
                      value="Organisateur"
                      control={<Radio />}
                      label="Organisateur"
                    />
                  </RadioGroup>
                </div>
              </FormControl>
              <button className="buttonR"> Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
