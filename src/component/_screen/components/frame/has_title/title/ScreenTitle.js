import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconFav from '../../../../../../_icons_svg/_icon_fav/IconFav';
//
import './ScreenTitle.scss';

//
ScreenTitle.propTypes = {
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    show_screen_title: PropTypes.bool,
    handleDownload: PropTypes.func,
    closeScreenTitle: PropTypes.func,
};

//
function ScreenTitle({
    url,
    show_screen_title,
    handleDownload,
    closeScreenTitle,
}) {
    //
    return (
        <div className="ScreenTitle">
            <div className="ScreenTitle_row display-flex align-items-center">
                <div className="padding-4px">
                    <Link to="/new-feed">
                        <IconFav size_icon="4rem" />
                    </Link>
                </div>

                {show_screen_title ? (
                    <div className="ScreenTitle_close padding-4px">
                        <div
                            className="ScreenTitle__icon-arrow display-flex-center brs-50 cursor-pointer hv-opacity"
                            onClick={closeScreenTitle}
                            title="Close"
                        >
                            <IconsArrow size_icon="1.5rem" y={400} />
                        </div>
                    </div>
                ) : null}

                <div className="ScreenTitle_download padding-4px">
                    <a
                        className="normal-text"
                        href={url}
                        download
                        onClick={handleDownload}
                    >
                        <div
                            className="ScreenTitle__icon-arrow display-flex-center brs-50 hv-opacity"
                            title="Download"
                        >
                            <IconsArrow x={600} size_icon="1.5rem" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ScreenTitle;
