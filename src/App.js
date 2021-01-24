import Navbar from './components/navigation/navbar';
import Welcome from './components/welcome/welcome'
import SubmissionForm from './components/submissions/submission-form'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/quotes">
          <SubmissionForm />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
