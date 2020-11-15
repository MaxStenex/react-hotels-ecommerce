import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/";
import { Home } from "./pages/";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </Switch>
    </>
  );
};

export default App;
