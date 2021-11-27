import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../../_hooks/useBool';
//
import IconSetting from '../../../../../../../../_icons_svg/icon_setting/IconSetting';
//
import CloseDiv from '../../../../../../../../component/some_div/close_div/CloseDiv';
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
    const ref_btn_setting = useRef(null);

    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // -----

    //
    function makeDivHidden() {
        is_true && setIsTrue(false);
    }

    //
    return (
        <div className="GroupLayoutLeftHead padding-y-10px border-bottom-blur">
            <div className="pos-rel">
                <div className="GroupLayoutLeftHead_head flex-between-center margin-bottom-6px padding-x-16px">
                    <h1 className="GroupLayoutLeftHead_title font-24px font-700">Groups</h1>

                    <div
                        ref={ref_btn_setting}
                        className={`btn-icon-36px btn-active cursor-pointer ${
                            is_true
                                ? 'bg-fb-active nav-active'
                                : 'bg-fb hv-bg-hv'
                        }`}
                        onClick={toggleBool}
                    >
                        <IconSetting size_icon="24px" />
                    </div>
                </div>

                {is_true ? (
                    <div className="pos-abs top-100per left-0 z-index-1 w-100per padding-x-8px">
                        <CloseDiv
                            makeDivHidden={makeDivHidden}
                            refs_target={[ref_btn_setting]}
                        >
                            <GroupSettings />
                        </CloseDiv>
                    </div>
                ) : null}
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
