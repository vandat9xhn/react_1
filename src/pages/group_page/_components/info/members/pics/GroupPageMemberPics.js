import React from 'react';
import PropTypes from 'prop-types';
//
import { Link } from 'react-router-dom';
//
import OverlapPics from '../../../../../../component/overlap_pics/_main/OverlapPics';
// 
import './GroupPageMemberPics.scss';

//
GroupPageMemberPics.propTypes = {};

//
function GroupPageMemberPics({ group_id, member_arr, member_count }) {
    //
    return (
        <div className="GroupPageMemberPics">
            <Link to={`/group/${group_id}/members`}>
                <OverlapPics
                    pic_arr={member_arr}
                    has_more={member_arr < member_count}
                    // ItemComponent={ItemComponent}
                    // clickMore={clickMore}
                />
            </Link>
        </div>
    );
}

export default GroupPageMemberPics;
