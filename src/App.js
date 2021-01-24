import Navbar from './components/navigation/Navbar';
import Welcome from './components/welcome/Welcome'
import SubmissionForm from './components/submissions/SubmissionForm'
import Quotes from './components/quotes/Quotes'

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
        <Route exact="true" path="/quotes">
          <Quotes />
        </Route>
        <Route path="/submit/quote">
          <SubmissionForm />
        </Route>
        
        {/* default: Welcome */}
        <Welcome />
      </Switch>
    </Router>

  );
}

export default App;
