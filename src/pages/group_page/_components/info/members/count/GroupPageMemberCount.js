import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../_some_function/UnitNumber';
// 
import IconPrivate from '../../../../../../_icons_svg/icon_private/IconPrivate';

//
GroupPageMemberCount.propTypes = {};

//
function GroupPageMemberCount({ privacy, count_member }) {
    //
    return (
        <div className="GroupPageMemberCount text-secondary">
            <div className="display-flex align-items-center">
                <div className="display-flex align-items-center">
                    <IconPrivate />

                    <div className="margin-left-5px">{privacy} group</div>
                </div>

                <div className="margin-x-5px">·</div>

                <div>
                    {UnitNumber(count_member)} member
                    {count_member >= 2 ? 's' : ''}
                </div>
            </div>
        </div>
    );
}

export default GroupPageMemberCount;
