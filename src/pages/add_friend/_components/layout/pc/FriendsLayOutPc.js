import React from 'react';
import PropTypes from 'prop-types';
//
import './FriendsLayOutPc.scss';

//
FriendsLayOutPc.propTypes = {};

//
function FriendsLayOutPc({
    ComponentLeftHead,
    ComponentLeftContain,
    ComponentRight,
}) {
    //
    return (
        <div className="FriendsLayOutPc">
            <div className="FriendsLayOutPc_row display-flex">
                <div className="FriendsLayOutPc_left flex-shrink-0 h-100per bg-primary">
                    <div className="display-flex flex-col wh-100">
                        <div>{ComponentLeftHead}</div>

                        <div className="flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin">
                            {ComponentLeftContain}
                        </div>
                    </div>
                </div>

                <div className="FriendsLayOutPc_right flex-grow-1">
                    {ComponentRight}
                </div>
            </div>
        </div>
    );
}

export default FriendsLayOutPc;
