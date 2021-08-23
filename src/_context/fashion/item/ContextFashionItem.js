import React from 'react';
//
import { context_fashion_item } from './context_fashion_item';
//
import WaitingBall from '../../../component/waiting/waiting_ball/WaitingBall';

//
const ContextFashionItem = ({ children, ...rest_props }) => {
    //
    return (
        <context_fashion_item.Provider
            value={{
                ...rest_props,
            }}
        >
            {rest_props.fetched_item ? (
                children
            ) : (
                <div>
                    <div className="padding-16px"></div>

                    <div className="h-100vh bg-primary">
                        <WaitingBall
                            is_fetching={true}
                            waitingBall_center={true}
                        />
                    </div>
                </div>
            )}
        </context_fashion_item.Provider>
    );
};

export default ContextFashionItem;
