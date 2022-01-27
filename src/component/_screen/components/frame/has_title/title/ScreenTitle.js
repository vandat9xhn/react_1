import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconFav from '../../../../../../_icons_svg/_icon_fav/IconFav';
//
import Tooltip from '../../../../../tooltip/_main/Tooltip';
//
import './ScreenTitle.scss';

//
ScreenTitle.propTypes = {
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    show_screen_title: PropTypes.bool,
    tooltipCloseElm: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    z_index_tooltip: PropTypes.number,

    handleDownload: PropTypes.func,
    closeScreenTitle: PropTypes.func,
};

ScreenTitle.defaultProps = {
    tooltipCloseElm: 'Close',
};

//
function ScreenTitle({
    url,
    show_screen_title,
    tooltipCloseElm,
    z_index_tooltip,

    handleDownload,
    closeScreenTitle,
}) {
    //
    const ref_close_elm = useRef(null);

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
                    <div
                        ref={ref_close_elm}
                        className="ScreenTitle_close padding-4px"
                    >
                        <div
                            className="ScreenTitle__icon-arrow display-flex-center brs-50 cursor-pointer hv-opacity"
                            onClick={closeScreenTitle}
                        >
                            <IconsArrow size_icon="1.5rem" y={400} />
                        </div>

                        <Tooltip
                            ref_elm={ref_close_elm}
                            z_index={z_index_tooltip}
                        >
                            {tooltipCloseElm}
                        </Tooltip>
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
