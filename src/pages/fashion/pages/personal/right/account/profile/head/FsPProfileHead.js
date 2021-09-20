import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPProfileHead.scss';

//
FsPProfileHead.propTypes = {};

//
function FsPProfileHead({ title, info }) {
    //
    return (
        <div className="FsPProfileHead padding-y-18px">
            <div className="FsPProfileHead_title text-cap font-18px font-500">
                {title}
            </div>

            <div className="font-14px font-400 text-third">{info}</div>
        </div>
    );
}

export default FsPProfileHead;
