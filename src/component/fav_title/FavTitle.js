import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconFav from '../../_icons_svg/_icon_fav/IconFav';
import IconsArrow from '../../_icons_svg/icons_arrow/IconsArrow';
// 
import './FavTitle.scss';

//
FavTitle.propTypes = {};

//
function FavTitle({ handleClose }) {
    //
    return (
        <div className="FavTitle">
            <div className="display-flex align-items-center">
                <div className="FavTitle_close">
                    <div
                        className="FavTitle_close_icon display-flex-center brs-50 cursor-pointer hv-opacity"
                        onClick={handleClose}
                    >
                        <IconsArrow y={400} size_icon="1.5rem" />
                    </div>
                </div>

                <div className="FavTitle_fav">
                    <Link to="/new-feed">
                        <div className="padding-4px">
                            <IconFav size_icon="3rem" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FavTitle;
