import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconBell from '../../../../../_icons_svg/icon_bell/IconBell';
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
//
import ListNotices from '../list/_main/ListNotices';
//
import './HeaderNotice.scss';

//
HeaderNotice.propTypes = {};

//
function HeaderNotice(props) {
    const {
        notice_obj,
        //
        MarkAllAsRead,
        hasReceiveNotices,
        handleOpenNotice,
        handleClickNoticeItem,
        getMoreNotice,
    } = props;

    const {notices, count_notice, count_new_notice} = notice_obj;
    //
    const [open_notice, setOpenNotice] = useState(false);
    const [is_fetching_notice, setIsFetchingNotice] = useState(false);

    //
    async function toggleOpenNotice() {
        setOpenNotice(!open_notice);
        if (!open_notice && notices.length == 0 && count_notice > 0) {
            setIsFetchingNotice(true);
            handleOpenNotice();
            setIsFetchingNotice(false);
        }
    }
    //
    function closeNotice() {
        open_notice && setOpenNotice(false);
    }

    //
    function onClickNoticeItem(id, ix) {
        setOpenNotice(false);
        handleClickNoticeItem(id, ix);
    }

    //
    async function onGetMoreNotice() {
        setIsFetchingNotice(true);
        await getMoreNotice();
        setIsFetchingNotice(false);
    }

    //
    return (
        <CloseDiv makeDivHidden={closeNotice}>
            <div
                className={`header_menu Header_notice ${
                    open_notice ? 'nav-active bottom-blue' : ''
                }`}
            >
                <div
                    className="RightHeader__icon HeaderNotice__bell header_icon"
                    onClick={toggleOpenNotice}
                    title="Notice"
                >
                    <IconBell />

                    <div
                        className={
                            count_new_notice
                                ? 'RightHeader__num-notice'
                                : 'display-none'
                        }
                    >
                        {count_new_notice}
                    </div>
                </div>

                <div
                    className={`header_hidden ${
                        open_notice ? '' : 'display-none'
                    }`}
                    onClick={hasReceiveNotices}
                >
                    <ListNotices
                        notices={notices}
                        count_notice={count_notice}
                        is_fetching_notice={is_fetching_notice}
                        //
                        MarkAllAsRead={MarkAllAsRead}
                        handleClickNoticeItem={onClickNoticeItem}
                        getMoreNotice={onGetMoreNotice}
                    />
                </div>
            </div>
        </CloseDiv>
    );
}

export default HeaderNotice;
