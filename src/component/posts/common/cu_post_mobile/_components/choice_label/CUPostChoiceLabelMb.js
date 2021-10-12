import React from 'react';
import PropTypes from 'prop-types';

//
CUPostChoiceLabelMb.propTypes = {};

//
function CUPostChoiceLabelMb({ Icon, title, has_chosen, handleClick }) {
    //
    return (
        <div
            className="CUPostChoiceLabelMb padding-10px line-16px hv-bg-hv"
            onClick={handleClick}
        >
            <div className="CUPostChoiceLabelMb_row display-flex align-items-center">
                <div className="padding-right-12px">{Icon}</div>

                <div
                    className={`font-500 text-nowrap ${
                        has_chosen ? 'font-600 text-secondary' : ''
                    }`}
                >
                    {title}
                </div>
            </div>
        </div>
    );
}

export default CUPostChoiceLabelMb;
