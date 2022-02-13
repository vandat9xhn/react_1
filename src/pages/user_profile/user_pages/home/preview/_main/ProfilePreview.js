import React from 'react';
import PropTypes from 'prop-types';
import { ScrollSticky, useScrollSticky } from 'react-scroll-sticky';
//
import { HEADER_HEAD, IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { GetIdSlug } from '../../../../../../_some_function/GetIdSlug';
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
    const { calculateAgain, ref_main_elm, ref_sticky_elm, ref_fake_elm } =
        !IS_MOBILE
            ? useScrollSticky({
                  sticky_location: /\/profile\/\d+$/,
                  header_head: HEADER_HEAD + 70,
                  detectInnerWidthIsOk: detectInnerWidthIsOk,
              })
            : {};

    // -----

    //
    function detectInnerWidthIsOk() {
        return innerWidth > 900;
    }

    //
    function handleReady() {
        if (IS_MOBILE) {
            return;
        }

        calculateAgain();
    }

    //
    return (
        <div className="ProfilePreview h-100per">
            <ScrollSticky
                ref_main_elm={ref_main_elm}
                ref_fake_elm={ref_fake_elm}
                ref_sticky_elm={ref_sticky_elm}
                //
                class_main="h-100per"
                class_sticky="pos-sticky"
            >
                <div className="ProfilePreview_preview padding-bottom-10px">
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
            </ScrollSticky>
        </div>
    );
}

export default ProfilePreview;
