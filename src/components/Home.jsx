import React, {useState} from 'react';

import ShowData from './ShowData';

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

                <h1>High-Tech Deals</h1>
                <form>
                    <input type="text" name="searchWord" value={state.searchWord} onChange={handleChange} required />
                    <button type="submit"> Search</button>
                </form>
            </div>

            {keyword === '' && ''}
                
                {keyword && 
                    <div className="searched-data">
                        <ShowData/>
                    </div>
                }   
            
        </React.Fragment>
    );
}

export default Home;
