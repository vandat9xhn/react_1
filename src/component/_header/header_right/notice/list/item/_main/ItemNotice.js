import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import UnitTime from '../../../../../../../_some_function/UnitTime';
//
import HeaderNoticeItemAction from '../action/_main/HeaderNoticeItemAction';
//
import './ItemNotice.scss';

//
ItemNotice.propTypes = {};

//
function ItemNotice({
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
    //
    const ref_notice_item = useRef(null);

    // ------

    //
    function onClickItem() {
        handleClickItem(id, ix);
    }

    //
    return (
        <div ref={ref_notice_item} className="ItemNotice pos-rel">
            <Link
                className="text-555"
                to={'/posts/' + id}
                onClick={onClickItem}
            >
                <div
                    className={`ItemNotice_contain padding-8px line-20px font-400 hv-bg-s-through ${
                        is_new ? 'bg-fb-active' : ''
                    }`}
                >
                    <div className="ItemNotice_row display-flex align-items-center">
                        <div>
                            <img
                                className="brs-50 object-fit-cover"
                                src={user.picture}
                                alt=""
                                width="56"
                                height="56"
                            />
                        </div>

                        <div className="flex-grow-1 padding-left-12px">
                            <div className="wk-box-vertical line-clamp-3 overflow-hidden">
                                {content}
                            </div>

                            <div className="ItemNotice_time font-13px">
                                {UnitTime(new Date() - new Date(updated_time))}{' '}
                                ago
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <div className="ItemNotice_action pos-abs y-center">
                <HeaderNoticeItemAction
                    notice_id={id}
                    ref_scroll_elm={ref_scroll_elm}
                    ref_notice_item={ref_notice_item}
                    handleAction={handleAction}
                />
            </div>
        </div>
    );
}

export default ItemNotice;
