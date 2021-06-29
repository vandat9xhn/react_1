import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../_hooks/useMounted';
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
function ContentMore({ content_obj, seeMoreContent }) {
    //
    const { content, has_more_content } = content_obj;

    //
    const [content_state, setContentState] = useState({
        content_first: content_obj.content,
        content_more: '',
        show_more: false,
        is_fetching: false,
    });

    const { content_first, content_more, show_more, is_fetching } =
        content_state;

    //
    const mounted = useMounted();

    //
    const is_mobile = localStorage.is_mobile == 1;

    //
    function onSeeMoreContent(start_obj_state = {}) {
        setContentState((content_state) => ({
            ...content_state,
            ...start_obj_state,
            is_fetching: true,
        }));

        seeMoreContent().then((more_content) => {
            content_obj.content += more_content;
            content_obj.has_more_content = false;

            mounted &&
                setContentState((content_state) => ({
                    ...content_state,
                    content_more: more_content,
                    is_fetching: false,
                }));
        });
    }

    //
    function handleClickSeeMore() {
        if (is_mobile) {
            return;
        }

        onSeeMoreContent();
    }

    //
    function handleToggleContent() {
        if (!is_mobile) {
            return;
        }

        if (has_more_content) {
            onSeeMoreContent({ show_more: true });

            return;
        }

        if (content_first == content) {
            return;
        }

        setContentState({
            ...content_state,
            show_more: !show_more,
        });
    }

    //
    return (
        <div className="ContentMore position-rel">
            <div
                className={`${
                    is_fetching ? 'opacity-05 pointer-events-none' : ''
                }`}
                onClick={handleToggleContent}
            >
                <span className="ContentMore_first">
                    {show_more || !is_mobile ? content : content_first}
                </span>

                {(has_more_content || (is_mobile && !show_more)) &&
                    !is_fetching && (
                        <span
                            className="ContentMore_more hv-opacity label-field cursor-pointer text-secondary"
                            onClick={handleClickSeeMore}
                        >
                            ...See more
                        </span>
                    )}
            </div>

            <div className="ContentMore_fetching pos-abs-center">
                <CircleLoading is_fetching={is_fetching} size_icon="1.5rem" />
            </div>
        </div>
    );
}

export default ContentMore;
