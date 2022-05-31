import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../../components/Navbar/NavbarH";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getuserinfo } from "../../redux/Action/UserAction";
import NavbarConnectProfile from "../../components/Navbar/NavbarConnectProfile";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const Param = () => {
  const [Eventimage, setEventimage] = useState("");
  const { Loading, users, error } = useSelector((state) => state.User_Select);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(getuserinfo(token));
    }
  }, [])

  return (
    <div>
      {Loading ? (
        <h1 className="text" >
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </h1> 
      ) : (
        <div>
          {/* <Navbar /> */}
          <div className="singleP">
            <div className="singlP">{/* <Sidebar /> */}</div>
            <div className="singleContainerP">
              {/* <NavbarConnectProfile /> */}
              <div className="topP">
                <div className="leftP">
                  <Link to="/Profile" style={{ textDecoration: "none", color: "black" }}>
                    <ArrowBackIcon className="icon" />
                  </Link>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div className="cantainerP">
                      <div className="ImgP">
                        <div className="left">
                          <img src={Eventimage ? URL.createObjectURL(Eventimage) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                        </div>
                        <form   >
                          <label htmlFor="file" className='labelE'>
                            Image: <DriveFolderUploadOutlinedIcon className="icon" />
                          </label>
                          {/* <input type="text" className='inputE'/> */}
                          {/* onChange={(e) => setEventimage(e.target.value)} /> */}
                          <input className='inputE'
                            type="file"
                            id="file"
                            filename="Eventimage"
                            onChange={(e) => setEventimage(e.target.files[0])}
                            style={{ display: "none" }}
                          />
                        </form>
                        {/* <img src="https://rohsco.rqoh.com/wp-content/uploads/sites/9/2019/09/default-profile.png"
                          alt=""
                          className="itemImgP"
                          width="300px"
                          height="300px"></img> */}
                      </div>
                      <div className="formP">
                        <TextField
                          required
                          id="outlined-required"
                          label="Nom"
                          defaultValue={users.Username}
                        />{" "}
                        <TextField
                          required
                          id="outlined-required"
                          label="Prénon"
                          defaultValue={users.Lastname}
                        />
                        <TextField
                          id="outlined-number"
                          label="Numéro"
                          type="number"
                          defaultValue={users.Phone}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        <TextField
                          id="outlined-helperText"
                          label="Email"
                          defaultValue={users.Email}
                        />
                      </div>
                    </div>
                  </Box>
                  <div className="editButtonP">Enregistrer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Param;
