import React from 'react';

//
export const context_post = React.createContext();

//
const ContextPost = ({ children, ...rest_props }) => {
    //
    return (
        <context_post.Provider
            value={{
                ...rest_props,
            }}
        >
            {children}
        </context_post.Provider>
    );
};

export default ContextPost;
