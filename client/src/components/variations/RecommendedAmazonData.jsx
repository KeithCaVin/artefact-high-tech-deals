import rp from "request-promise";
import cheerio from 'cheerio';
import React, { useEffect, useState} from 'react';



const RecommendedAmazonData =  ({title}) => {

    const [gotAmazonData, getAmazonData]= useState([]);
 

    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const keyword= urlParams.get('searchWord');
        const recommendedParam = "&rh=p_n_fulfilled_by_amazon%3A16258112031";
        var final_amazon_url = "https://cors-anywhere.herokuapp.com/https://www.amazon.ae/s?k="+keyword+recommendedParam;

        rp(final_amazon_url).then(html => {
            let data = [];
            let $ = cheerio.load(html);
            const table =$('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row');
            
        
                
            table.find('div .sg-col-inner .a-section.a-spacing-medium').each((i,element)=> {
                const $element= $(element);
                
            
                let amazonItemImg=$element.find('.s-image').attr('src');
                let amazonItemLink='https://www.amazon.ae'+$element.find('.a-section.a-spacing-none.a-spacing-top-small a').attr('href');
                let amazonItemName=$element.find('.a-size-base-plus.a-color-base.a-text-normal').text();
                let amazonItemPrice=$element.find('.a-price-whole').text().replace(".",'');
            
            
                data.push({
                    amazonImg: amazonItemImg,
                    amazonLink:amazonItemLink,
                    amazonName:amazonItemName,
                    amazonPrice:amazonItemPrice
                })
                
            });
            
            getAmazonData(data);
           
        });  
    },[])

        return (
            <React.Fragment>
                <div className="amazon-data">
            
                <h1>Amazon Items</h1>
                {gotAmazonData && gotAmazonData.map(aData => {
                    const{amazonImg,amazonLink,amazonName,amazonPrice} =aData;
                    

                        if(amazonLink === "https://www.amazon.aejavascript:void(0)"){
                            return("");
                        }
                    return(
                            <>
                                <div className="amazon-data amazon-item">
                                    <a href={amazonLink}>
                                        <img src={amazonImg} alt="#"></img>
                                       
                                        <h2>{amazonName}</h2>
                                        <p>AED {amazonPrice}.00</p>
                                       
                                    </a>
                                </div>
                            </>
                    );
                })}
                    
                </div>
            </React.Fragment>
        );
    
}



export default RecommendedAmazonData;


