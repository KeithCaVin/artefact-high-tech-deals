import React, {useRef, useState} from 'react';
import Axios from 'axios';
import ShowData from './ShowData';
import Logo from '../assets/logo.png';
import AmazonLogo from '../assets/amazonlogo.png';
import VirginMegastoreLogo from '../assets/virginlogo.png';
import AxiomLogo from '../assets/axiomlogo.jpg';

const Home = () =>{

    const [state, setState] = useState({searchWord:""});
    const [confirm, setConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [x, setX]= useState(0);
    const changeStyle = useRef(null);
    //get user input
    const handleChange = e => {
       setState({...state, [e.target.name]: e.target.value})
    }

    //send keyword to backend
    const searchItem = async (e)=>
    {
        e.preventDefault();
        const keyword = {searchWord: state.searchWord.trim()};
        if(!state.searchWord || state.searchWord.trim().length === 0)
        {
            alert ("Please input a valid item");
            return ;
        }
        else
        {
            if(x === 0)
            {
                changeStyle.current.style.filter = "blur(5px)";
                setLoading(true);
                setX(1);
            }
            await Axios.get("http://localhost:3005/get_items", {params: {word: keyword.searchWord}}).then((response) => {
               
                setList(response.data);
              
            });
            window.history.replaceState(null, null, `?keyword=${keyword.searchWord}`);
            setLoading(false);
            setConfirm(true);
          
        }
    }
    return(
        <React.Fragment>
            
                <div className="page-logo">
                    <img className="htd-logo" src={Logo} alt="logo"/>
                    <form>
                        <input type="text" name="searchWord" placeholder="Search for a product" value={state.searchWord} onChange={handleChange} required/>
                        <button className="search-btn" type="submit" onClick={searchItem}> Search</button>
                    </form>
                </div>
            
            {confirm === false &&
                <>
                    <div className="ecommerce-logos" ref={changeStyle}>
                        <h1 className="home-message">Compare and Get the best deals from these amazing stores!</h1>
                        <div className="store-logos">
                            <img className="amazon-logo" src={AmazonLogo} alt="Amazon Logo"/>
                            <img className="virgin-logo" src={VirginMegastoreLogo} alt="Virgin Megastore Logo"/>
                            <img className="axiom-logo" src={AxiomLogo} alt="Axiom Logo"/>
                        </div>
                    </div>
                </>
            }
            {loading === true &&
                <div className='lds-dual-ring'>
                    
                </div>
            }
            {confirm === true &&
                <div className="searched-data">
                    <ShowData itemList = {list}/>
                    
                </div>
            }
        </React.Fragment>
    );
}

export default Home;
