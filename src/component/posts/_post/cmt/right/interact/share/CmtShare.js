import React from 'react';
import PropTypes from 'prop-types';
//
import PortalAbsCloseDiv from '../../../../../../portal/absolute_close_div/PortalAbsCloseDiv';
//
import './CmtShare.scss';

//
CmtShare.propTypes = {};

//
function CmtShare({ class_scroll_elm, ref_share, closeShare }) {
    //
    const { bottom, left } = ref_share.current.getBoundingClientRect();

    //
    return (
        <PortalAbsCloseDiv
            class_scroll_elm={class_scroll_elm}
            pos_left={left + window.scrollX}
            pos_top={bottom + window.scrollY}
            refs_target={[ref_share]}
            makeDivHidden={closeShare}
        >
            <div className="CmtShare cmt-interact-portal">
                <div className="CmtShare_contain cmt-interact-portal-contain">
                    <div className="CmtShare_item">Send in Messenger</div>

                    <div className="CmtShare_item">Send in WhatsApp</div>

                    <div className="CmtShare_item">Send in Twitter</div>

                    <div className="CmtShare_item">Copy link</div>
                </div>
            </div>
        </PortalAbsCloseDiv>
    );
}

export default CmtShare;
