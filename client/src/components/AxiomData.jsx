import React from 'react';

const AxiomData = (props) => {

        return (
            <React.Fragment>
                <div className="axiom-data">

                    <h1>Axiom Items</h1>
                    {props.pData.axiomData.map((xData , i) => {
                        const{axiomImg,axiomLink,axiomName,axiomPrice} =xData;
                            
                        return(
                            <div className="axiom-data axiom-item" key={i}>
                                    <a href={axiomLink} target="_blank" rel="noopener noreferrer">
                                        <img src={axiomImg} alt="#"></img>
                                        
                                        <h2>{axiomName}</h2>
                                        <p>{axiomPrice}</p>
                                    </a>
                            </div>
                        );
                    })}
                    
                </div>
            </React.Fragment>
        );
}

export default AxiomData
