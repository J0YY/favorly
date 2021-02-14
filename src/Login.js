import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth, firestore } from "./firebase";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';
import Header from './Header';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, dispatch] = useStateValue();

    const signIn = async e => {
        e.preventDefault();

        await auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: auth.user,
                });
                console.log(auth.user.uid)
                history.push("/home");
                // redirect(this.state.userType)
            })
            .catch(error => alert(error.message))





    }

    const register = async isElderly => {


        // try {
        await auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                //alert(auth.user.uid)
                const uid = auth.user.uid;

                let db = firestore.collection("user").doc(uid);
                db.set({
                    type: isElderly,
                });
                dispatch({
                    type: actionTypes.SET_USER,
                    user: auth.user,
                });
                history.push("/home");

            })
            .catch(error => alert(error.message))




        // redirect(this.state.userType)
        // } catch {
        //     alert("Something went wrong")
        // }
    }

    const redirect = isElderly => {
        console.log(isElderly)
    }



    return (
        <div className='login'>
            <Header />
            {/*             
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://media.discordapp.net/attachments/808896433905598505/810175423165890590/Copper_Home_Lifestyle_Logo_2.png?width=468&height=468'
                />
            </Link> */}

            <div className='login__container'>
                <h1>Sign in</h1>

                <form>
                    <h5>email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing in you are automatically agreeing to all of our terms and conditions. No one is responsible for injury or theft as a result of certain favors.
                </p>



                <button onClick={() => register(false)} className='login__registerButton'>create account as a helper</button>
                <button onClick={() => register(true)} className='login__registerButton'>create account as an elder</button>
            </div>
        </div>
    )
}

export default Login