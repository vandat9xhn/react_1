import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { useStickyAuto } from '../../../../../../_hooks/useStickyAuto';
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import GroupPageDiscussAbout from '../about/_main/GroupPageDiscussAbout';
//
import './GroupPageDiscussRightCommon.scss';

//
GroupPageDiscussRight.propTypes = {};

//
function GroupPageDiscussRight(props) {
    //
    const { calculateAgain, ref_main_elm, ref_preview_elm, ref_fake_elm } =
        !IS_MOBILE
            ? useStickyAuto({
                  sticky_location: /\/group\/\d+\/discuss$/,
              })
            : {};

    const forceUpdate = useForceUpdate()

    // ------

    //
    function handleReady() {
        if (IS_MOBILE) {
            return;
        }

        forceUpdate()

        setTimeout(() => {
            calculateAgain();
        }, 0);
    }

    //
    return (
        <div ref={ref_main_elm} className="GroupPageDiscussRight h-100per">
            <div ref={ref_fake_elm}></div>

            <div ref={ref_preview_elm} className="pos-sticky padding-bottom-10px">
                <div className="margin-bottom-15px">
                    <GroupPageDiscussAbout handleReady={handleReady} />
                </div>

                <div className="margin-bottom-15px h-250px bg-primary"></div>

                <div className="h-250px bg-primary"></div>
            </div>
        </div>
    );
}

export default GroupPageDiscussRight;
