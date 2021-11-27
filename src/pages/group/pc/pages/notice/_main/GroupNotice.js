import React from 'react';
import PropTypes from 'prop-types';
//
import { useCountUp } from '../../../../../../_hooks/useCountUp';
//
import GroupLayout from '../../../_components/_layout/_main/GroupLayout';
import GroupNoticeRight from '../right/_main/GroupNoticeRight';
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
                        <GroupNoticeRight />
                    </div>
                </div>
            </GroupLayout>
        </div>
    );
}

export default GroupNotice;
