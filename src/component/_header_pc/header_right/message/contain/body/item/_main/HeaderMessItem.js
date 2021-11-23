import React from 'react';
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
    // ------

    //
    function onClickItem() {
        handleClickItem(ix);
    }

    //
    function onAction(action_name = '') {
        handleAction({ action_name: action_name, ix: ix });
    }

    //
    return (
        <div className="HeaderMessItem pos-rel">
            <div
                className={`HeaderMessItem_contain padding-8px line-20px font-400 cursor-pointer hv-bg-s-through ${
                    count_new > 0 ? 'bg-fb-active' : ''
                }`}
                onClick={onClickItem}
            >
                <div className="HeaderMessItem_row display-flex align-items-center">
                    <img
                        className="HeaderMessItem_pic flex-shrink-0 brs-50 object-fit-cover"
                        src={user.picture}
                        alt=""
                        width="56"
                        height="56"
                    />

                    <div className="flex-grow-1 padding-left-12px overflow-hidden">
                        <div className="text-primary">
                            {user.first_name} {user.last_name}
                        </div>

                        <div className="display-flex font-13px text-555">
                            <div className="inline-block text-nowrap">
                                {count_new ? (
                                    <strong className="HeaderMessItem_new vertical-align-middle inline-flex align-items-center justify-content-center brs-50 bg-fashion-red text-white font-10px font-500">
                                        {count_new}{' '}
                                    </strong>
                                ) : null}

                                <span
                                    className={`vertical-align-middle ${
                                        count_new ? 'text-blue' : ''
                                    }`}
                                >
                                    {message}
                                </span>
                            </div>

                            <div className="inline-block margin-x-8px">·</div>

                            <div className="HeaderMessItem_time inline-block">
                                {UnitTime(new Date() - new Date(updated_time))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="HeaderMessItem_action pos-abs y-center">
                <HeaderMessItemAction
                    room_id={id}
                    ref_scroll_elm={ref_scroll_elm}
                    handleAction={onAction}
                />
            </div>
        </div>
    );
}

export default HeaderMessItem;
