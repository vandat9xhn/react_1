import React from 'react';

//
export const context_chat = React.createContext();

//
const ContextChat = ({ children, ...rest_props }) => {
    //
    return (
        <context_chat.Provider
            value={{
                ...rest_props,
            }}
        >
            {children}
        </context_chat.Provider>
    );
};

export default ContextChat;
