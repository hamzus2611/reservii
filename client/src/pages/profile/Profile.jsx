import "./single.scss";
import NavbarConnectProfile from "../../components/Navbar/NavbarConnectProfile";
// import Chart from "../../AdminComponents/chart/chart/Chart";
import List from "./Table";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getuserinfo } from "../../redux/Action/UserAction";
import { Link } from "react-router-dom";

const Profile = () => {
  const { Loading, users, error } = useSelector((state) => state.User_Select);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(getuserinfo(token));
    }
  }, []);

  return (
    <div className="singleP">
      <div className="singlP">{/* <Sidebar /> */}</div>
      <div className="singleContainerP">
        <NavbarConnectProfile />
        <div className="topP">
          <div className="leftP">
            <Link to="/Profile/edit" style={{ textDecoration: "none", color: "black" }}>
            <div className="editButtonP">Modifier</div>
            </Link>
            <h1 className="titleP">Information</h1>
            <div className="itemP">
              <img
                src="https://rohsco.rqoh.com/wp-content/uploads/sites/9/2019/09/default-profile.png"
                alt=""
                className="itemImgP"
              />
              <div className="detailsP">
                <h1 className="itemTitleP">
                  {users.Username} {users.Lastname}
                </h1>
                <div className="detailItemP">
                  <span className="itemKeyP">Email:</span>
                  <span className="itemValueP">{users.Email}</span>
                </div>
                <div className="detailItemP">
                  <span className="itemKeyP">Phone:</span>
                  <span className="itemValueP">{users.Phone}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
      <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
     </div> */}
        </div>
        <div className="bottomP">
          <h1 className="titleP">Réservation</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Profile;
