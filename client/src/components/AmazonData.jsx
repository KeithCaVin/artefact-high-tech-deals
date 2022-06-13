import React from 'react';

const AmazonData =  (props) => {
    return (
        <React.Fragment>
            <div className="amazon-data">
        
                <h1>Amazon Items</h1>

                {props.pData.amazonData.map((item, i) => {
                    if(item.amazonLink === "https://www.amazon.aeundefined"){
                        return("");
                    }
                    return (
                        
                        <div className="amazon-data amazon-item" key={i}>
                            <a href={item.amazonLink} target="_blank" rel="noopener noreferrer">
                                <div className="img-container">
                                    <img src={item.amazonImg} alt="#"></img>
                                </div>
                                
                                
                                <h2>{item.amazonName}</h2>
                                <p>AED {item.amazonPrice}.00</p>
                                
                            </a>
                        </div>
                        
                    )
                })}
            </div>
        </React.Fragment>
    );
}

export default AmazonData;

