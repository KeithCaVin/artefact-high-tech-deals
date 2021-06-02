import rp from 'request-promise';
import cheerio from 'cheerio';
import React, { useEffect, useState} from 'react';

const AxiomData = ({title}) => {
    const [gotAxiomData, getAxiomData] = useState([]);

    useEffect(()=>{

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const keyword= urlParams.get('searchWord');

        var final_axiom_url = "https://cors-anywhere.herokuapp.com/https://www.axiomtelecom.com/home/search?q="+keyword;

        rp(final_axiom_url).then(html => {
            let axiomData = [];
            let $ = cheerio.load(html);

        
            const axiomField =$('#search-results');
        
            axiomField.find('#search-result-items .clearfix').each((i,element) =>{
                const $element= $(element);
            
                // This code gets the href of each items from axiom
                var axiomItemLink= $element.find('a').attr('href');
                var axiomItemLinkString = JSON.stringify(axiomItemLink);
                let newUrl = ('https://www.axiomtelecom.com/' + axiomItemLinkString.replace("\"",'')).replace("\"",'');
                
                //This code gets the image of the item from axiom
                let axiomItemImg= $element.find('.variant-image img').attr('src');
            
                //This code gets the name of the item from axiom
                let axiomItemName=$element.find('.variant-title').text();

                //This code gets the price of the item from axiom
                let axiomItemPrice=$element.find('.variant-final-price').text().replace(/^\s+|\s+$/g,'');
                
                axiomData.push({
                    axiomImg: axiomItemImg,
                    axiomLink: newUrl,
                    axiomName:axiomItemName,
                    axiomPrice:axiomItemPrice
                })
        
            })
            getAxiomData(axiomData);
          
          
        });  
    },[])

        return (
            <React.Fragment>
                <div className="axiom-data">

                <h1>Axiom Items</h1>
                {gotAxiomData && gotAxiomData.map(vData => {
                    const{axiomImg,axiomLink,axiomName,axiomPrice} =vData;
                        
                    return(
                            <>
                            <div className="axiom-data axiom-item">
                                    <a href={axiomLink}>
                                        <img src={axiomImg} alt="#"></img>
                                        
                                        <h2>{axiomName}</h2>
                                        <p>{axiomPrice}</p>
                                    </a>
                            </div>
                           
                            </>
                    );
                })}
                    
                </div>
            </React.Fragment>
        );
}

export default AxiomData
