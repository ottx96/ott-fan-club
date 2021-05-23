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
      <Switch>
        <Route exact={true} path="/quotes">
          <Navbar active="/quotes" />
          <Quotes />
        </Route>
        <Route exact={true} path="/memes">
          <Navbar active="/memes" />
          <Memes />
        </Route>
        <Route path="/submit/quote">
          <Navbar active="/quotes" />
          <QuoteSubmissionForm />
        </Route>
        <Route path="/submit/meme">
          <Navbar active="/memes" />
          <MemeSubmissionForm />
        </Route>
        <Route exact={false} path="/">
          <Navbar />
          <Welcome />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
