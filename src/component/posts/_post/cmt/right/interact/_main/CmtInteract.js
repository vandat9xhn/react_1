import React from 'react';
import PropTypes from 'prop-types';
//
import UnitTime from '../../../../../../../_some_function/UnitTime';
//
import Like from '../../../../../../like/_main/Like';
//
import './CmtInteractCommon.scss';
//
import CmtShare from '../share/CmtShare';
import CmtAward from '../award/CmtAward';
//
import './CmtInteract.scss';
import { IS_MOBILE } from '../../../../../../../_constant/Constant';

//
CmtInteract.propTypes = {};

//
function CmtInteract({
    user_reacted_ix,
    updated_time,
    class_scroll_elm,

    changeTypeLike,
    startReply,
    sendAward,
    openHistory,
}) {
    //
    return (
        <div className="CmtInteract padding-left-12px padding-top-3px line-12px font-12px text-secondary">
            <div className="display-flex align-items-center">
                <div className="CmtInteract_like CmtInteract_item display-flex-center cursor-pointer">
                    <Like
                        type_like={user_reacted_ix}
                        changeTypeLike={changeTypeLike}
                        icon_small={true}
                    />
                </div>

                <div className="CmtInteract_separate">.</div>

                <div
                    className="CmtInteract_reply CmtInteract_item"
                    onClick={startReply}
                >
                    Reply
                </div>

                <div className="CmtInteract_separate">.</div>

                {IS_MOBILE ? null : (
                    <React.Fragment>
                        <CmtAward
                            class_scroll_elm={class_scroll_elm}
                            sendAward={sendAward}
                        />

                        <div className="CmtInteract_separate">.</div>

                        <CmtShare class_scroll_elm={class_scroll_elm} />

                        <div className="CmtInteract_separate">.</div>
                    </React.Fragment>
                )}

                <div
                    className="CmtInteract_time"
                    title={new Date(updated_time).toLocaleString()}
                >
                    {UnitTime(
                        new Date().getTime() - new Date(updated_time).getTime()
                    )}
                </div>

                <div className="CmtInteract_separate">.</div>

                <div
                    className="cursor-pointer hv-underline"
                    onClick={openHistory}
                >
                    Edited
                </div>
            </div>
        </div>
    );
}

export default CmtInteract;
