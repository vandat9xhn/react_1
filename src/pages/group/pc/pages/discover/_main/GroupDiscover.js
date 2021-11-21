import React from 'react';
import PropTypes from 'prop-types';
//
import GroupLayout from '../../../_components/_layout/_main/GroupLayout';
import GroupDiscoverRight from '../right/_main/GroupDiscoverRight';
// 
import './GroupDiscover.scss';

//
GroupDiscover.propTypes = {};

//
function GroupDiscover(props) {
    //
    return (
        <div className="GroupDiscover">
            <GroupLayout>
                <div className="GroupDiscover_right padding-top-20px">
                    <GroupDiscoverRight />
                </div>
            </GroupLayout>
        </div>
    );
}

export default GroupDiscover;
