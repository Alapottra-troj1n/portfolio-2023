import React from 'react';
import { useEffect } from 'react';
import cursorChange from '../utils/cursorChange';

const JournalPage = () => {
    
    useEffect(() => {
        cursorChange("207, 237, 113");
      }, []);

    return (
        <div className="min-h-screen bg-dark text-white">
           <div className="lg:px-40 px-8 py-40 font-primary">
           <h2 className="tex-7xl">Work on Progress</h2>
           </div>
        </div>
    );
};

export default JournalPage;