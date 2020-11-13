import React from "react";
import { Header } from "./components/";
import { Home } from "./pages/";

import theme from "./utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
