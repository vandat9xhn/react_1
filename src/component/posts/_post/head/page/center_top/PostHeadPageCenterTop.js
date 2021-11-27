import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import PageTick from '../../../../../page_name_tick/tick/PageTick';
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
                    title_action={
                        <span className="display-inline">
                            <Link
                                className="break-word vertical-align-middle color-inherit font-600"
                                to={`/page/${page_obj.id}`}
                            >
                                {page_obj.name}
                            </Link>

                            <span className="inline-block vertical-align-middle margin-left-5px wh-16px">
                                <PageTick />
                            </span>
                        </span>
                    }
                />
            </span>

            {emoji_obj.id ? <span className="text-third">{' is '}</span> : null}

            <PostHeadEmoji emoji_obj={emoji_obj} />
        </React.Fragment>
    );
}

export default PostHeadPageCenterTop;
