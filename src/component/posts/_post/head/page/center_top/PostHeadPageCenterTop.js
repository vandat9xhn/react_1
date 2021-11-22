import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
import PostHeadEmoji from '../../_components/emoji/PostHeadEmoji';

//
PostHeadPageCenterTop.propTypes = {};

//
function PostHeadPageCenterTop({ page_obj, emoji_obj }) {
    //
    return (
        <React.Fragment>
            <span className="font-600">
                <ActionPreviewProfile
                    user_id={page_obj.id}
                    title_action={
                        <Link
                            className="color-inherit hv-cl-blue"
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
