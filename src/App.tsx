import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/common";
import { Home, Rooms, Room } from "./pages/";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route path="/rooms/:id" component={Room} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </Switch>
    </>
  );
};

export default App;
