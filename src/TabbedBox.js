import React, { useState } from "react";
import "./TabbedBox.css"

function TabbedBox() {

    const [activeTab, setActiveTab] = useState("Action");

    return(
        <div className="tabbed-box">
            <div className="tabs">
                <button
                    className={activeTab === "Action" ? "active" : ""}
                    onClick={() => setActiveTab("Action")}
                >
                    Action
                </button>
                <button
                    className={activeTab === "Comedy" ? "active" : ""}
                    onClick={() => setActiveTab("Comedy")}
                >
                    Comedy
                </button>
                <button
                    className={activeTab === "Horror" ? "active" : ""}
                    onClick={() => setActiveTab("Horror")}
                >
                    Horror
                </button>
                <button
                    className={activeTab === "Romance" ? "active" : ""}
                    onClick={() => setActiveTab("Romance")}
                >
                    Romance
                </button>
            </div>
            <div className="tab-content">
                {activeTab === "Action" && <p>This is content for the action tab</p>}


                
                {activeTab === "Comedy" && <p>This is content for the Comedy tab</p>}
                {activeTab === "Horror" && <p>This is content for the Horror tab</p>}
                {activeTab === "Romance" && <p>This is content for the Romance tab</p>}
            </div>
        </div>
    );
}

export default TabbedBox;