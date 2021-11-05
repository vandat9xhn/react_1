import React from 'react';
import PropTypes from 'prop-types';
//
import './DivWidthLoading.scss';

//
DivWidthLoading.propTypes = {};

//
function DivWidthLoading({ is_fetching }) {
    //
    return (
        <div
            className={`pos-rel padding-y-2px w-100per bg-shadow-1 ${
                is_fetching ? 'DivWidthLoading' : ''
            }`}
        >
            <div
                className={`DivWidthLoading_contain pos-abs top-0 right-0 h-100per bg-primary ${
                    is_fetching
                        ? 'DivWidthLoading_contain-loading'
                        : 'DivWidthLoading_contain-done'
                }`}
            ></div>
        </div>
    );
}

export default DivWidthLoading;
