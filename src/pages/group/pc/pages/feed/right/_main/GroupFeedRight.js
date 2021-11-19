import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import { useStickyAuto } from '../../../../../../../_hooks/useStickyAuto';
//
import GroupFeedSuggested from '../suggested/GroupFeedSuggested';

//
GroupFeedRight.propTypes = {};

//
function GroupFeedRight(props) {
    //
    const { calculateAgain, ref_main_elm, ref_preview_elm, ref_fake_elm } =
        useStickyAuto({
            sticky_location: /\/group\/feed$/,
        });

    //
    function handleReady() {
        if (IS_MOBILE) {
            return;
        }

        // count_ready.current += 1;

        // if (count_ready.current == 1) {
        calculateAgain();
        // }
    }

    //
    return (
        <div ref={ref_main_elm} className="GroupFeedRight h-100per">
            <div ref={ref_fake_elm}></div>

            <div ref={ref_preview_elm} className="pos-sticky">
                <div className="GroupFeedRight_suggested">
                    <GroupFeedSuggested handleReady={handleReady} />
                </div>
            </div>
        </div>
    );
}

export default GroupFeedRight;
