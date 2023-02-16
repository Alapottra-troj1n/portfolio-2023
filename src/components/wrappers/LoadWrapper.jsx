import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../reusables/Spinner';

const LoadWrapper = ({children}) => {

    const { isLoading }  = useSelector(state => state.app)

    if(isLoading) {
        return <Spinner/>
    }

    console.log(isLoading)
    return (
        <>
            {children}
        </>
    );
};

export default LoadWrapper;