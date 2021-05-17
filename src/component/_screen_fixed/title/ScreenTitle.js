import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
import IconFav from '../../../_icons_svg/_icon_fav/IconFav';
// 
import './ScreenTitle.scss';

// 
ScreenTitle.propTypes = {
    closeScreenTitle: PropTypes.func,
    url: PropTypes.string,
    handleDownload: PropTypes.func,
};

// 
function ScreenTitle(props) {
    const {closeScreenTitle, url, handleDownload} = props;

    // 
    return (
        <div className="ScreenTitle">
            <div className="ScreenTitle_row">
                <div>
                    <IconFav size_icon="3rem" />
                </div>

                <div className="ScreenTitle_close">
                    <div
                        className="ScreenTitle__icon-arrow brs-50"
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
                            className="ScreenTitle__icon-arrow brs-50"
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
