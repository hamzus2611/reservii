import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import StorefrontIcon from '@mui/icons-material/Storefront';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EventIcon from '@mui/icons-material/Event';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';


const Widget = ({ type , amount }) => {
  let data;

  //temporary
  // const amount = 10;
  //  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "Voir les participents",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
      break;
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
          case "client":
            data = {
              title: "CLIENTS",
              isMoney: false,
              link: "Voir les clients",
              icon: (
                <PersonOutlinedIcon
                  className="icon"
                  style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                />
              ),
            };
            break;
    case "Organ":
      data = {
        title: "ORAGNISATEURS",
        isMoney: false,
        link: "Voir les organisateurs",
        icon: (
          <StorefrontIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 92, 128, 0.2)",
              color: "rgb(0, 92, 128)",
            }}
          />
        ),
      };
      break;
    case "Admin":
      data = {
        title: "ADMINS",
        isMoney: false,
        link: "Voir les admins",
        icon: (
          <AdminPanelSettingsIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 9, 128, 0.2)",
              color: "rgb(0, 9, 128)",
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
