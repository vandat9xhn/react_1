import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../_some_function/UnitNumber';
//
import IconPrivate from '../../../../../../_icons_svg/icon_private/IconPrivate';
import IconPublic from '../../../../../../_icons_svg/icon_public/IconPublic';
//
import './GroupPageMemberCount.scss';

//
GroupPageMemberCount.propTypes = {};

//
function GroupPageMemberCount({ privacy, member_count }) {
    //
    return (
        <div className="GroupPageMemberCount text-secondary">
            <div className="GroupPageMemberCount_row display-flex align-items-center">
                <div className="display-flex align-items-center">
                    {privacy.toUpperCase() == 'PRIVATE' ? (
                        <IconPrivate stroke="currentColor" />
                    ) : (
                        <IconPublic stroke="currentColor" />
                    )}

                    <div className="margin-left-5px">{privacy} group</div>
                </div>

                <div className="margin-x-5px">·</div>

                <div>
                    {UnitNumber(member_count)} member
                    {member_count >= 2 ? 's' : ''}
                </div>
            </div>
        </div>
    );
}

export default GroupPageMemberCount;
