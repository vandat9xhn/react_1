import React from 'react';
import PropTypes from 'prop-types';
//
import IconSetting from '../../../../../../../../_icons_svg/icon_setting/IconSetting';
//
import FbSearchInput from '../../../../../../../../component/fb_search/input/_main/FbSearchInput';
// 
import './GroupLayoutLeftHead.scss';

//
GroupLayoutLeftHead.propTypes = {};

//
function GroupLayoutLeftHead(props) {
    //
    return (
        <div className="GroupLayoutLeftHead padding-y-10px border-bottom-blur">
            <div className="flex-between-center margin-bottom-6px padding-x-16px">
                <h1 className="font-24px font-700">Groups</h1>

                <div className="btn-icon-36px btn-active bg-fb cursor-pointer hv-bg-hv">
                    <IconSetting size_icon="24px" />
                </div>
            </div>

            <div className="GroupLayoutLeftHead_search">
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
