import "./navbar.scss";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NavbarConnect from "./NavbarConnect";
import NavbarNoConnect from "./NavbarNoConnect";



function Navbar()  {
  const token = localStorage.getItem('token');
  
  return (
    <div  >
      { token ?<NavbarConnect /> :
      <NavbarNoConnect/>
      }
    </div>
  );
};

export default Navbar;
