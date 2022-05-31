import "./navbar.scss";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NavbarConnect from "./Navbar/NavbarConnect";
import NavbarNoConnect from "./Navbar/NavbarNoConnect";



function Navbar() {
  const token = localStorage.getItem('token');

  return (
    <div  >
      {token ? <NavbarConnect /> :
        <NavbarNoConnect />
      }
    </div>
  );
};

export default Navbar;
