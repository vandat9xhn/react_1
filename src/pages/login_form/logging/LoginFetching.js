import React from 'react';
import PropTypes from 'prop-types';
//
import FetchingDiv from '../../../component/some_div/fetching/FetchingDiv';

//
LoginFetching.propTypes = {
    is_fetching: PropTypes.bool,
};

//
function LoginFetching({ is_fetching }) {
    //
    return (
        <div>
            <div className="width-fit-content margin-auto">
                <FetchingDiv is_fetching={is_fetching} />
            </div>

            <div>Logging in...</div>
        </div>
    );
}

export default LoginFetching;
