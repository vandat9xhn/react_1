import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
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
        closeScreenBlur();
    }

    //
    return (
        <div className="ScreenBlurHead text-primary border-bottom-blur">
            <div className="ScreenBlurHead_row flex-between-center padding-left-16px padding-right-12px">
                <h2 className="ScreenBlurHead_title font-700 font-20px">
                    {title}
                </h2>

                <div
                    className="ScreenBlurHead_close display-flex-center brs-50 bg-ccc cursor-pointer hv-bg-hv"
                    onClick={onCloseScreenBlur}
                >
                    <IconsArrow y={400} size_icon="24px" />
                </div>
            </div>
        </div>
    );
}

export default ScreenBlurHead;
