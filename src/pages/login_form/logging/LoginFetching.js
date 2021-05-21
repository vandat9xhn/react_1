import React from 'react';
import PropTypes from 'prop-types';
//
import FetchingDiv from '../../../component/some_div/fetching/FetchingDiv';

//
LoginFetching.propTypes = {
    open_fetching: PropTypes.bool,
};

//
function LoginFetching({ open_fetching }) {
    //
    return (
        <div>
            <div className="width-fit-content margin-auto">
                <FetchingDiv open_fetching={open_fetching} />
            </div>

            <div>Logging in...</div>
        </div>
    );
}

export default LoginFetching;
