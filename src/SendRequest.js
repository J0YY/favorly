import React, { useState } from "react";
import "./SendRequest.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import { Button } from "@material-ui/core";

function SendRequest() {
    //return (<a>a</a>)
    const [{ user }] = useStateValue();
    const [request, setRequest] = useState("");
    const [sendImage, setSendImage] = useState("");
    const [deadline, setDeadline] = useState("");
    const [title, setTitle] = useState("");
    const [isElder, setIsElder] = useState("");



    console.log(user.uid);
    // var isElder;
    db.collection("user").doc(user.uid).get()
        .then((ref) => {
            setIsElder(ref.data().type)
            // isElder =ref.data().type;
            //alert(isElder);
        })
        .catch((error) => {
            console.log(error);

        });




    //alert(isElder);

    //const isElder = false;

    const sendRequest = (e) => {
        e.preventDefault();

        if (request.trim() != "") {
            db.collection("requests").add({
                title: title,
                displayName: user.email,
                text: request,
                image: sendImage,
                deadline: deadline,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                open: true,
                favorUID: user.uid
            });

            setRequest("");
            setSendImage("");
            setDeadline("");
            setTitle("");
        }
    };

    return (
        <div className="sendRequest">
            {!(isElder == true) ? (
                <></>
            ) : (
                    <>
                        <form>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="sendRequest__detail"
                                placeholder="What favor do you need?"
                                type="text"
                            />

                            <input
                                onChange={(e) => setRequest(e.target.value)}
                                value={request}
                                className="sendRequest__detail"
                                placeholder={`Elaborate! Please specify location, details, and incentives :)`}
                                type="text"
                            />

                            <input
                                value={sendImage}
                                className="sendRequest__detail"
                                placeholder="Optional image URL for accompanying image or gif"
                            />

                            <input
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                                className="sendRequest__detail"
                                placeholder="Deadline: When do you need this done by?"
                                type="text"
                            />

                            <Button
                                onClick={sendRequest}
                                type="submit"
                                className="sendRequest__button"
                            >
                                Send Favor Request
                </Button>
                        </form>
                    </>
                )}

        </div>
    );
}

export default SendRequest;