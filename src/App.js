import React from 'react';
import './App.css';

//Routes
import Login from "./pages/Login";
import Layout from "./component/Layout";

//React Router
import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
