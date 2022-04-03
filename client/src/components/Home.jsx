import React, {useState} from 'react';

import ShowData from './ShowData';
import Logo from '../assets/logo.png';

import AmazonLogo from '../assets/amazonlogo.png';
import VirginMegastoreLogo from '../assets/virginlogo.png';
import JumboLogo from '../assets/jumbologo.png';
import AxiomLogo from '../assets/axiomlogo.jpg';
const Home = () =>{
    const [state, setState] = useState({
        searchWord:""
    });

    const handleChange = e => {
       setState({...state, [e.target.name]: e.target.value})
       
      }
    
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const keyword= urlParams.get('searchWord');
 
    return(
        <React.Fragment>
            <div className="home-page">
                <div className="page-logo">
                   <img class="htd-logo" src={Logo} alt="logo"/>
                </div>
               
                <form>
                    <input type="text" name="searchWord" placeholder="Search for a product" value={state.searchWord} onChange={handleChange} required />
                    <button class="search-btn" type="submit"> Search</button>
                </form>
            </div>

            {queryString === '' && 
                <div className="ecommerce-logos">
                    <h1 className="home-message">Compare and Get the best deals from these amazing stores!</h1>
                    <div className="store-logos">
                        <img className="amazon-logo" src={AmazonLogo} alt="Amazon Logo"/>
                        <img className="virgin-logo" src={VirginMegastoreLogo} alt="Virgin Megastore Logo"/>
                        <img className="axiom-logo" src={AxiomLogo} alt="Axiom Logo"/>
                    </div>
                </div>
            }
                
                {keyword && 
                    <div className="searched-data">
                        <ShowData/>
                    </div>
                }   
            
        </React.Fragment>
    );
}

export default Home;
