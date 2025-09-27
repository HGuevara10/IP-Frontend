import React, {useEffect, useState} from "react";
import BoxList from "./BoxList";

function Actors() {

    const [actorData, setActorData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/actors")
            .then((res) => res.json())
            .then((data) => {
                const rows = data.map(actor => [
                    actor.actor_id, 
                    actor.first_name, 
                    actor.last_name, 
                    actor.movie_count
                ]);
                setActorData(rows)
            })

            .catch((err) => console.error(err))
    }); 

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