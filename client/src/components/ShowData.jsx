import React, { useState } from 'react';
import AmazonData from './AmazonData';
import VirginData from './VirginData';
import AxiomData from './AxiomData';

import TopRatedAmazonData from './variations/TopRatedAmazonData';
import TopRatedVirginData from './variations/TopRatedVirginData';

import RecommendedAmazonData from './variations/RecommendedAmazonData';

const ShowData = () => {
    const [active, setActive] = useState("featured");
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const keyword= urlParams.get('searchWord');
    return(
        <React.Fragment>
            <div className="button-features">
                <button onClick={() => setActive("featured")} className="featured-btn">Featured</button>
                <button onClick={() => setActive("top_rated")} className="top-rated-btn">Top Rated</button>
                <button onClick={() => setActive("recommended")} className="recommended-btn">Recommended</button>
            </div>
            
            {active === "featured" && 
                <> 
                    {keyword &&  
                        <div className="search-for">
                            <p>Searching for {keyword} - Featured</p>
                        </div>
                    }
                </>
            }
             {active === "top_rated" && 
                <> 
                    {keyword &&  
                        <div className="search-for">
                            <p>Searching for {keyword} - Top Rated</p>
                        </div>
                    }
                </>
            }
             {active === "recommended" && 
                <> 
                    {keyword &&  
                        <div className="search-for">
                            <p>Searching for {keyword} - Recommended</p>
                        </div>
                    }
                </>
            }
            <div className="item-data">
                {active === "featured" && 
                <> 
                    <AmazonData title="featured"/>
                    <VirginData title="featured"/>
                   
                    <AxiomData title="featured"/>
                </>}

                {active === "top_rated" && 
                <> 
                    <TopRatedAmazonData title="top_rated"/>
                    <TopRatedVirginData title="top_rated"/>
                    {/* <TopRatedJumboData title="top_rated"/> */}
                    <AxiomData title="featured"/>
                </>}

                {active === "recommended" && 
                <> 
                    <RecommendedAmazonData title="recommended"/>
                    <VirginData title="recommended"/>
                    {/* <JumboData title="recommended"/> */}
                    <AxiomData title="featured"/>
                </>}
                
            </div>
           
        </React.Fragment>
        
    );
}

export default ShowData;