import { Route, Switch } from "react-router";
import Party from "../../Pages/Party";
import Graduation from "../../Pages/Graduation";
import Home from "../../Pages/Home";
import Wedding from "../../Pages/Wedding";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
      <Route path="/party">
        <Party />
      </Route>
    </Switch>
  );
};

export default Routes;
