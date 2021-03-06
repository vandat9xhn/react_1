import React from 'react';
import PropTypes from 'prop-types';
//
import BtnNexPrev from '../../button/next_prev/BtnNexPrev';
//
import './NextPrevDiv.scss';
import './NextPrevDivScreen.scss';

//
NextPrevDiv.propTypes = {
    is_btn_circle: PropTypes.bool,
    is_has_next: PropTypes.bool,
    is_has_prev: PropTypes.bool,
    size_icon: PropTypes.string,

    handleNext: PropTypes.func,
    handlePrev: PropTypes.func,
};

NextPrevDiv.defaultProps = {
    is_btn_circle: false,
    is_has_next: true,
    is_has_prev: true,
    size_icon: '1.25rem',
};

//
function NextPrevDiv({
    is_btn_circle,
    is_has_next,
    is_has_prev,
    size_icon,
    
    handleNext,
    handlePrev,
}) {
    return (
        <div className="NextPrevDiv">
            <div className="NextPrevDiv_next pos-abs right-0 y-center">
                <BtnNexPrev
                    is_next={true}
                    btn_class={`${is_has_next ? '' : 'display-none'} ${
                        is_btn_circle
                            ? 'NextPrevDiv_icon-circle brs-50'
                            : 'NextPrevDiv_icon-rect NextPrevDiv_icon-rect-next'
                    }`}
                    size_icon={size_icon}
                    disabled={!is_has_next}
                    handleClick={handleNext}
                />
            </div>

            <div className="NextPrevDiv_prev pos-abs left-0 y-center">
                <BtnNexPrev
                    is_next={false}
                    btn_class={`${is_has_prev ? '' : 'display-none'} ${
                        is_btn_circle
                            ? 'NextPrevDiv_icon-circle brs-50'
                            : 'NextPrevDiv_icon-rect NextPrevDiv_icon-rect-prev'
                    }`}
                    size_icon={size_icon}
                    disabled={!is_has_prev}
                    handleClick={handlePrev}
                />
            </div>
        </div>
    );
}

export default NextPrevDiv;
