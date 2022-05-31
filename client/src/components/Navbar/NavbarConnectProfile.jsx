import React, { useEffect } from "react";
import {
  Container,
  Form,
  Button,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { BrowserRouter as Switch, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { logoutUser } from "../../redux/Action/EventAction";
import Logo from "../../Logo.png";
import { getuserinfo } from "../../redux/Action/UserAction";


function NavbarConnect() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const token = localStorage.getItem("token")
  const { Loading, users, error } = useSelector((state) => state.User_Select);
  let [Data, setData] = useState(users);
  useEffect(() => {
    dispatch(getuserinfo(token))
  }, [])

  // const history = useHistory();

  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
    //  <Navigate to="/" />;
  };
  return (
    <div className="navD">
      <Navbar
        bg="transparent"
        expand="lg"
        width="100%"
        className="d-flex justify-content-around"
      >
        <Link to={"/"}>
          <img
            src={Logo}
            alt=""
            width="70"
            height="70"  />
        </Link>
        <div>
          <h1></h1>
        </div>
        <div className="dropdownC" text-align="center">
          <div className="imgC">
            <img
              src="https://rohsco.rqoh.com/wp-content/uploads/sites/9/2019/09/default-profile.png"
              className="rounded-circle "
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <NavDropdown
              className="dropdownN"
              title={users.Username}
            >
              <div className="dropdownP">
                <NavDropdown.Item href="/Profile"> Profile</NavDropdown.Item>
                <NavDropdown.Item href="/Profile/edit">Paramétre</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Déconnexion</NavDropdown.Item>
              </div>
            </NavDropdown>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarConnect;
