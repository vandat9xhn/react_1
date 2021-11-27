import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import GroupLayoutLeftHead from '../../../../pc/_components/_layout/left/head/_main/GroupLayoutLeftHead';
import GroupLayoutLeftNav from '../../../../pc/_components/_layout/left/nav/GroupLayoutLeftNav';
import GroupLeftJoined from '../../../../pc/_components/_layout/left/joined/_main/GroupLeftJoined';
import GroupLeftManage from '../../../../pc/_components/_layout/left/manage/_main/GroupLeftManage';
//
import './GroupHomeMb.scss';

//
GroupHomeMb.propTypes = {};

//
function GroupHomeMb(props) {
    //
    if (!IS_MOBILE) {
        return <Redirect to="/group/feed" />;
    }

    //
    return (
        <div className="GroupHomeMb bg-primary">
            <div>
                <GroupLayoutLeftHead />
            </div>

            <div>
                <GroupLayoutLeftNav />
            </div>

            <div>
                <GroupLeftManage ref_scroll={{ current: null }} />
            </div>

            <div>
                <GroupLeftJoined ref_scroll={{ current: null }} />
            </div>
        </div>
    );
}

export default GroupHomeMb;
