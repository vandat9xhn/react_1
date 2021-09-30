import React from 'react';
import PropTypes from 'prop-types';
//
import IconLike from '../../../../../../_icons_svg/icons_like/icon_like/IconLike';
//
import symbol_tgdd from '../../../../../../../image/symbol_tgdd.png';
//
import './PLCmtItem.scss';

//
PLCmtItem.propTypes = {};

//
function PLCmtItem({
    ix_obj,

    first_letter_user_name,
    user_name,
    is_admin,
    content,
    img,
    commented_time,

    user_liked,
    user_not_liked,

    goToReply,
    handleLike,
    handleNotLike,
}) {
    //
    function onGoToReply() {
        goToReply(ix_obj);
    }

    //
    function onLike() {
        handleLike(ix_obj);
    }

    //
    function onNotLike() {
        handleNotLike(ix_obj);
    }

    //
    return (
        <div className="PLCmtItem">
            <div className="PLCmtItem_name display-flex align-items-center">
                {is_admin ? (
                    <img src={symbol_tgdd} alt="" width="23" height="23" />
                ) : (
                    <div className="PLCmtItem_name_first display-flex-center bg-ccc font-11px">
                        {first_letter_user_name}
                    </div>
                )}

                <div className="margin-left-10px font-16px">
                    <strong>{user_name}</strong>
                </div>

                {is_admin ? (
                    <div className="margin-left-10px padding-x-2px bg-gold font-11px">
                        Quản trị viên
                    </div>
                ) : null}
            </div>

            <div className="margin-top-10px">{content}</div>

            {img ? (
                <div className="margin-top-10px">
                    <img
                        className="brs-5px object-fit-cover"
                        src={img}
                        alt=""
                        width="200"
                        height="200"
                    />
                </div>
            ) : null}

            <div className="display-flex align-items-center flex-wrap margin-top-10px text-blue font-13px">
                <div className="cursor-pointer" onClick={onGoToReply}>
                    Trả lời
                </div>

                {is_admin ? (
                    <div className="display-flex align-items-center">
                        <div className="margin-x-5px">-</div>

                        <div
                            className="display-flex align-items-center cursor-pointer"
                            onClick={onLike}
                        >
                            <IconLike
                                size_icon="14px"
                                fill={user_liked ? 'var(--blue)' : 'var(--ccc)'}
                                stroke="none"
                            />

                            <span className="margin-left-3px">Hài lòng</span>
                        </div>

                        <div className="margin-x-5px">-</div>

                        <div
                            className="display-flex align-items-center cursor-pointer"
                            onClick={onNotLike}
                        >
                            <div className="inline-flex rotate-180">
                                <IconLike
                                    size_icon="14px"
                                    fill={
                                        user_not_liked
                                            ? 'var(--blue)'
                                            : 'var(--ccc)'
                                    }
                                    stroke="none"
                                />
                            </div>

                            <span className="margin-left-3px">
                                Không hài lòng
                            </span>
                        </div>
                    </div>
                ) : null}

                <div className="margin-x-5px">-</div>

                <div className="text-third">{commented_time}</div>
            </div>
        </div>
    );
}

export default PLCmtItem;
