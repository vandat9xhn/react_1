import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import StoryShare from '../_components/share/StoryShare';
import StoryReply from '../_components/reply/StoryReply';
import StoryLike from '../_components/like/StoryLike';
//
import './StoryFootPc.scss';

//
StoryFootPc.propTypes = {};

//
function StoryFootPc({
    can_share,
    can_rep,
    can_like,

    text,
    is_focus,
    handleChange,
    handleFocus,
    handleBlur,

    handleShare,
    onSend,
    handleClickIconSend,
    chooseListTypeLike,
}) {
    //
    const ref_like_elm = useRef(null);

    //
    return (
        <div className="StoryFootPc padding-4px">
            <div className="StoryFootPc_row display-flex flex-nowrap position-rel">
                {can_share ? (
                    <div className="StoryFootPc_left">
                        <StoryShare handleShare={handleShare} />
                    </div>
                ) : null}

                {can_rep ? (
                    <div className="StoryFootPc_center position-rel flex-grow-1">
                        <StoryReply
                            text={text}
                            handleFocus={handleFocus}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            onSend={onSend}
                            handleClickIconSend={handleClickIconSend}
                        />
                    </div>
                ) : null}

                {can_like ? (
                    <div
                        className="StoryFootPc_right"
                        style={{
                            minWidth:
                                is_focus || text.trim()
                                    ? '0px'
                                    : ref_like_elm.current
                                    ? ref_like_elm.current.offsetWidth
                                    : '250px',
                        }}
                    >{`a`}</div>
                ) : null}

                {can_like ? (
                    <div
                        ref={ref_like_elm}
                        className={`StoryFootPc_like ${
                            is_focus || text.trim()
                                ? 'StoryFootPc_like-hide'
                                : 'StoryFootPc_like-show'
                        }`}
                    >
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

export default StoryFootPc;
