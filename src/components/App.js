import React, { useState } from "react";
import './../styles/App.css';
import { Switch,Route, Link,Redirect } from "react-router-dom";
import Login from "./Login";
import PlayGround from './PlayGround';


const App = () => {
  let [user,SetUser]=useState(false)
  return (
    <div>
      {/* Do not remove the main div */}
      {/* <ul>
        <li><Link to="/playground">Playground</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul> */}
      <Switch>
      <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login"    >
        <Login user={user} SetUser={SetUser} />
        </Route>
        <Route path="/playground" component={PlayGround} >
        <PlayGround user={user} SetUser={SetUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
