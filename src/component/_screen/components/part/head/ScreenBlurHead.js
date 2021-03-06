import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ScreenBlurHead.scss';

//
ScreenBlurHead.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    is_center: PropTypes.bool,
    use_own_title: PropTypes.bool,
    closeScreenBlur: PropTypes.func,
};

ScreenBlurHead.defaultProps = {
    is_center: false,
    use_own_title: false,
};

//
function ScreenBlurHead({ title, is_center, use_own_title, closeScreenBlur }) {
    //
    function onCloseScreenBlur() {
        closeScreenBlur();
    }

    //
    return (
        <div className="ScreenBlurHead pos-rel border-bottom-blur text-primary">
            <div
                className={`ScreenBlurHead_row padding-left-16px padding-right-12px ${
                    is_center ? 'display-flex-center' : 'flex-between-center'
                }`}
            >
                {use_own_title ? (
                    title
                ) : (
                    <h2 className="ScreenBlurHead_title font-700 font-20px">
                        {title}
                    </h2>
                )}

                <div
                    className={`${
                        is_center ? 'pos-abs right-0 padding-right-16px' : ''
                    }`}
                >
                    <div
                        className="ScreenBlurHead_close display-flex-center brs-50 bg-ccc cursor-pointer hv-bg-hv"
                        onClick={onCloseScreenBlur}
                    >
                        <IconsArrow y={400} size_icon="24px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenBlurHead;
