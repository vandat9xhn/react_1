import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import UnitTime from '../../../../../../../_some_function/UnitTime';
//
import { useBool } from '../../../../../../../_hooks/useBool';
//
import Like from '../../../../../../like/_main/Like';
//
import './CmtInteractCommon.scss';
//
import CmtShare from '../share/CmtShare';
import CmtAward from '../award/CmtAward';
//
import './CmtInteract.scss';

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
    const ref_share = useRef(null);
    const ref_award = useRef(null);

    //
    const { is_true: show_share, toggleBool: toggleShare } = useBool();

    const { is_true: show_award, toggleBool: toggleAward } = useBool();

    // ---

    //
    function closeShare() {
        show_share && toggleShare();
    }

    //
    function closeAward() {
        show_award && toggleAward();
    }

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

                <div
                    ref={ref_award}
                    className="CmtInteract_award CmtInteract_item"
                    onClick={toggleAward}
                >
                    Award
                </div>

                <div className="CmtInteract_separate">.</div>

                <div
                    ref={ref_share}
                    className="CmtInteract_share CmtInteract_item"
                    onClick={toggleShare}
                >
                    Share
                </div>

                <div className="CmtInteract_separate">.</div>

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

            {show_share ? (
                <CmtShare
                    class_scroll_elm={class_scroll_elm}
                    ref_share={ref_share}
                    closeShare={closeShare}
                />
            ) : null}

            {show_award ? (
                <CmtAward
                    class_scroll_elm={class_scroll_elm}
                    ref_award={ref_award}
                    closeAward={closeAward}
                    sendAward={sendAward}
                />
            ) : null}
        </div>
    );
}

export default CmtInteract;
