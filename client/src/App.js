import './style.scss';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from "react-router-dom"; 

function App() {
  return (
    <Router basename='/high-tech-deals'>
      <div className="page">

        <Route component={Home} path="/" exact/>

      </div>
  </Router>
  );
}

export default App;
