import React from 'react';
import PropTypes from 'prop-types';
//
import HasLinkOrNot from '../../../link/has_link_or_not/HasLinkOrNot';
//
import './ProfileLayoutCover.scss';

//
ProfileLayoutCover.propTypes = {};

//
function ProfileLayoutCover({ cover, link_to, children, openCoverPicture }) {
    //
    return (
        <div className="ProfileLayoutCover pos-rel">
            <div className="ProfileLayoutCover_bg pos-abs-0 top-0 x-center">
                <div
                    className="ProfileLayoutCover_bg_contain wh-100"
                    style={{ backgroundImage: `url(${cover})` }}
                ></div>
            </div>

            <div className="ProfileLayoutCover_contain margin-auto pos-rel">
                <HasLinkOrNot
                    class_link="pos-abs-0 wh-100"
                    has_link={!!link_to}
                    link_to={link_to}
                >
                    <img
                        className="ProfileLayoutCover_img wh-100 object-fit-cover"
                        src={cover}
                        alt=""
                        onClick={openCoverPicture}
                    />
                </HasLinkOrNot>

                <div>{children}</div>
            </div>
        </div>
    );
}

export default ProfileLayoutCover;
