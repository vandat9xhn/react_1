import React from 'react';
import PropTypes from 'prop-types';

import './LoaderDiv.scss';
//
function LoaderDiv(props) {
    const {LoadingComponent, is_fetching} = props;

    return (
        <div className={is_fetching ? 'LoaderDiv' : 'display-none' }>
            <div className="LoaderDiv_contain brs-5px">
                <LoadingComponent is_fetching={is_fetching}/>
            </div>
        </div>
    );
}

LoaderDiv.propTypes = {
    LoadingComponent: PropTypes.func,
    is_fetching: PropTypes.bool,
};

export default LoaderDiv;