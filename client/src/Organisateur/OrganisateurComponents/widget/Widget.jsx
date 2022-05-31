import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import StorefrontIcon from '@mui/icons-material/Storefront';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EventIcon from '@mui/icons-material/Event';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';


const Widget = ({ type, amount }) => {
  let data;

  //temporary
  // const amount = 10;
  //  const diff = 20;

  switch (type) {

    case "event":
      data = {
        title: "EVENTS",
        isMoney: false,
        link: "Voir les événements",
        icon: (
          <EventIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 68, 0, 0.2)",
              color: "rgb(128, 68, 0)",
            }}
          />
        ),
      };
      break;
    case "ticket":
      data = {
        title: "TICKETS",
        isMoney: false,
        link: "Voir les tickets",
        icon: (
          <LocalActivityIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="leftt">
        <span className="titleW">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {/* {diff} % */}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
