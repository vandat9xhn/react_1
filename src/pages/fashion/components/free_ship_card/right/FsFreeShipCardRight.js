import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import RadioCustom from '../../../../../component/input/radio_custom/RadioCustom';

//
FsFreeShipCardRight.propTypes = {};

//
function FsFreeShipCardRight({ can_use, is_active, handleChoose }) {
    //
    return (
        <div className="FsFreeShipCardRight display-flex flex-col justify-content-center h-100per padding-8px">
            <div className="flex-grow-1 display-flex-center">
                {can_use ? (
                    <div className="cursor-pointer" onClick={handleChoose}>
                        <RadioCustom is_active={is_active} />
                    </div>
                ) : null}
            </div>

            <Link to="/fashion/free-ship-condition" className="font-14px">
                Điều kiện
            </Link>
        </div>
    );
}

export default FsFreeShipCardRight;
