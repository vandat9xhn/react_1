import React from 'react';
import PropTypes from 'prop-types';
//
import { getTimeAndUnit } from '../../../../../../_some_function/UnitTime';
//
import GroupPageAboutPart from '../../../../_components/about_part/GroupPageAboutPart';
//

//
GPAbActivity.propTypes = {};

//
function GPAbActivity({
    post_day_count,
    post_month_count,

    member_count,
    member_week_count,

    created_time,
}) {
    //
    const { time, unit } = getTimeAndUnit({ c_time: created_time });

    //
    return (
        <div className="GPAbActivity gr-page-about-part">
            <h2 className="gr-page-about-title">Activity</h2>

            <hr className="gr-page-hr" />

            <div>
                <GroupPageAboutPart
                    title={`${post_day_count || 'No'} new post${
                        post_day_count == 1 ? '' : 's'
                    } today`}
                    info={`${post_month_count || 'No'} in the last month`}
                />
            </div>

            <div>
                <GroupPageAboutPart
                    title={`${member_count} total member${
                        member_count >= 2 ? 's' : ''
                    } `}
                    info={`+ ${member_week_count} in the last week`}
                />
            </div>

            <div>
                <GroupPageAboutPart
                    title={`Created on ${time} ${unit}${
                        time >= 2 ? 's' : ''
                    } ago`}
                />
            </div>
        </div>
    );
}

export default GPAbActivity;
