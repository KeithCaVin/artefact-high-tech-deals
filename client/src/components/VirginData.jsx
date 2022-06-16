import React from 'react';

const VirginData =  (props) => {
    return (
        <React.Fragment>
            <div className="virgin-data">

                <h1>Virgin Megastore</h1>

                {props.pData.virginData.map((vData, i) => {
                    const{virginImg,virginLink,virginName,virginPrice} =vData;

                    return(
                        <div className="virgin-data virgin-item"  key={i}>
                            <a href={virginLink} target="_blank" rel="noopener noreferrer">
                                <img src={virginImg} alt="#"></img>
                                
                                <h2>{virginName}</h2>
                                <p>{virginPrice}</p>
                                
                            </a>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}


export default VirginData;

