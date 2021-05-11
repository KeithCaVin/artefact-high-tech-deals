import React, { useState } from 'react';
import AmazonData from './AmazonData';
import VirginData from './VirginData';
import JumboData from './JumboData';
import TopRatedAmazonData from './variations/TopRatedAmazonData';
import TopRatedVirginData from './variations/TopRatedVirginData';
import TopRatedJumboData from './variations/TopRatedJumboData';
import RecommendedAmazonData from './variations/RecommendedAmazonData';

const ShowData = () => {
    const [active, setActive] = useState("featured");

    return(
        <React.Fragment>
            <button onClick={() => setActive("featured")}>Featured</button>
            <button onClick={() => setActive("top_rated")}>Top Rated</button>
            <button onClick={() => setActive("recommended")}>Recommended</button>
            
            <div className="item-data">
                {active === "featured" && 
                <> 
                    <AmazonData title="featured"/>
                    <VirginData title="featured"/>
                    <JumboData title="featured"/>
                </>}

                {active === "top_rated" && 
                <> 
                    <TopRatedAmazonData title="top_rated"/>
                    <TopRatedVirginData title="top_rated"/>
                    <TopRatedJumboData title="top_rated"/>
                </>}

                {active === "recommended" && 
                <> 
                    <RecommendedAmazonData title="recommended"/>
                    <VirginData title="recommended"/>
                    <JumboData title="recommended"/>
                </>}
                
            </div>
           
        </React.Fragment>
        
    );
}

export default ShowData;