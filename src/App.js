import Navbar from './components/navigation/Navbar';
import Welcome from './components/welcome/Welcome'
import QuoteSubmissionForm from './components/submissions/quote/QuoteSubmissionForm'
import MemeSubmissionForm from './components/submissions/meme/MemeSubmissionForm'
import Quotes from './components/quotes/Quotes'
import Memes from './components/memes/Memes'

import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route exact={true} path="/memes">
          <Memes />
        </Route>
        <Route path="/submit/quote">
          <QuoteSubmissionForm />
        </Route>
        <Route path="/submit/meme">
          <MemeSubmissionForm />
        </Route>
        <Route exact={false} path="/">
          <Welcome />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
