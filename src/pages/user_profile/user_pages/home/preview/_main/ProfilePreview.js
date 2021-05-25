import React from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../_some_function/GetIdSlug';
//
import ProfilePrPic from '../pic/_main/ProfilePrPic';
import ProfilePrFriend from '../friend/_main/ProfilePrFriend';
import ProfilePrIntro from '../about/_main/ProfilePrAbout';
//
import './ProfilePreview.scss';

//
ProfilePreview.propTypes = {
};

//
function ProfilePreview(props) {
    //
    const id = GetIdSlug();

    //
    return (
        <div className="ProfilePreview">
            <div className="ProfilePreview_item">
                <ProfilePrIntro id={id}/>
            </div>

            <div className="ProfilePreview_pic ProfilePreview_item">
                <ProfilePrPic id={id} />
            </div>

            <div className="ProfilePreview_item">
                <ProfilePrFriend id={id} />
            </div>
        </div>
    );
}

export default ProfilePreview;
