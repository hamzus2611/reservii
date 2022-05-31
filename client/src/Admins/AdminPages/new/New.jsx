
import "./new.scss";
import Sidebar from "../../AdminComponents/sidebar/Sidebar";

import { useState } from "react";
import { registerorganisateur } from '../../../redux/Action/UserAction';
import { useDispatch, useSelector } from 'react-redux'

const New = ({ title }) => {
  // const [file, setFile] = useState("");
  const [Username, setUsername] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const { Loading, user, error } = useSelector((state) => state.usereducer);

  const dispatch = useDispatch()
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(registerorganisateur({ Username, Lastname, Email, Phone }))
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        {/* <Navbar /> */}
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleLogin}>
                <div className="formInput" >
                <label>Username </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)}  />
                </div> 
              <div className="formInput" >
                <label>Lastname</label>
                <input type="text" onChange={(e) => setLastname(e.target.value)}  />
              </div> 
              <div className="formInput" >
                <label>Email</label>
                <input type="email " onChange={(e) => setEmail(e.target.value)} />
              </div> 
              <div className="formInput" >
                <label>Phone</label>
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
              </div> 
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default New;
