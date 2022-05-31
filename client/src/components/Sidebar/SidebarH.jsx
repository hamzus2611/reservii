import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StorefrontIcon from '@mui/icons-material/Storefront';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../../components/context/darkModeContext";

// import { useContext } from "react";

const SidebarH = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebarH">
      <div className="top">
      </div>
      <br/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            
            <Link to="/"  style={{ textDecoration: "none" }}>
              <DashboardIcon className="icon" />
            </Link>
            
          </li>
          <p className="title">LISTS</p>
          <Link to="/Profile" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <StorefrontIcon className="icon" />
              
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
              <AdminPanelSettingsIcon className="icon" />
            
          </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span></span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
          
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
          
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
          
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
          
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
          
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
          
          </li>
          <li>
            <ExitToAppIcon className="icon" />
          
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarH;
