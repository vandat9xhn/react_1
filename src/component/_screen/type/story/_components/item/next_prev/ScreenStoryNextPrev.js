import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import BtnNexPrev from '../../../../../../button/next_prev/BtnNexPrev';
// 
import './ScreenStoryNextPrev.scss'

//
ScreenStoryNextPrev.propTypes = {};

//
function ScreenStoryNextPrev({ is_next, disabled, handleClick }) {
    //
    return (
        <div
            className={`ScreenStoryNextPrev wh-100 position-rel ${
                disabled ? '' : 'cursor-pointer'
            }`}
            onClick={handleClick}
        >
            <div
                className={`ScreenStoryNextPrev_btn ${
                    is_next
                        ? 'ScreenStoryNextPrev_btn-next'
                        : 'ScreenStoryNextPrev_btn-prev'
                }`}
            >
                <div className="ScreenStoryNextPrev_btn_contain">
                    <BtnNexPrev
                        is_next={is_next}
                        btn_class={`${disabled ? 'display-none' : ''}`}
                        // size_icon="1rem"
                        disabled={disabled}
                        handleClick={IS_MOBILE ? handleClick : undefined}
                        // btn_props={btn_props}
                    />
                </div>
            </div>
        </div>
    );
}

export default ScreenStoryNextPrev;
