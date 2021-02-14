import React, { forwardRef, useState } from "react";
import "./Request.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Button } from "@material-ui/core"
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import emailjs from 'emailjs-com';



const Request = forwardRef(
    ({ id, title, displayName, text, image, deadline, timestamp, open, favoruid }, ref) => {

        function NavItem(props) {

            const [open, setOpen] = useState(false);

            return (
                <li className="nav-item">
                    <a href="#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon}</a>
                    {open && props.children}
                </li>
            )
        }

        function sendEmail(e, input) {
            let templateParams = {
                displayName: { displayName },
                content: input,
            }
            e.preventDefault();
            alert(displayName);
            emailjs.send('service_hkay2g5', 'template_iz0zom4', { displayName }, "user_knXQSaidVMO2IZwWvgYgo")
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }

        function DropdownMenu() {
            function DropdownItem(props) {
                const [input, setInput] = useState('');

                const handleSubmit = (e) => {
                    e.preventDefault();
                    sendEmail(e, input);
                    setInput('');
                    alert(title + " completed, thank you! " + displayName + " has just received the following from you: \n\n" + input);
                    complete(e);
                }
                return (
                    <div className="send">
                        <form>
                            <h3>Thanks for completing the favor! Please enter a few comments.</h3>
                            <form>
                                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="elaborate on how you completed the favor :)" />
                                <button disabled={!input.trim()} type="submit" onClick={handleSubmit} >Send</button>
                            </form>
                        </form>
                    </div>
                )
            }
            return (
                <div className="dropdown">
                    <DropdownItem />
                </div>
            )
        }

        const complete = (e) => {
            e.preventDefault();

            //here

            db.collection("requests").doc(id).delete();
        }
        const reserve = (e) => {
            e.preventDefault();
            db.collection("requests").doc(id).set({ open: false }, { merge: true });
        }

        return (
            <div className="request" ref={ref}>
                <div className="request__body">
                    <div className="request__header">
                        <div className="request__headerText">
                            <h3>
                                {title}{" - "}{displayName}
                                <span className="timestamp">
                                    <p>{timestamp}</p>
                                </span>
                            </h3>
                        </div>
                        <div className="request__headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <img src={image} alt="" />
                    <div className="request__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />{
                            <NavItem icon="Complete Favor">
                                <DropdownMenu>

                                </DropdownMenu>
                            </NavItem>
                        }

                        <h3>Deadline: {deadline}</h3>
                    </div>
                </div>
            </div>
        );
    }
);
export default Request;
