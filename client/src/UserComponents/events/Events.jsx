import React from "react";
import EventsCard from "./EventsCard";
import { getevent } from "../../redux/Action/EventAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./Events.scss";

function Events() {
  const { Loading, event, error } = useSelector((state) => state.Event_Select);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getevent());
  }, []);

  return (
    <div className="Containers">
      {Loading ? (
        <h1 className="text" >
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </h1> 
      ) : (
        <div className="Movie-Containers">
          {event.map((even, index) => (
            <EventsCard key={index} event={even} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
