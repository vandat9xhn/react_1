import React from 'react';
import PropTypes from 'prop-types';
//
import './GroupPageAboutPart.scss';

//
GroupPageAboutPart.propTypes = {};

//
function GroupPageAboutPart({ Icon, title, info }) {
    //
    return (
        <div className="GroupPageAboutPart">
            <div className="display-flex align-items-start">
                <div className="padding-x-6px padding-top-10px font-12px line-16px">{Icon}</div>

                <div className="padding-6px">
                    <div className="font-17px font-500">{title}</div>

                    <div className="font-13px">{info}</div>
                </div>
            </div>
        </div>
    );
}

export default GroupPageAboutPart;
