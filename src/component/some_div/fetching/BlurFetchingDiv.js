import React from 'react';
import PropTypes from 'prop-types';

import './BlurFetchingDiv.scss';

//
function BlurFetchingDiv(props) {
    const {open_fetching, FetchingComponent} = props;

    return (
        <div className={open_fetching ? 'BlurFetchingDiv' : 'display-none'}>
            <div className="BlurFetchingDiv_screen screen-blur">
                <div className="BlurFetchingDiv_fetching">
                    <FetchingComponent open_fetching={open_fetching}/>
                </div>
            </div>
        </div>
    );
}

BlurFetchingDiv.propTypes = {
    FetchingComponent: PropTypes.func,
    open_fetching: PropTypes.bool,
};

export default BlurFetchingDiv;