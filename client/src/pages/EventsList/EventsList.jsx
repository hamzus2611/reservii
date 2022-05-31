import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { CreateEvent } from '../../redux/Action/EventAction';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import './EventstList.css';

function EventsList() {

  const [Eventimage, setEventimage] = useState("");
  const [Eventname, setEventname] = useState("")
  const [date, setdate] = useState("")
  const [EventType, setEventType] = useState("")
  const [NumPlaceTotal, setNumPlaceTotal] = useState("")
  const [Prix, setPrix] = useState("")
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(CreateEvent({ Eventname, date, EventType, NumPlaceTotal, Prix, Eventimage }, token))
  }


  return (
    <div className='cellAction' >
      <div className='containernn' >
        <div className='containerv'>
          <h1 className='titreE'>Create New Event</h1>
          <div className='containerx'></div>
          <div className="left">
            {/* <img src={Eventimage ? URL.createObjectURL(Eventimage) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" /> */}
          </div>
          <div className="formInput"  >
            <div className='containerw' ></div>
            <form onSubmit={handleLogin}  >
              <label htmlFor="file" className='labelE'>
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input type="text" className='inputE'
                onChange={(e) => setEventimage(e.target.value)} />
              {/* <input className='inputE'
                type="file"
                id="file"
                filename="Eventimage"
                onChange={(e) => setEventimage(e.target.files[0])}
                style={{ display: "none" }}
              /> */}
            </form>
          </div>
        </div>
        <div className='containerm' ></div>
        <div className="form-inputs">
          <form onSubmit={handleLogin} className='formE'>
            <div className="ligneE">
              <label className='labelE'> Event Name </label>
              <input type="text" className='inputE'
                onChange={(e) => setEventname(e.target.value)} />
              <label className='labelE'> EventType </label>
              <input type="text" className='inputE'
                onChange={(e) => setEventType(e.target.value)} />
            </div>
            <div>
              <label className='labelE'>  Nbre de place disponible  </label>
              <input type="text" className='inputE'
                onChange={(e) => setNumPlaceTotal(e.target.value)} />
              <label className='labelE'> Prix </label>
              <input type="text" className='inputE'
                onChange={(e) => setPrix(e.target.value)} />
              <label className='labelE'> Date </label>
            </div>
            <div>
              <input type="date" className='inputE'
                onChange={(e) => setdate(e.target.value)} />
              <button className='buttonE'> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EventsList



