import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutHomePreview from '../../../../../../../component/profile_layout/home_preview/ProfileLayoutHomePreview';
import SkeletonDiv from '../../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import FPHomeAboutInfo from '../info/FPHomeAboutInfo';
import FPHomeAboutLike from '../like/FPHomeAboutLike';
import FPHomeAboutFollow from '../follow/FPHomeAboutFollow';
import FPHomeAboutSite from '../site/FPHomeAboutSite';
import FPHomeAboutPhone from '../phone/FPHomeAboutPhone';
import FPHomeAboutChat from '../chat/FPHomeAboutChat';
//
import './FPHomeAbout.scss';

//
function FPHomeAboutSkeleton({}) {
    return <SkeletonDiv num={6} />;
}

//
FPHomeAbout.propTypes = {};

//
function FPHomeAbout({
    page_id,
    is_fetching,

    info_obj,
    like_obj,
    follow_obj,
    site_obj,
    phone_obj,
}) {
    //
    return (
        <ProfileLayoutHomePreview
            title="About"
            link_to={`/page/${page_id}/about`}
            is_fetching={is_fetching}
            ProfilePrSkeleton={FPHomeAboutSkeleton}
        >
            <div className="FPHomeAbout">
                <div className="FPHomeAbout_item">
                    <FPHomeAboutInfo info_obj={info_obj} />
                </div>

                <div className="FPHomeAbout_item">
                    <FPHomeAboutLike like_obj={like_obj} />
                </div>

                <div className="FPHomeAbout_item">
                    <FPHomeAboutFollow follow_obj={follow_obj} />
                </div>

                <div className="FPHomeAbout_item">
                    <FPHomeAboutSite site_obj={site_obj} />
                </div>

                <div className="FPHomeAbout_item">
                    <FPHomeAboutPhone phone_obj={phone_obj} />
                </div>

                <div className="FPHomeAbout_item">
                    <FPHomeAboutChat page_id={page_id} />
                </div>
            </div>
        </ProfileLayoutHomePreview>
    );
}

export default FPHomeAbout;
