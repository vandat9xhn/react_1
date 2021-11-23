import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import HeaderNoticeTitle from '../../title/HeaderNoticeTitle';
import HeaderNoticeNew from '../new/_main/HeaderNoticeNew';
import HeaderNoticeEarlier from '../earlier/_main/HeaderNoticeEarlier';
//
import './HeaderNoticeContain.scss';

//
HeaderNoticeContain.propTypes = {};

//
function HeaderNoticeContain({ ref_scroll_elm }) {
    //
    const [new_notice_done, setNewNoticeDong] = useState(false);
    const [all_read, setAllRead] = useState(false);

    // -----

    //
    function handleGetNoticeNewDone() {
        setNewNoticeDong(true);
    }

    //
    function MarkAllAsRead() {
        setAllRead(true);
    }

    // ----

    //
    function handleAction(action_name = '') {
        if (action_name == 'read_all') {
            MarkAllAsRead();
        }
    }

    //
    return (
        <div className="HeaderNoticeContain">
            <div className="HeaderNoticeContain_title">
                <HeaderNoticeTitle handleAction={handleAction} />
            </div>

            <h4
                className="HeaderNoticeContain_mark_all padding-y-6px text-align-center text-blue font-500 cursor-pointer"
                onClick={MarkAllAsRead}
            >
                Mark all as Read
            </h4>

            <div>
                <HeaderNoticeNew
                    ref_scroll_elm={ref_scroll_elm}
                    all_read={all_read}
                    handleGetNoticeNewDone={handleGetNoticeNewDone}
                />
            </div>

            {new_notice_done ? (
                <div>
                    <HeaderNoticeEarlier ref_scroll_elm={ref_scroll_elm} />
                </div>
            ) : null}
        </div>
    );
}

export default HeaderNoticeContain;
