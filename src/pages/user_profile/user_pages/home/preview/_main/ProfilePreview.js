import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useStickyAuto } from '../../../../../../_hooks/useStickyAuto';
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
    const ref_main_elm = useRef(null);
    const ref_fake_elm = useRef(null);
    const ref_preview_elm = useRef(null);

    const count_ready = useRef(0);

    //
    const { handleStartStickyAuto } = useStickyAuto({
        ref_main_elm: ref_main_elm,
        ref_fake_elm: ref_fake_elm,
        ref_preview_elm: ref_preview_elm,
    });

    //
    function handleReady() {
        count_ready.current += 1;

        if ((count_ready.current == 3)) {
            handleStartStickyAuto();
        }
    }

    //
    return (
        <div ref={ref_main_elm} className="ProfilePreview h-100per">
            <div ref={ref_fake_elm}></div>

            <div ref={ref_preview_elm} className={`position-sticky`}>
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
