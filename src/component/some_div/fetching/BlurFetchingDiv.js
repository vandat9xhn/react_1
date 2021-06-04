import React from 'react';
import PropTypes from 'prop-types';

import './BlurFetchingDiv.scss';

//
function BlurFetchingDiv(props) {
    const {is_fetching, FetchingComponent} = props;

    return (
        <div className={is_fetching ? 'BlurFetchingDiv' : 'display-none'}>
            <div className="BlurFetchingDiv_screen screen-blur">
                <div className="BlurFetchingDiv_fetching">
                    <FetchingComponent is_fetching={is_fetching}/>
                </div>
            </div>
        </div>
    );
}

BlurFetchingDiv.propTypes = {
    FetchingComponent: PropTypes.func,
    is_fetching: PropTypes.bool,
};

export default BlurFetchingDiv;