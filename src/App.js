import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Helpers from "./pages/helpers"
import Home from "./Home"; //If you move the files to "pages" folder, don'f forget to change this
import Welcome from "./pages/welcome";
import Elders from "./pages/elders";
// import Email from "./email";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/elders">
            <Elders />
          </Route>
          <Route path="/email">
            {/* <Email /> */}
          </Route>
          <Route path="/helpers" component={Helpers} />

        </Switch>


      </Router>

    </div>
  );

}


export default App;


{/* 
  yeahh sorry my laptop is behaving really weirdly today
  i might have to get another mouse
  but feel free to start working!
  im going to 

To Do:
  -register page (get auth working)           Joy
  -AUTHENTICATION-- user (email, password)    Joy
  -login page
  -main page                                  Johann
  -create a favor (connect to firebase, add to db in favors collection)
      -elderly requesting it (id)
      -deadline for favor
      -Title
      -Description
      - Image (optional)
  -DIRECT MESSAGE the elderly upon pressing the "complete favor" button
  -(incentives?)

*/}