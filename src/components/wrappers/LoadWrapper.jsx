import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../reusables/Spinner';

const LoadWrapper = ({children}) => {

    const { isLoading }  = useSelector(state => state.app)

    if(isLoading) {
        return <div className="h-screen flex justify-center items-center bg-secondary"><Spinner/> </div>
    }

    console.log(isLoading)
    return (
        <>
            {children}
        </>
    );
};

export default LoadWrapper;