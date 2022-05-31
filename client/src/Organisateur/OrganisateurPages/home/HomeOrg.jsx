// import Sidebar from "../..//OrganisateurComponents/sidebar/Sidebar";
// import Navbar from "../../OrganisateurComponents/navbar/Navbar";
import "./home.scss";
import Widget from "../../OrganisateurComponents/widget/Widget";
import Featured from "../../OrganisateurComponents/featured/Featured";
import Chart from "../../OrganisateurComponents/chart/Chart";
import Table from "../../OrganisateurComponents/table/Table";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../../OrganisteurComponents/navbar/Navbar";
import SidebarOrginisateur from "../../OrganisateurComponents/sidebar/SidebarOrginisateur";
import { logoutUser } from "../../../redux/Action/EventAction";
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { getOrganStatus, getuserinfo, statorgan } from "../../../redux/Action/UserAction";

import "./single.scss";


const HomeOrg = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { LOADING, isActivate, err } = useSelector(
    (state) => state.OrganisateurReducer
  );
  const { LOading, stats, erro } = useSelector((state) => state.Stat_Select);
  // console.log(users.Admin_Num)
  useEffect(() => {
    if (token) {
      dispatch(statorgan(token));
    }
  }, []);
  const { loading, users, error } = useSelector((state) => state.User_Select);

  const logout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token")
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
      {loading ? (
        <h1 className="text" >
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </h1> 
      ) : (
        <div>
          {isActivate && token ? (
            <div>
              {/* <Navbar /> */}
              <div className="homeorg">
                <SidebarOrginisateur />
                <div className="homeContainer">
                  <div className="widgets">
                    <Widget type="event" amount={stats.Event_Num} />
                    <Widget type="ticket" amount={stats.Ticket_Num} />
                  </div>
                  <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                  </div>
                  <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                  </div>
                </div>
              </div>
            </div>
          ) : (!isActivate && token) ? (
            <div className="singleP">
              <div className="singleContainerP">
                <div className="topP">
                  <div className="leftP">
                    <div style={{ textAlign: "center" }}>
                      <h1> Bonjour {users.Username} </h1>
                      <br />
                      <h2>Votre compte n'est pas activée</h2>
                      <br />
                      <h2>Vouz pouvez contacte l'adminisatration de site</h2>
                      <br />
                      <h3>.</h3>
                      <button onClick={logout} className="editButtonPP" >déconnexion</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : <Navigate to="/login" />
          }
        </div>
      )
      }
    </div>
  );
};

export default HomeOrg;
