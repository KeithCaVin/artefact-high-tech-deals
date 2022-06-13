import React, { useState } from 'react';
import AmazonData from './AmazonData';
import VirginData from './VirginData';
import AxiomData from './AxiomData';


const ShowData = (props) => {

    return(
        <React.Fragment>
            
            <div className="item-data">
              
                <> 
                    <AmazonData pData= {props.itemList.aData}/>
                    <VirginData pData = {props.itemList.vData}/>
                    <AxiomData pData = {props.itemList.xData}/> 
                </>
            </div>
           
        </React.Fragment>
        
    );
}

export default ShowData;