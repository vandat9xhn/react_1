import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
//
import './NextPrevDiv.scss';

//
NextPrevDiv.propTypes = {
    is_btn_circle: PropTypes.bool,
    is_has_next: PropTypes.bool,
    is_has_prev: PropTypes.bool,

    handleNext: PropTypes.func,
    handlePrev: PropTypes.func,
};

NextPrevDiv.defaultProps = {
    is_btn_circle: false,
    is_has_next: true,
    is_has_prev: true,
};

//
function NextPrevDiv({
    is_btn_circle,
    is_has_next,
    is_has_prev,
    handleNext,
    handlePrev,
}) {
    return (
        <div className="NextPrevDiv">
            <div className="NextPrevDiv_next">
                <div
                    className={`bg-ccc cursor-pointer hv-opacity ${
                        is_btn_circle
                            ? 'NextPrevDiv_icon_circle display-flex-center brs-50'
                            : 'NextPrevDiv_icon NextPrevDiv_next_icon'
                    }
                    ${is_has_next ? '' : 'NextPrevDiv_btn_none'}
                    `}
                    onClick={handleNext}
                    title="next"
                >
                    <IconsArrow x={200} size_icon="1.25rem" />
                </div>
            </div>

            <div className="NextPrevDiv_prev">
                <div
                    className={`bg-ccc cursor-pointer hv-opacity ${
                        is_btn_circle
                            ? 'NextPrevDiv_icon_circle display-flex-center brs-50'
                            : 'NextPrevDiv_icon NextPrevDiv_prev_icon'
                    }
                    ${is_has_prev ? '' : 'NextPrevDiv_btn_none'}
                    `}
                    onClick={handlePrev}
                    title="previous"
                >
                    <IconsArrow x={400} size_icon="1.25rem" />
                </div>
            </div>
        </div>
    );
}

export default NextPrevDiv;
