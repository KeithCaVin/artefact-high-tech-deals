import './style.scss';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from "react-router-dom"; 

function App() {
  return (
    <Router>
      <div className="page">

        <Route component={Home} path="/artefact-high-tech-deals" exact/>

      </div>
  </Router>
  );
}

export default App;
