import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './ProfileInfoCover.scss';

//
ProfileInfoCover.propTypes = {};

//
function ProfileInfoCover({ cover, openCoverPicture }) {
    //
    return (
        <div className="ProfileInfoCover pos-rel">
            {/* <div className="ProfileInfoCover_bg pos-abs-0 wh-100">
                <div
                    className="ProfileInfoCover_bg_contain pos-rel wh-100 overflow-hidden"
                    style={{ backgroundImage: `url(${cover})` }}
                ></div>
            </div> */}

            <div className="ProfileInfoCover_contain margin-auto pos-rel">
                <Link className="pos-abs-0 wh-100" to="/posts/1">
                    <img
                        className="ProfileInfoCover_img wh-100 object-fit-cover"
                        src={cover}
                        alt=""
                        onClick={openCoverPicture}
                    />
                </Link>
            </div>

            <div></div>
        </div>
    );
}

export default ProfileInfoCover;
