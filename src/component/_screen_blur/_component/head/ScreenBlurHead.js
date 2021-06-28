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
function ScreenBlurHead({ title, closeScreenBlur }) {
    // 
    function onCloseScreenBlur() {
        closeScreenBlur()
    }

    //
    return (
        <div className="ScreenBlurHead padding-8px text-primary">
            <div className="ScreenBlurHead_row display-flex space-between">
                <h2 className="ScreenBlurHead_title margin-0">
                    {title}
                </h2>

                <div
                    className="close-icon-small brs-50 hv-opacity cursor-pointer"
                    onClick={onCloseScreenBlur}
                >
                    <IconsArrow y={400} />
                </div>
            </div>
        </div>
    );
}

export default ScreenBlurHead;
