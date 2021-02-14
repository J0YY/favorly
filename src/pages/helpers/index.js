import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const items = [
    {
        elderId: 0,
        title: "Cut the grass",
        description:
            "I need someone to cut the grass. I'm 76 years old and I'm not able cut the grass. My doctor recomends me to rest",
        imageURL:
            "https://www.pennington.com/-/media/Images/Pennington2-NA/US/blog/seed/how-to-identify-your-grass/Identify-your-grass-header.jpg",
        deadline: "Sun May 24 2021",
    },
    {
        elderId: 1,
        title: "Pay bills",
        description:
            "I need someone to go to the bank and pay my bills. I'm injured and I'm temporary unable to walk. ",
        imageURL:
            "https://midias.agazeta.com.br/2020/03/23/pagamento-de-contas-e-preciso-calcular-as-despesas--213885-article.jpg",
        deadline: "Sun Feb 28 2021",
    },
];

const user = { name: "Johann" };

const eldersNames = ["Sr. Johnson", "Sra. Woods"];

export default function Helpers() {
    function Item(props) {
        return (
            <li className="item-body">
                <div className="item-body-content">
                    <div>
                        <h1>{props.value.title}</h1>
                        <p>{props.value.description}</p>
                    </div>
                    <div>
                        <h2>I need it done before {props.value.deadline}</h2>
                        <h3>{eldersNames[props.value.elderId]}</h3>
                        <div className="ok-button-div">
                            <Link
                                className="ok-button"
                                to={{ pathname: "/checkout", state: { props } }}
                            >
                                I can do it!
              </Link>
                        </div>
                    </div>
                </div>
                <img src={props.value.imageURL} alt="Image" />
            </li>
        );
    }
    return (
        <div>
            <div className="header-container">
                <img
                    className="logo"
                    src="https://media.discordapp.net/attachments/808896433905598505/810175423165890590/Copper_Home_Lifestyle_Logo_2.png"
                />
                <img
                    className="logo-name"
                    src="https://media.discordapp.net/attachments/808896433905598505/810167912064483338/Screen_Shot_2021-02-14_at_12.17.51_AM.png"
                />
                <div>
                    <img
                        className="userImg"
                        src="https://drive.google.com/u/0/uc?id=1YyEXfPLRTKcVrTzJJXKJCBB06-Iu1LqX&export=download"
                    />
                </div>
            </div>
            <div className="helpers-container">
                <div className="top-content">
                    <h1>Hello {user.name}</h1>
                    <h2>Who will you help today?</h2>
                </div>
                <div className="content">
                    <ul className="list">
                        {items.map((item) => (
                            <Item key={item.key} value={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
