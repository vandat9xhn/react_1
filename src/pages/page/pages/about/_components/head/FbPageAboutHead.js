import React from 'react';
import PropTypes from 'prop-types';
// 
import './FbPageAboutHead.scss';

//
FbPageAboutHead.propTypes = {};

//
function FbPageAboutHead({ title }) {
    //
    return (
        <div className="FbPageAboutHead padding-bottom-5px border-bottom-blur">
            <div className="FbPageAboutHead_title line-20px font-17px font-600 text-third">
                {title}
            </div>
        </div>
    );
}

export default FbPageAboutHead;
