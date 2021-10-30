import React from 'react';
import PropTypes from 'prop-types';
//
import './FriendsLayOut.scss';

//
FriendsLayOut.propTypes = {};

//
function FriendsLayOut({
    ComponentLeftHead,
    ComponentLeftContain,
    ComponentRight,
}) {
    //
    return (
        <div className="FriendsLayOut">
            <div className="FriendsLayOut_row display-flex">
                <div className="FriendsLayOut_left flex-shrink-0 h-100per bg-primary">
                    <div className="display-flex flex-col wh-100">
                        <div>{ComponentLeftHead}</div>

                        <div className="flex-shrink-1 overflow-y-auto scroll-thin">
                            {ComponentLeftContain}
                        </div>
                    </div>
                </div>

                <div className="FriendsLayOut_right flex-grow-1 padding-20px">
                    {ComponentRight}
                </div>
            </div>
        </div>
    );
}

export default FriendsLayOut;
