import React, { useState } from 'react'
import "./Header.css";
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";

function Header() {

    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <img
                className="logo"
                src="https://media.discordapp.net/attachments/808896433905598505/810166548563230760/Copper_Home_Lifestyle_Logo.png"
                onClick=""
            />
            <img
                className="logo-name"
                src="https://media.discordapp.net/attachments/808896433905598505/810167912064483338/Screen_Shot_2021-02-14_at_12.17.51_AM.png"

            />


            {/* <div className="header__right">
                <FaceOutlinedIcon fontSize="large" />
            </div> */}

            <div className="dd">
                <NavItem icon="N A V I G A T E" >
                    <DropdownMenu>

                    </DropdownMenu>
                </NavItem>
                {/* <NavItem icon="-">Welcome to Favorly!</NavItem> */}
            </div>



        </div>

    )
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon}</a>
            {open && props.children}
        </li>
    )
}

function DropdownMenu() {
    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return (
        <div className="dropdown">
            <Link to={{ pathname: "/" }}>
                <DropdownItem rightIcon=" ❤️ " >About</DropdownItem>
            </Link>
            <Link to={{ pathname: "/home" }}>
                <DropdownItem rightIcon=" ✅ " >Favors</DropdownItem>
            </Link>
            <Link to={{ pathname: "/login" }}>
                <DropdownItem rightIcon=" 🚪 ">Log In</DropdownItem>
            </Link>
        </div>
    )
}


export default Header
