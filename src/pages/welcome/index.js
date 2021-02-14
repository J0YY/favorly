import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

import "./styles.css";

export default function Welcome() {
    return (
        <div>
            <Header />
            <div className="welcome-container">
                <div className="welcome-top-content">
                    <h1>Welcome to Favorly!</h1>
                    <h3> In a society where the elderly are often ignored across the globe, it's critical that we all learn to support the rapidly rising elderly generation—especially those who live alone.</h3>
                    <h3>Favorly (FAVORs for the elderLY) intends to solve this ubiquitous issue by creating a welcoming community for the elders and for kind helpers; the platform aims to connect society with elders living alone who need certain favors completed, or simply want somebody to help them.  </h3>
                    <img src="https://st2.depositphotos.com/2703645/6586/v/950/depositphotos_65860773-stock-illustration-world-networking-people-icons.jpg" />
                    <h2>How it Works</h2>
                    <h3> The elders are able to request a favor with a deadline, title, description, and image, while helpers can view all open requests and give favors. In doing so, the requester of the favor will receive an email detailing the favor's completion. There might also be incentives provided for the helpers to engage them to help the elders out.</h3>
                </div>
                <div className="welcome-content">
                    <div className="welcome-button-div">
                        <Link className="welcome-button" to={{ pathname: "/home" }}>
                            Lets go!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
