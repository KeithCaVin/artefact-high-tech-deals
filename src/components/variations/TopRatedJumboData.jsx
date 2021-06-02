import rp from "request-promise";
import cheerio from 'cheerio';
import React, { useEffect, useState} from 'react';

    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ~~~~~~~~~~~~~~~~~~~~~NOT WORKING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const TopRatedJumboData =  ({title}) => {

     const [gotjumboData, getjumboData] = useState([]);

    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const keyword= urlParams.get('searchWord').replace('+','%20');
        const topRatedUrlParam = "&br_nodes[]=ho67760027_best";

        var final_jumbo_url = "https://cors-anywhere.herokuapp.com/https://www.jumbo.ae/home/search?q="+keyword+topRatedUrlParam;
        rp(final_jumbo_url).then(html => {
            let jumboData = [];
            let $ = cheerio.load(html);

            const jumboField = $('#search-result-items');

            jumboField.find('.clearfix').each((i,element) =>{
                const $element= $(element);


                var jumboItemLink = $element.find('a').attr('href');
                var finaljumboItemLink = "https://www.jumbo.ae/"+jumboItemLink;

                var jumboItemImg = $element.find('img').attr('src');

                var jumboItemName = $element.find('.variant-title').text().replace(/,/g,'' );
                

                var jumboItemPrice = $element.find('.variant-final-price').text().replace(/ |\n /g,'');
                
                jumboData.push({
                    jumboLink:finaljumboItemLink,
                    jumboImg: jumboItemImg,
                    jumboName: jumboItemName,
                    jumboPrice:jumboItemPrice
                });
            });
            
            getjumboData(jumboData);
           
        });  
    },[])

        return (
            <React.Fragment>
                <div className="jumbo-data">
                <h1>Jumbo Items</h1>
                {gotjumboData && gotjumboData.map(vData => {
                    const{jumboImg,jumboLink,jumboName,jumboPrice} =vData;

                    return(
                            <>
                            <div className="jumbo-data jumbo-item">
                                    <a href={jumboLink}>
                                        <img src={jumboImg} alt="#"></img>
                                        
                                            <h2>{jumboName}</h2>
                                            <p>{jumboPrice}</p>
                                       
                                    </a>
                                </div>
                            </>
                    );
                })}
                    
                </div>
            </React.Fragment>
        );
    
}


export default TopRatedJumboData;

