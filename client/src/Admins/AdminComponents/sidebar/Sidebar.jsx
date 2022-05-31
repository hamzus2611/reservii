import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from '@mui/icons-material/Storefront';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EventIcon from '@mui/icons-material/Event';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../redux/Action/EventAction";
// import { DarkModeContext } from "../../../components/context/darkModeContext";

// import { useContext } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
    //  <Navigate to="/" />;
  };
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
          <span className="logo">Admin</span>
      </div>
      <br/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/Admin" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
            
          </li>
          <p className="title">LISTS</p>
          <Link to="/Admin/User" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/Admin/Organisateur" style={{ textDecoration: "none" }}>
            <li>
              <StorefrontIcon className="icon" />
              <span>Organisateurs</span>
            </li>
          </Link>
          <Link to="/Admin/Admin" style={{ textDecoration: "none" }}>
          <li>
              <AdminPanelSettingsIcon className="icon" />
            <span>Admins</span>
          </li>
          </Link>
          <Link to="/Admin/Organisateur/inv" style={{ textDecoration: "none" }}>
            <li>
              <StorefrontIcon className="icon" />
              <span>Organisateurs Demande</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/Admin/Event" style={{ textDecoration: "none" }}>
          <li>
              <EventIcon className="icon" />
            <span>Events</span>
          </li>
        </Link>
          <Link to="/Admin/Ticket" style={{ textDecoration: "none" }}>
          <li>
            <LocalActivityIcon className="icon" />
            <span>Ticket</span>
          </li>
          </Link>
          {/* <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>

          <Link to="/Admin/ProfileAdmin" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={logout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
