import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Curriculo from "./Curriculo";
import CurriculoEdit from "./CurriculoEdit";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/portifolio/projetos'>
          <Projects />
        </Route>
        <Route exact path='/curriculo'>
          <Curriculo />
        </Route>
        <Route path='/curriculo/:id'>
          <CurriculoEdit />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
