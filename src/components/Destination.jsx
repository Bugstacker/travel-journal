import React from "react";
import "./Destination.css"
import locImg from "../assets/location.png"

const Destination = props => {

  return (
    <section className="dest">
      <img src={props.imageUrl} alt="" className="dest--img"/>
      <div className="dest--details_container">
        <p className="dest--loc">
          <img src={locImg} alt="" className="dest--loc_img"/>
          <span className="dest--loc_country"> {props.location}</span>
          <a href={props.googleMapsUrl}>View on google maps</a>
        </p>
        <h1 className="dest--title"> {props.title} </h1>
        <h4 className="date">{props.startDate} - {props.endDate}</h4>
        <p className="dest--details">
        {props.description}
        </p>
      </div>
    </section>
  )
}

export default Destination