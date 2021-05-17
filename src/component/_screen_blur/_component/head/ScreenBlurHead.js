import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ScreenBlurHead.scss';

//
ScreenBlurHead.propTypes = {
    title: PropTypes.string,
    closeScreenBlur: PropTypes.func,
};

//
function ScreenBlurHead(props) {
    const {title, closeScreenBlur} = props;

    return (
        <div className="ScreenBlurHead_contain">
            <div className="ScreenBlurHead_row">
                <div className="ScreenBlurHead_title label-field">{title}</div>

                <div
                    className="close-icon-small brs-50 hv-opacity cursor-pointer"
                    onClick={closeScreenBlur}
                >
                    <IconsArrow y={400} />
                </div>
            </div>
        </div>
    );
}

export default ScreenBlurHead;
