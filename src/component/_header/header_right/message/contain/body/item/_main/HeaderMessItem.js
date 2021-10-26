import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import UnitTime from '../../../../../../../../_some_function/UnitTime';
//
import HeaderMessItemAction from '../action/_main/HeaderMessItemAction';
//
import './HeaderMessItem.scss';

//
HeaderMessItem.propTypes = {};

//
function HeaderMessItem({
    ref_scroll_elm,
    ix,

    id,
    user,
    message,
    count_new,
    updated_time,

    handleClickItem,
    handleAction,
}) {
    //
    const ref_mess_item = useRef(null);

    // ------

    //
    function onClickItem() {
        handleClickItem(id, ix);
    }

    //
    return (
        <div ref={ref_mess_item} className="HeaderMessItem pos-rel text-555">
            <div
                className={`HeaderMessItem_contain padding-8px line-20px font-400 cursor-pointer hv-bg-s-through ${
                    count_new > 0 ? 'bg-fb-active' : ''
                }`}
                onClick={onClickItem}
            >
                <div className="HeaderMessItem_row display-flex align-items-center">
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
                        <div>
                            {user.first_name} {user.last_name}
                        </div>

                        <div className="font-13px">
                            <div className="inline-block text-nowrap">
                                {message}
                            </div>

                            <div className="inline-block margin-x-3px">.</div>

                            <div className="HeaderMessItem_time inline-block">
                                {UnitTime(new Date() - new Date(updated_time))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {count_new ? (
                <div className="pos-abs y-center right-0 padding-right-16px text-red font-12px font-500 pointer-events-none">
                    +{count_new}
                </div>
            ) : null}

            <div className="HeaderMessItem_action pos-abs y-center">
                <HeaderMessItemAction
                    room_id={id}
                    ref_scroll_elm={ref_scroll_elm}
                    ref_mess_item={ref_mess_item}
                    handleAction={handleAction}
                />
            </div>
        </div>
    );
}

export default HeaderMessItem;
