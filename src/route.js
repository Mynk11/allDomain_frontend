import { Route, Switch, useParams } from "react-router-dom";
import FirstPage from "./component/home";
import commentsTable from "./component/table";

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path={["/", "/home"]} component={FirstPage}></Route>
      <Route exact path="/commentstable" component={commentsTable}></Route>
      <Route render={() => <div>Not Found</div>} />
    </Switch>
  );
}
