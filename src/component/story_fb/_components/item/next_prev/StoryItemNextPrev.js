import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import BtnNexPrev from '../../../../button/next_prev/BtnNexPrev';
//
import './StoryItemNextPrev.scss';

//
StoryItemNextPrev.propTypes = {};

//
function StoryItemNextPrev({ is_next, disabled, handleClick }) {
    //
    return (
        <div
            className={`StoryItemNextPrev wh-100 pos-rel ${
                disabled ? '' : 'cursor-pointer'
            }`}
            onClick={handleClick}
        >
            <div
                className={`StoryItemNextPrev_btn ${
                    IS_MOBILE
                        ? is_next
                            ? 'right-0'
                            : 'left-0'
                        : is_next
                        ? 'StoryItemNextPrev_btn-next'
                        : 'StoryItemNextPrev_btn-prev'
                }`}
            >
                <div className="StoryItemNextPrev_btn_contain">
                    <BtnNexPrev
                        is_next={is_next}
                        btn_class={`${disabled ? 'display-none' : ''}`}
                        // size_icon="1rem"
                        disabled={disabled}
                        // handleClick={IS_MOBILE ? handleClick : undefined}
                        // btn_props={btn_props}
                    />
                </div>
            </div>
        </div>
    );
}

export default StoryItemNextPrev;
