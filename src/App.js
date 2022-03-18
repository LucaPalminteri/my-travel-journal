
/* --- Import React (JSX) & components (Card & Navbar) --------------------- */

import React from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card"

/* --- Import data.js with data information for components ----------------- */

import data from "./data"

/* --- Export App to index.js ---------------------------------------------- */

export default function App() {

/* --- Mapping data.js to create an object in Card component --------------- */

    const cards = data.map(function(item) {
        return (<Card 
                    key={item.id}
                    item={item}
                />)
    })

    return (
        <div>
            <Navbar/>
            {cards}
        </div>
    )
}

/* ------------------------------------------------------------------------- */