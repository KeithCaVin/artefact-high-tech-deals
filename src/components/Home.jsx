import React, {useState} from 'react';

import ShowData from './ShowData';
import Logo from '../assets/logo.png';

import AmazonLogo from '../assets/amazonlogo.png';
import VirginMegastoreLogo from '../assets/virginlogo.png';
import JumboLogo from '../assets/jumbologo.png';
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
                    <img className="amazon-logo" src={AmazonLogo} alt="Amazon Logo"/>
                    <img className="virgin-logo" src={VirginMegastoreLogo} alt="Virgin Megastore Logo"/>
                    <img className="jumbo-logo" src={JumboLogo} alt="Jumbo Logo"/>
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
