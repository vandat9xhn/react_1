import React from 'react';
import PropTypes from 'prop-types';
// 
import FetchingDiv from '../../../../component/some_div/fetching/FetchingDiv';
// 
import './GetMore.scss';

// 
GetMore.propTypes = {
    title_more: PropTypes.string,
    is_fetching: PropTypes.bool,
    handleGetMore: PropTypes.func,
};

//
function GetMore(props) {
    const { title_more, handleGetMore, is_fetching } = props;

    // 
    return (
        <div className="GetMore">
            <div className="width-fit-content margin-auto">
                <FetchingDiv is_fetching={is_fetching} />
            </div>

            <div className={is_fetching ? 'display-none' : 'GetMore_contain'}>
                <div
                    className="width-fit-content margin-auto"
                    onClick={handleGetMore}
                >
                    {title_more}
                </div>
            </div>
        </div>
    );
}

export default GetMore;
