import React from 'react';
import PropTypes from 'prop-types';
//
import GroupLayout from '../../../_components/_layout/_main/GroupLayout';
// import GroupNoticeRight from '../right/_main/GroupNoticeRight';
//
import './GroupNotice.scss';

//
GroupNotice.propTypes = {};

//
function GroupNotice(props) {
    //
    return (
        <div className="GroupNotice">
            <GroupLayout>
                <div className="GroupNotice_right padding-top-20px">
                    {/* <GroupNoticeRight /> */}
                </div>
            </GroupLayout>
        </div>
    );
}

export default GroupNotice;
