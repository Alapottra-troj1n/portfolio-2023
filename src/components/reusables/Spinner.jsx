import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-secondary">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    );
};

export default Spinner;