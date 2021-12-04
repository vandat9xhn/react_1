import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { GetIdSlug } from '../../../../../../_some_function/GetIdSlug';
//
import { useStickyAuto } from '../../../../../../_hooks/useStickyAuto';
//
import ProfilePrPic from '../pic/_main/ProfilePrPic';
import ProfilePrFriend from '../friend/_main/ProfilePrFriend';
import ProfilePrIntro from '../about/_main/ProfilePrAbout';
//
import './ProfilePreview.scss';

//
ProfilePreview.propTypes = {};

//
function ProfilePreview(props) {
    //
    const id = GetIdSlug();

    //
    const { calculateAgain, ref_main_elm, ref_preview_elm, ref_fake_elm } =
        !IS_MOBILE
            ? useStickyAuto({
                  sticky_location: /\/profile\/\d+$/,
              })
            : {};

    //
    function handleReady() {
        if (IS_MOBILE) {
            return;
        }

        calculateAgain();
    }

    //
    return (
        <div ref={ref_main_elm} className="ProfilePreview h-100per">
            <div ref={ref_fake_elm}></div>

            <div
                ref={ref_preview_elm}
                className="pos-sticky padding-bottom-10px"
            >
                <div className="ProfilePreview_item">
                    <ProfilePrIntro id={id} handleReady={handleReady} />
                </div>

                <div className="ProfilePreview_pic ProfilePreview_item">
                    <ProfilePrPic id={id} handleReady={handleReady} />
                </div>

                <div className="ProfilePreview_item">
                    <ProfilePrFriend id={id} handleReady={handleReady} />
                </div>
            </div>
        </div>
    );
}

export default ProfilePreview;
