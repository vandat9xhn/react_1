import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../waiting/circle_loading/CircleLoading';
//
import './ContentMore.scss';

//
ContentMore.propTypes = {
    content_obj: PropTypes.shape({
        content: PropTypes.string,
        has_more_content: PropTypes.bool,
    }),
    seeMoreContent: PropTypes.func,
};

ContentMore.defaultProps = {
    content_obj: {
        content: '',
        has_more_content: false,
    },
};

//
function ContentMore(props) {
    const { content_obj, seeMoreContent } = props;

    const { content, has_more_content } = content_obj;

    //
    const [is_fetching, setIsFetching] = useState(false);

    //
    function onSeeMoreContent() {
        setIsFetching(true);

        seeMoreContent().then((more_content) => {
            content_obj.content += more_content
            content_obj.has_more_content = false
            
            setIsFetching(false);
        });
    }

    //
    return (
        <div className="ContentMore_contain">
            <div className="ContentMore_first">{content}</div>

            {has_more_content && !is_fetching && (
                <div
                    className="ContentMore_more hv-opacity"
                    onClick={onSeeMoreContent}
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
