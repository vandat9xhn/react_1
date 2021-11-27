import React from 'react';
import PropTypes from 'prop-types';
//
import { useCountUp } from '../../../../../../../_hooks/useCountUp';
//
import GroupNoticeNew from '../../new/_main/GroupNoticeNew';
import GroupNoticeEarlier from '../../earlier/_main/GroupNoticeEarlier';

// 
GroupNoticeRight.propTypes = {};

// 
function GroupNoticeRight(props) {
    //
    const { count, countUp } = useCountUp();

    //
    return (
        <div className="GroupNoticeRight">
            <div>
                <GroupNoticeNew handleGetNewDone={countUp} />
            </div>

            {count >= 1 ? (
                <div className="margin-top-20px">
                    <GroupNoticeEarlier />
                </div>
            ) : null}
        </div>
    );
}

export default GroupNoticeRight;
