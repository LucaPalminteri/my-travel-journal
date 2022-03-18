
/* --- Import React (JSX) & export Card component -------------------------- */

import React from "react";

/* --- Card function take prop as a parameter from App component ----------- */

export default function Card(prop) {
/* --- prop cointains an object called "item" - now there is two object to acces the data (prop.item) */
    return (
        <div className="card">
            <img className="card__img" alt="image" src={prop.item.imageUrl}/>
            <div>
                <img className="card__logo" src="https://cdn-icons-png.flaticon.com/512/684/684908.png"/>
                <span className="card__location">{prop.item.location.toUpperCase()}</span>
                <a className="card__maps" href={prop.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                <h2 className="card__title">{prop.item.title}</h2>
                <h3 className="card__date">{prop.item.startDate} - {prop.item.endDate}</h3>
                <p className="card__info">{prop.item.description}</p>
            </div>
        </div>
    )
}

/* ------------------------------------------------------------------------- */