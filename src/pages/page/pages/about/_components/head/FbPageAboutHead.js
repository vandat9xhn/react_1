import React from 'react';
import PropTypes from 'prop-types';

//
FbPageAboutHead.propTypes = {};

//
function FbPageAboutHead({ title }) {
    //
    return (
        <div className="FbPageAboutHead padding-bottom-5px border-bottom-blur">
            <div className="line-20px font-17px font-600 text-third">
                {title}
            </div>
        </div>
    );
}

export default FbPageAboutHead;
