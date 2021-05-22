import React from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../_some_function/GetIdSlug';
//
import ProfilePrCommon from '../_common/preview_common/ProfilePrCommon';
import ProfilePrIntroSkeleton from '../intro/skeleton/ProfilePrIntroSkeleton';

import ProfilePrPic from '../pic/_main/ProfilePrPic';
import ProfilePrFriend from '../friend/_main/ProfilePrFriend';
import ProfilePrIntro from '../intro/_main/ProfilePrIntro';
//
import './ProfilePreview.scss';

//
ProfilePreview.propTypes = {
    hobby: PropTypes.string,
    university: PropTypes.string,
    from: PropTypes.string,
    live_now: PropTypes.string,

    is_fetching: PropTypes.bool,
    onClickSk: PropTypes.func,
};

//
function ProfilePreview(props) {
    //
    const id = GetIdSlug();

    //
    const { hobby, university, from, live_now, is_fetching, onClickSk } = props;

    //
    return (
        <div className="ProfilePreview">
            <div className="ProfilePreview_item">
                <ProfilePrCommon
                    title="Intro"
                    sk="intro"
                    onClickSk={onClickSk}
                    is_fetching={is_fetching}
                    ProfileSkeleton={ProfilePrIntroSkeleton}
                >
                    <ProfilePrIntro
                        hobby={hobby}
                        university={university}
                        from={from}
                        live_now={live_now}
                    />
                </ProfilePrCommon>
            </div>

            <div className="ProfilePreview_pic ProfilePreview_item">
                <ProfilePrPic id={id} onClickSk={onClickSk} />
            </div>

            <div className="ProfilePreview_item">
                <ProfilePrFriend id={id} onClickSk={onClickSk} />
            </div>
        </div>
    );
}

export default ProfilePreview;
