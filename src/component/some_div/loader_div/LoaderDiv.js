import React from 'react';
import PropTypes from 'prop-types';

import './LoaderDiv.scss';
//
function LoaderDiv(props) {
    const {LoadingComponent, open_fetching} = props;

    return (
        <div className={open_fetching ? 'LoaderDiv' : 'display-none' }>
            <div className="LoaderDiv_contain brs-5px">
                <LoadingComponent open_fetching={open_fetching}/>
            </div>
        </div>
    );
}

LoaderDiv.propTypes = {
    LoadingComponent: PropTypes.func,
    open_fetching: PropTypes.bool,
};

export default LoaderDiv;