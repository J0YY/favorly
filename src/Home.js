import React from 'react'
import Header from './Header';
import "./Home.css";
import db from "./firebase";
import FlipMove from "react-flip-move";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import { useState, useEffect } from "react";
import Request from "./Request";
import SendRequest from './SendRequest';
import Login from './Login';

//for viewing requests
function Home() {
    const [requests, setRequests] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        db.collection("requests").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setRequests(snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title, text: doc.data().text, displayName: doc.data().displayName, image: doc.data().image, deadline: doc.data().deadline, timestamp: doc.data().timestamp })))
        ); //setRequests(snapshot.docs.map((doc) => doc.data()))
    }, []);


    return (

        <div className="home">
            {!user ? (
                <Login />
            ) : (
                    <>
                        <Header />
                        <div className="home-container">
                            <SendRequest />
                            <div className="content">
                                <FlipMove className="flip">
                                    {requests.map((request) => (
                                        <Request
                                            id={request.id}
                                            title={request.title}
                                            displayName={request.displayName}
                                            text={request.text}
                                            image={request.image}
                                            deadline={request.deadline}
                                            timestamp={new Date(request.timestamp?.toDate()).toUTCString()
                                            }
                                        />
                                    ))}
                                </FlipMove>

                            </div>
                        </div>
                    </>
                )}

        </div>
    );
}

export default Home;                      