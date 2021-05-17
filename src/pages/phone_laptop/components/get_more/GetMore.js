import React from 'react';
import PropTypes from 'prop-types';
// 
import FetchingDiv from '../../../../component/some_div/fetching/FetchingDiv';
// 
import './GetMore.scss';

// 
GetMore.propTypes = {
    title_more: PropTypes.string,
    open_fetching: PropTypes.bool,
    handleGetMore: PropTypes.func,
};

//
function GetMore(props) {
    const { title_more, handleGetMore, open_fetching } = props;

    // 
    return (
        <div className="GetMore">
            <div className="width-fit-content margin-auto">
                <FetchingDiv open_fetching={open_fetching} />
            </div>

            <div className={open_fetching ? 'display-none' : 'GetMore_contain'}>
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
