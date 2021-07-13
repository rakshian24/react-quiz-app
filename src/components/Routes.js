import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Quiz from "./pages/Quiz/Quiz";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz/:id" component={Quiz} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
