import React, {useEffect, useState} from "react";
import Box from "./Box";
import "./Top5List.css";

function Top5List({title, category}) {

    const[item, setItems] = useState([]);

    useEffect(() => {
        const endpoint = 
            category === "Movies"
            ? "http://127.0.0.1:5000/top5_movies"
            : "http://127.0.0.1:5000/top5_actors";
        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error(err))
    }, [category]);

    return(
        <>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="boxes-container"> 
                {item.map((item, index) => (
                    <Box 
                        key={index}
                        movie_or_actor_name={category === "Movies" ? item.title : item.name} 
                        rentals_or_actors={category === "Movies" ? "Rentals" : "Movies"}
                        value={category === "Movies" ? item.rented : item.movie_count}               
                    />
                ))} 
            </div>
        </>
    );
}

export default Top5List;