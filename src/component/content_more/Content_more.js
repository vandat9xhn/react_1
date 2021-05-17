import React from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../waiting/circle_loading/CircleLoading';
//
import './ContentMore.scss';

//
ContentMore.propTypes = {
    content: PropTypes.string,
    has_more_content: PropTypes.bool,
    seeMoreContent: PropTypes.func,
    is_fetching: PropTypes.bool,
};

ContentMore.defaultProps = {
    content: '',
    has_more_content: false,
    is_fetching: false,
};

//
function ContentMore(props) {
    const { content, has_more_content, seeMoreContent, is_fetching } = props;

    // 
    return (
        <div className="ContentMore_contain">
            <div className="ContentMore_first">{content}</div>

            {has_more_content && !is_fetching && (
                <div
                    className="ContentMore_more hv-opacity"
                    onClick={seeMoreContent}
                >
                    ...See more
                </div>
            )}

            <div className="ContentMore_fetching">
                <CircleLoading open_fetching={is_fetching} />
            </div>
        </div>
    );
}

export default ContentMore;
