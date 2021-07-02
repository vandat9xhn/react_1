import React from 'react';
// 
import { context_fix } from './DivFixContext';

//
const ContextFixAPI = ({ children, ...props }) => {
    //
    return (
        <context_fix.Provider
            value={{
                ...props,
            }}
        >
            {children}
        </context_fix.Provider>
    );
};

export default ContextFixAPI;
