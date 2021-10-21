import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../_some_function/UnitNumber';
//
import IconsPost from '../../../../../_icons_svg/icons_post/IconsPost';
//
import './BtnPostCmt.scss';

//
BtnPostCmt.propTypes = {};

//
function BtnPostCmt({ handleClickBtnCmt, count_comment }) {
    //
    return (
        <div
            className="BtnPostCmt display-flex-center h-100per cursor-pointer"
            onClick={handleClickBtnCmt}
            title="comment"
        >
            <IconsPost x={200} />

            <div className="margin-left-5px">
                <span className="BtnPostCmtShare_title">Comment</span>

                <span
                    className={
                        count_comment ? 'BtnPostCmtShare_total' : 'display-none'
                    }
                >
                    {UnitNumber(count_comment)}
                </span>
            </div>
        </div>
    );
}

export default BtnPostCmt;
