import React, { useEffect, useState } from 'react';

const SecondSection = ({ secondSectionRef }) => {


    const cursorChangeEnter = () => {
        document.documentElement.style.setProperty('--cursor-color', 'rgba(207, 237, 113, 1)');
        document.documentElement.style.setProperty('--cursor-bg-color', 'rgba(207, 237, 113, 0.5)');
    };

    const cursorChangeEnterLeave = () => {
        document.documentElement.style.setProperty('--cursor-color', 'rgba(40, 41, 31)');
        document.documentElement.style.setProperty('--cursor-bg-color', 'rgba(40, 41, 31, 0.5)');
    };

    return (

        <div onMouseEnter={() => cursorChangeEnter()}
            onMouseLeave={() => cursorChangeEnterLeave()} ref={secondSectionRef} className='bg-dark text-primary h-screen px-40' >

        </div>

    );
};

export default SecondSection;