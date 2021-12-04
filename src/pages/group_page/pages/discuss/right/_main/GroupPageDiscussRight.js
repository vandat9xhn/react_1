import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { useStickyAuto } from '../../../../../../_hooks/useStickyAuto';
//
import './GroupPageDiscussRightCommon.scss';
// 
import GroupPageDiscussAbout from '../about/_main/GroupPageDiscussAbout';
import GPDAboutTopics from '../topics/_main/GPDTopics';
import GPDMedia from '../media/_main/GPDMedia';
//
import './GroupPageDiscussRight.scss';

//
GroupPageDiscussRight.propTypes = {};

//
function GroupPageDiscussRight({ group_id, is_admin }) {
    //
    const { calculateAgain, ref_main_elm, ref_preview_elm, ref_fake_elm } =
        !IS_MOBILE
            ? useStickyAuto({
                  sticky_location: /\/group\/\d+\/discuss$/,
              })
            : {};

    // ------

    //
    function handleReady() {
        if (IS_MOBILE) {
            return;
        }

        setTimeout(() => {
            calculateAgain();
        }, 0);
    }

    //
    return (
        <div ref={ref_main_elm} className="GroupPageDiscussRight h-100per">
            <div ref={ref_fake_elm}></div>

            <div
                ref={ref_preview_elm}
                className="GroupPageDiscussRight_contain pos-sticky padding-bottom-10px"
            >
                <div className="margin-bottom-15px">
                    <GroupPageDiscussAbout
                        group_id={group_id}
                        handleReady={handleReady}
                    />
                </div>

                <div className="margin-bottom-15px">
                    <GPDAboutTopics
                        group_id={group_id}
                        is_admin={is_admin}
                        handleReady={handleReady}
                    />
                </div>

                <div>
                    <GPDMedia group_id={group_id} handleReady={handleReady} />
                </div>
            </div>
        </div>
    );
}

export default GroupPageDiscussRight;
