import React from 'react';
import PropTypes from 'prop-types';
//
import './LoaderDiv.scss';

//
LoaderDiv.propTypes = {
    LoadingComponent: PropTypes.func,
    is_fetching: PropTypes.bool,
};

//
function LoaderDiv({ LoadingComponent, is_fetching }) {
    //
    return (
        <div
            className={
                is_fetching ? 'LoaderDiv bg-shadow-9 brs-5px' : 'display-none'
            }
        >
            <div className="LoaderDiv_row display-flex-center">
                <LoadingComponent is_fetching={is_fetching} />
            </div>
        </div>
    );
}

export default LoaderDiv;
