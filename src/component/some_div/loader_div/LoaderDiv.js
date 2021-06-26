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
        <div className={is_fetching ? 'LoaderDiv' : 'display-none'}>
            <div className="LoaderDiv_contain brs-5px">
                <LoadingComponent is_fetching={is_fetching} />
            </div>
        </div>
    );
}

export default LoaderDiv;
