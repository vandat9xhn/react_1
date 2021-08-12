import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../_constant/Constant';
// 
import { useMounted } from '../../_hooks/useMounted';
import { useForceUpdate } from '../../_hooks/UseForceUpdate';
//
import CircleLoading from '../waiting/circle_loading/CircleLoading';
//
import './ContentMore.scss';

//
ContentMore.propTypes = {
    content_obj: PropTypes.shape({
        content: PropTypes.string,
        content_more: PropTypes.string,
        has_more_content: PropTypes.bool,
    }),
    seeMoreContent: PropTypes.func,
};

ContentMore.defaultProps = {
    content_obj: {
        content: '',
        content_more: '',
        has_more_content: false,
    },
};

//
function ContentMore({ content_obj, seeMoreContent }) {
    //
    const { content, content_more, has_more_content } = content_obj;

    //
    const [content_state, setContentState] = useState({
        is_fetching: false,
    });

    const { is_fetching } = content_state;

    //
    const mounted = useMounted();
    const forceUpdate = useForceUpdate();

    //
    function onSeeMoreContent(start_obj_state = {}) {
        setContentState((content_state) => ({
            ...content_state,
            ...start_obj_state,
            is_fetching: true,
        }));

        seeMoreContent().then((more_content) => {
            content_obj.content_more = more_content;
            content_obj.has_more_content = false;

            mounted &&
                setContentState({
                    is_fetching: false,
                });
        });
    }

    // not mobile
    function handleClickSeeMore() {
        if (IS_MOBILE) {
            return;
        }

        onSeeMoreContent();
    }

    // mobile
    function handleToggleContent() {
        if (!IS_MOBILE) {
            return;
        }

        if (has_more_content) {
            if (content_more == '') {
                onSeeMoreContent();
            } else {
                content_obj.has_more_content = false;
                forceUpdate();
            }

            return;
        }

        if (content_more) {
            content_obj.has_more_content = true;
            forceUpdate();
        }
    }

    //
    return (
        <div className="ContentMore pos-rel">
            <div
                className={`${
                    is_fetching ? 'opacity-05 pointer-events-none' : ''
                }`}
                onClick={handleToggleContent}
            >
                <span className="ContentMore_first">
                    {content}
                    {!has_more_content ? ' ' + content_more : ''}
                </span>

                {has_more_content && !is_fetching && (
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
