import React from 'react';
import PropTypes from 'prop-types';
//
import PLCmtItem from '../../cmt/_main/PLCmtItem';
// 
import './PLReplies.scss';

//
PLReplies.propTypes = {};

//
function PLReplies({
    cmt_ix,
    reply_arr,

    goToReply,
    handleLike,
    handleNotLike,
}) {
    //
    return (
        <div className="PLReplies padding-top-10px">
            <div className="PLReplies_contain pos-rel padding-x-15px padding-top-15px bg-fb">
                <ul className="list-none">
                    {reply_arr.map((reply_obj, reply_ix) => (
                        <li key={reply_obj.id} className="padding-bottom-15px">
                            <PLCmtItem
                                ix_obj={{
                                    cmt_ix: cmt_ix,
                                    reply_ix: reply_ix,
                                }}
                                first_letter_user_name={
                                    reply_obj.first_letter_user_name
                                }
                                user_name={reply_obj.user_name}
                                is_admin={reply_obj.is_admin}
                                content={reply_obj.content}
                                img={reply_obj.img}
                                commented_time={reply_obj.commented_time}
                                user_liked={reply_obj.user_liked}
                                user_not_liked={reply_obj.user_not_liked}
                                //
                                goToReply={goToReply}
                                handleLike={handleLike}
                                handleNotLike={handleNotLike}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PLReplies;
