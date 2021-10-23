import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import Actions from '../../../../../../actions/_main/Actions';
//
import './CmtAward.scss';
import { useBool } from '../../../../../../../_hooks/useBool';

//
CmtAward.propTypes = {};

//
function CmtAward({ sendAward }) {
    //
    const [award_ix, setAwardIx] = useState(-1);
    const [award_arr, setAwardArr] = useState([
        {
            name: 'Insightful',
        },
        {
            name: 'Uplifting',
        },
        {
            name: 'Informative',
        },
        {
            name: 'Fun',
        },
        {
            name: 'Relevant',
        },
        {
            name: 'Positive vibes',
        },
    ]);

    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // ----

    //
    function onSendAward() {
        setIsTrue(false);
        sendAward(award_arr[award_ix]);
    }

    //
    return (
        <Actions
            title_action={
                <div className="CmtInteract_award CmtInteract_item">Award</div>
            }
            is_show={is_true}
            toggleShow={toggleBool}
        >
            <div className="CmtAward cmt-interact-portal">
                <div className="CmtAward_contain">
                    <div className="padding-10px font-20px font-700">
                        Awards
                    </div>

                    <div className="display-flex flex-wrap">
                        {award_arr.map((item, ix) => (
                            <div key={ix} className="CmtAward_item padding-5px">
                                <div
                                    className={`CmtAward_item_contain display-flex-center brs-8px cursor-pointer ${
                                        ix == award_ix
                                            ? 'bg-fb-active'
                                            : 'hv-bg-fb'
                                    }`}
                                    onClick={() => setAwardIx(ix)}
                                >
                                    <div className="font-600">{item.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="padding-10px">
                        <button
                            className={`btn btn-active w-100per padding-y-7px brs-6px font-600 ${
                                award_ix >= 0
                                    ? 'bg-blue text-white cursor-pointer'
                                    : 'bg-ccc text-smoke'
                            }`}
                            type="button"
                            disabled={award_ix < 0}
                            onClick={onSendAward}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </Actions>
    );
}

export default CmtAward;
