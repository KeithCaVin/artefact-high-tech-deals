import rp from "request-promise";
import cheerio from 'cheerio';
import React, { useEffect, useState} from 'react';



const TopRatedVirginData =  ({title}) => {

     const [gotVirginData, getVirginData] = useState([]);

    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const keyword= urlParams.get('searchWord');
        const topRatedParam= "?sort=searchID%3D1%26action%3DCHANGE_SORTING%26page%3D1%26nbResultsPerPage%3D100%26sorting%3Dbest_seller%26constraints%3D%26query%3D"+keyword+"%26version%3D4.1&q=";
        var final_virgin_url = "https://cors-anywhere.herokuapp.com/https://www.virginmegastore.ae/en/search/"+topRatedParam+keyword;
        rp(final_virgin_url).then(html => {
            let virginData = [];
            let $ = cheerio.load(html);

            const virginField = $('body > main > div.container.product-list > section > ul.product-listing.product-list__item-wrapper.grid.g-row__4');

            virginField.find('.product-list__item.g-elem.m2.md2.g-row--margin-x.product-item').each((i,element) =>{
                const $element= $(element);


                var virginItemLink = $element.find('a').attr('href');
                var finalVirginItemLink = "https://www.virginmegastore.ae"+virginItemLink;

                var virginItemImg = $element.find('img').attr('src');

                var virginItemName = $element.find('.product-list__name.name.no-decoration.d-inline-block').text();

                var virginItemPrice = $element.find('.price__value').text().replace(/ |\n /g,'');
                
                virginData.push({
                    virginLink:finalVirginItemLink,
                    virginImg: virginItemImg,
                    virginName: virginItemName,
                    virginPrice:virginItemPrice
                });

            });
            
            getVirginData(virginData);
           
        });  
    },[])

        return (
            <div className="virgin-data">

               <h1>Virgin Mega store</h1>
               {gotVirginData && gotVirginData.map(vData => {
                   const{virginImg,virginLink,virginName,virginPrice} =vData;

                   return(
                        <>
                           <div className="virgin-data virgin-item">
                                <a href={virginLink}>
                                    <img src={virginImg} alt="#"></img>
                                    <div className="virgin-data virgin-item details">
                                        <h2>{virginName}</h2>
                                        <p>{virginPrice}</p>
                                    </div>
                                </a>
                            </div>
                        </>
                   );
               })}
                
            </div>
        );
    
}


export default TopRatedVirginData;

