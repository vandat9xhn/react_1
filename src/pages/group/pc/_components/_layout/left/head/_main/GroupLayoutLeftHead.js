import React from 'react';
import PropTypes from 'prop-types';
//
import LeftBarTitleSettings from '../../../../../../../../component/side_bar/left/title_settings/LeftBarTitleSettings';
import FbSearchInput from '../../../../../../../../component/fb_search/input/_main/FbSearchInput';
//
import GroupSettings from '../../../../settings/_main/GroupSettings';
//
import './GroupLayoutLeftHead.scss';

//
GroupLayoutLeftHead.propTypes = {};

//
function GroupLayoutLeftHead(props) {
    //
    return (
        <div className="GroupLayoutLeftHead padding-bottom-16px">
            <div className="GroupLayoutLeftHead_settings">
                <LeftBarTitleSettings
                    title={'Groups'}
                    setting_elm={<GroupSettings />}
                />
            </div>

            <div className="GroupLayoutLeftHead_search left-bar-search">
                <FbSearchInput
                    placeholder="Search groups"
                    always_open={true}
                    class_input="PostInputSearch_input-36px"
                    use_back={false}
                    params_api={{ search_in: 'group' }}
                />
            </div>
        </div>
    );
}

export default GroupLayoutLeftHead;
