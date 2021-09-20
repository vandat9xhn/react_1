import React from 'react';
import PropTypes from 'prop-types';
//
import FsFreeShipCardCenter from '../center/FsFreeShipCardCenter';
import FsFreeShipCardRight from '../right/FsFreeShipCardRight';
import FsFreeShipCardSide from '../side/FsFreeShipCardSide';
//
import './FsFreeShipCard.scss';

//
FsFreeShipCard.propTypes = {};

//
function FsFreeShipCard({
    left_elm,

    title_center_1,
    title_center_2,
    title_center_3,

    end_time,
    used_count,
    can_use,
    is_active,

    handleChoose,
}) {
    //
    return (
        <div className="FsFreeShipCard pos-rel">
            <div className="FsFreeShipCard_row display-flex align-items-center h-100per">
                <div className="FsFreeShipCard_left flex-shrink-0">
                    {left_elm}
                </div>

                <div className="FsFreeShipCard_center padding-x-8px flex-grow-1 display-flex flex-col">
                    <FsFreeShipCardCenter
                        title_center_1={title_center_1}
                        title_center_2={title_center_2}
                        title_center_3={title_center_3}
                        used_count={used_count}
                        end_time={end_time}
                    />
                </div>

                <div className="FsFreeShipCard_right">
                    <FsFreeShipCardRight
                        can_use={can_use}
                        is_active={is_active}
                        handleChoose={handleChoose}
                    />
                </div>
            </div>

            <FsFreeShipCardSide />
        </div>
    );
}

export default FsFreeShipCard;
