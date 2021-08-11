import React from 'react';
import PropTypes from 'prop-types';
//
import StoryShare from '../_components/share/StoryShare';
import StoryReply from '../_components/reply/StoryReply';
import StoryLike from '../_components/like/StoryLike';
//
import './StoryItemFootMobile.scss';

//
StoryItemFootMobile.propTypes = {};

//
function StoryItemFootMobile({
    can_share,
    can_rep,
    can_like,

    text,
    handleChange,

    handleShare,
    onSend,
    handleClickIconSend,
    chooseListTypeLike,
}) {
    //
    return (
        <div className="StoryItemFootMobile padding-4px">
            <div className="StoryItemFootMobile_row display-flex flex-nowrap">
                {can_share ? (
                    <div className="StoryItemFootMobile_left">
                        <StoryShare handleShare={handleShare} />
                    </div>
                ) : null}

                {can_rep ? (
                    <div className="StoryItemFootMobile_center position-rel flex-grow-1">
                        <StoryReply
                            text={text}
                            handleChange={handleChange}
                            onSend={onSend}
                            handleClickIconSend={handleClickIconSend}
                        />
                    </div>
                ) : null}

                {can_like ? (
                    <div className="StoryItemFootMobile_right">
                        <StoryLike
                            open_type_like={can_like}
                            chooseListTypeLike={chooseListTypeLike}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default StoryItemFootMobile;
