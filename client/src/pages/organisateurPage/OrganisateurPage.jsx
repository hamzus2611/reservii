import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../../OrganisteurComponents/navbar/Navbar";
import { getOrganStatus, getuserinfo } from "../../redux/Action/UserAction";
import SidebarOrginisateur from "../../Organisateur/OrganisateurComponents/sidebar/SidebarOrginisateur";
import { logoutUser } from "../../redux/Action/EventAction";
import { useNavigate } from 'react-router-dom';

const OrganisateurPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { LOADING, isActivate, err } = useSelector(
    (state) => state.OrganisateurReducer
  );
  const { Loading, users, error } = useSelector((state) => state.User_Select);
  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
    //  <Navigate to="/" />;
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(getOrganStatus(token));
      dispatch(getuserinfo(token));
    }
  }, []);
  return (
    <div>
      {LOADING ? (
        <h1 className="text" >
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </h1> 
      ) : (
        <div>
          {isActivate ? (
            <div>
              {/* <Navbar /> */}
              <SidebarOrginisateur />
              
            </div>
          ) : (
            <div style={{textAlign:"center"}}>
              Bonjour {users.Username}
              <br />
              Votre compte n'est pas activée
              <br />
              Vouz pouvez contacte l'adminisatration de site
              <br />
              <button onClick={logout}>déconnexion</button>

            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrganisateurPage;
