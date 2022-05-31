import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Navbar from "../../components/Navbar/NavbarH";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getuserinfo } from "../../../redux/Action/UserAction";

const Param = () => {
  const { Loading, users, error } = useSelector((state) => state.User_Select);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(getuserinfo(token));
    }
  }, []);

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
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="FirstName"
                defaultValue={users.Username}
              />{" "}
              <TextField
                required
                id="outlined-required"
                label="Lastname"
                defaultValue={users.Lastname}
              />
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-helperText"
                label="Email"
                defaultValue="Default Value"
              />
            </div>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Param;
