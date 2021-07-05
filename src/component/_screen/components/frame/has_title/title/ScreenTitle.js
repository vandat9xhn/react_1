import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconFav from '../../../../../../_icons_svg/_icon_fav/IconFav';
//
import './ScreenTitle.scss';

//
ScreenTitle.propTypes = {
    closeScreenTitle: PropTypes.func,
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    handleDownload: PropTypes.func,
};

//
function ScreenTitle({ closeScreenTitle, url, handleDownload }) {
    //
    return (
        <div className="ScreenTitle">
            <div className="ScreenTitle_row display-flex align-items-center">
                <div>
                    <IconFav size_icon="4rem" />
                </div>

                <div className="ScreenTitle_close">
                    <div
                        className="ScreenTitle__icon-arrow display-flex-center brs-50 cursor-pointer hv-opacity"
                        onClick={closeScreenTitle}
                        title="Close"
                    >
                        <IconsArrow size_icon="1.5rem" y={400} />
                    </div>
                </div>

                <div className="ScreenTitle_download">
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
