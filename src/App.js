import './App.css';
import ShowData from './components/ShowData';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from "react-router-dom"; 

function App() {
  return (
    <Router>
      <div className="page">

        <Route component={Home} path="/artefact-high-tech-deals" exact/>
        <Route component={ShowData} path="/result"/> 
    
          
      </div>
  </Router>
  );
}

export default App;
