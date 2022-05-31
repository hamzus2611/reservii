import React from "react";
import "./Events.scss";
import { Link } from "react-router-dom";

function EventsCard({ event }) {
  return (
    <div className="product">
      {/* <span class="product__price">{event.Prix} dt</span> */}
      <img
        src={event.Eventimage}
        alt=""
        width="350"
        height="500"
        className="flip-card-front-img"
      />
      <h1 className="product__title">{event.Eventname}</h1>
      <a href="#" className="product__btn btn">
        <Link to={`/event/${event._id}`}>
          <button type="button" className="product__price">Reserve</button>
        </Link>{" "}
      </a>
    </div>
  );
}
export default EventsCard;
