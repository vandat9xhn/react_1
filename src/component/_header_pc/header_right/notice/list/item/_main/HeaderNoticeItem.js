import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import UnitTime from '../../../../../../../_some_function/UnitTime';
//
import HeaderNoticeItemAction from '../action/_main/HeaderNoticeItemAction';
//
import './HeaderNoticeItem.scss';

//
HeaderNoticeItem.propTypes = {};

//
function HeaderNoticeItem({
    ref_scroll_elm,
    ix,

    id,
    user,
    content,
    updated_time,
    is_new,

    handleClickItem,
    handleAction,
}) {
    // ------

    //
    function onClickItem() {
        handleClickItem && handleClickItem(ix);
    }

    //
    function onAction(action_name = '') {
        handleAction({ action_name: action_name, ix: ix });
    }

    //
    return (
        <div className="HeaderNoticeItem pos-rel">
            <Link
                className="text-222"
                to={'/posts/' + id}
                onClick={onClickItem}
            >
                <div className="HeaderNoticeItem_contain padding-8px line-20px font-400 hv-bg-s-through">
                    <div className="HeaderNoticeItem_row display-flex">
                        <img
                            className="HeaderNoticeItem_pic flex-shrink-0 brs-50 object-fit-cover"
                            src={user.picture}
                            alt=""
                            width="56"
                            height="56"
                        />

                        <div className="flex-grow-1 display-flex align-items-center padding-left-12px">
                            <div className="flex-grow-1">
                                <div className="wk-box-vertical line-clamp-3 overflow-hidden">
                                    {content}
                                </div>

                                <div className="HeaderNoticeItem_time font-13px text-third">
                                    {UnitTime(
                                        new Date() - new Date(updated_time)
                                    )}
                                    {new Date() - new Date(updated_time) >=
                                    60000
                                        ? ' ago'
                                        : ''}
                                </div>
                            </div>

                            <div className="margin-left-12px">
                                <div
                                    className={`padding-6px brs-50 ${
                                        is_new ? 'bg-blue' : 'bg-transparent'
                                    }`}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <div className="HeaderNoticeItem_action pos-abs y-center">
                <HeaderNoticeItemAction
                    notice_id={id}
                    ref_scroll_elm={ref_scroll_elm}
                    handleAction={onAction}
                />
            </div>
        </div>
    );
}

export default HeaderNoticeItem;
