import React from 'react';
import PropTypes from 'prop-types';
//
import { useCountUp } from '../../../../../../_hooks/useCountUp';
//
import GroupLayout from '../../../_components/_layout/_main/GroupLayout';
import GroupNoticeNew from '../new/_main/GroupNoticeNew';
import GroupNoticeEarlier from '../earlier/_main/GroupNoticeEarlier';
//
import './GroupNotice.scss';

//
GroupNotice.propTypes = {};

//
function GroupNotice(props) {
    //
    const { count, countUp } = useCountUp();

    //
    return (
        <div className="GroupNotice">
            <GroupLayout>
                <div className="GroupNotice_right">
                    <div className="margin-auto w-500px">
                        <div>
                            <GroupNoticeNew handleGetNewDone={countUp} />
                        </div>

                        {count >= 1 ? (
                            <div className="margin-top-20px">
                                <GroupNoticeEarlier />
                            </div>
                        ) : null}
                    </div>
                </div>
            </GroupLayout>
        </div>
    );
}

export default GroupNotice;
