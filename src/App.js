import Navbar from './components/navigation/Navbar';
import Welcome from './components/welcome/Welcome'
import QuoteSubmissionForm from './components/submissions/quote/QuoteSubmissionForm'
import MemeSubmissionForm from './components/submissions/meme/MemeSubmissionForm'
import Quotes from './components/quotes/Quotes'
import Memes from './components/memes/Memes'

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
        <Route exact="true" path="/memes">
          <Memes />
        </Route>
        <Route path="/submit/quote">
          <QuoteSubmissionForm />
        </Route>
        <Route path="/submit/meme">
          <MemeSubmissionForm />
        </Route>
        
        {/* default: Welcome */}
        <Welcome />
      </Switch>
    </Router>

  );
}

export default App;
