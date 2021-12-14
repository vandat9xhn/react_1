import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewPage from '../../../../../action_preview_page/_main/ActionPreviewPage';
import PostHeadEmoji from '../../_components/emoji/PostHeadEmoji';

//
PostHeadPageCenterTop.propTypes = {};

//
function PostHeadPageCenterTop({ page_obj, emoji_obj }) {
    //
    return (
        <React.Fragment>
            <span className="font-600">
                <ActionPreviewPage
                    page_id={page_obj.id}
                    has_tick={page_obj.has_tick}
                    title_action={
                        <Link
                            className="break-word  color-inherit font-600"
                            to={`/page/${page_obj.id}`}
                        >
                            {page_obj.name}
                        </Link>
                    }
                />
            </span>

            {emoji_obj.id ? <span className="text-third">{' is '}</span> : null}

            <PostHeadEmoji emoji_obj={emoji_obj} />
        </React.Fragment>
    );
}

export default PostHeadPageCenterTop;
