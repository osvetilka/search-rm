import React from "react";
import './Frame.css';

const Frame = ({children, label}) => (
    <div className={'frame'}>
        {label && <div className={'frame-label'}>{label}</div>}
        {children}
       
    </div>
     
);

export default Frame;