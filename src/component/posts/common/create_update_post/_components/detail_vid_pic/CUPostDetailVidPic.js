import React from 'react';
import PropTypes from 'prop-types';
//
import BtnNexPrev from '../../../../../button/next_prev/BtnNexPrev';
//
import './CUPostDetailVidPic.scss';

//
CUPostDetailVidPic.propTypes = {};

//
function CUPostDetailVidPic({
    thumbnail,
    children,

    is_has_next,
    is_has_prev,

    handleNext,
    handlePrev,
}) {
    //
    return (
        <div className="CUPostDetailVidPic pos-rel wh-100">
            <div className="pos-abs-100 overflow-hidden">
                <div
                    className="CUPostDetailVidPic_bg wh-100"
                    style={{ backgroundImage: `url(${thumbnail})` }}
                ></div>
            </div>

            <div className="pos-abs-100 bg-shadow-8"></div>

            <div className="CUPostDetailVidPic_main pos-rel display-flex-center wh-100 padding-y-20px">
                {children}
            </div>

            <BtnNexPrev
                is_next={true}
                btn_class={`CUPostDetailVidPic_btn CUPostDetailVidPic_btn-next ${
                    is_has_next ? '' : 'display-none'
                }`}
                size_icon="24px"
                handleClick={handleNext}
            />

            <BtnNexPrev
                is_next={false}
                btn_class={`CUPostDetailVidPic_btn CUPostDetailVidPic_btn-prev ${
                    is_has_prev ? '' : 'display-none'
                }`}
                size_icon="24px"
                handleClick={handlePrev}
            />
        </div>
    );
}

export default CUPostDetailVidPic;
