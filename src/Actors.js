import React from "react";
import BoxList from "./BoxList";

function Actors() {

    const actorData = [
        ["1", "Tom", "Hanks", "12"],
        ["2", "Meryl", "Streep", "8"],
        ["3", "Brad", "Pitt", "10"],
    ];
    return(
        <>
            <h1 className="header">
                Actors 
            </h1>
            <BoxList 
                headers={["Actor ID", "First Name", "Last Name", "# of Movies"]}
                rows={actorData}
            />
        </>
    );
}

export default Actors;