import React from 'react';
import PropTypes from 'prop-types';
//
import { Link } from 'react-router-dom';
//
import OverlapPics from '../../../../../../component/overlap_pics/_main/OverlapPics';

//
GroupPageMemberPics.propTypes = {};

//
function GroupPageMemberPics({ group_id, member_arr, count_member }) {
    //
    return (
        <div className="GroupPageMemberPics">
            <Link to={`/group/${group_id}/members`}>
                <OverlapPics
                    pic_arr={member_arr}
                    has_more={member_arr < count_member}
                    // ItemComponent={ItemComponent}
                    // clickMore={clickMore}
                />
            </Link>
        </div>
    );
}

export default GroupPageMemberPics;
