import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../_hooks/useBool';
//
import IconSetting from '../../../../_icons_svg/icon_setting/IconSetting';
//
import CloseDiv from '../../../../component/some_div/close_div/CloseDiv';
import FriendsSettings from '../settings/_main/FriendsSettings';
//
import './FriendsLeftHeadHome.scss';

//
FriendsLeftHeadHome.propTypes = {};

//
function FriendsLeftHeadHome(props) {
    //
    const ref_btn_elm = useRef(null);

    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // ----

    //
    function makeDivHidden() {
        is_true && setIsTrue(false);
    }

    //
    return (
        <div className="FriendsLeftHeadHome pos-rel padding-top-10px padding-bottom-12px">
            <div className="pos-rel padding-x-16px">
                <div className="flex-between-center">
                    <h1 className="FriendsLeftHeadHome_title font-24px">
                        Friends
                    </h1>

                    <div
                        ref={ref_btn_elm}
                        className={`btn-icon-36px cursor-pointer ${
                            is_true
                                ? 'bg-fb-active nav-active'
                                : 'bg-ccc hv-bg-hv'
                        }`}
                        onClick={toggleBool}
                    >
                        <IconSetting size_icon="23px" />
                    </div>
                </div>

                {is_true ? (
                    <CloseDiv
                        refs_target={[ref_btn_elm]}
                        makeDivHidden={makeDivHidden}
                    >
                        <div className="pos-abs left-0 top-100per z-index-1 padding-x-8px">
                            <FriendsSettings />
                        </div>
                    </CloseDiv>
                ) : null}
            </div>
        </div>
    );
}

export default FriendsLeftHeadHome;
