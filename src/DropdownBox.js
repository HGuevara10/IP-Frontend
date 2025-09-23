import React, { useState } from "react";
import "./DropdownBox.css"

function DropdownBox() {

    const [selectedOption, setselectedOption] = useState("Action");

    return(
        <div className="dropdown-box">

            <select
                value={selectedOption}
                onChange={(e) => setselectedOption(e.target.value)}
                className="dropdown-select"
            >
                <option value="Action">Action</option>
                <option value="Animation">Animation</option>
                <option value="Children">Children</option>
                <option value="Classic">Classic</option>
                <option value="Comedy">Comedy</option>
                <option value="Documentary">Documentary</option>
                <option value="Drama">Drama</option>
                <option value="Family">Family</option>
                <option value="Foreign">Foreign</option>
                <option value="Games">Games</option>
                <option value="Horror">Horror</option>
                <option value="Music">Music</option>
                <option value="New">New</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Sports">Sports</option>
                <option value="Travel">Travel</option>
            </select>
            <div className="dropdown-content">
                {selectedOption === "Action" && 
                    <p>
                        Number of movies: 
                    </p>
                    //add list of all the movies in the genre 
                }

                {selectedOption === "Animation" && 
                    <p>
                        Number of movies: 
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Children" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Classic" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Comedy" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Documentary" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Drama" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Family" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Foreign" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Games" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Horror" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Music" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "New" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Sci-Fi" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Sports" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }

                {selectedOption === "Travel" && 
                    <p>
                        Number of movies:
                    </p>
                    //add list of all the movies in the genre
                }
            </div>
        </div>
    );
}

export default DropdownBox;