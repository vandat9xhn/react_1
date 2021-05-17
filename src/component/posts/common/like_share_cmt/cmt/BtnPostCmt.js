import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../_some_function/UnitNumber';
//
import IconsPost from '../../../../../_icons_svg/icons_post/IconsPost';
import IconDiv from '../../../../some_div/icon_div/IconDiv';
//
import './BtnPostCmt.scss';

//
BtnPostCmt.propTypes = {};

//
function BtnPostCmt(props) {
    const { handleClickBtnCmt, count_comment } = props;

    //
    return (
        <div
            className="LikeShareCmt_cmt"
            onClick={handleClickBtnCmt}
            title="comment"
        >
            <IconDiv x={200} Icon={IconsPost}>
                <div>
                    <div className="BtnPostCmt_title">Comment</div>

                    <div
                        className={
                            count_comment ? 'BtnPostCmt_total' : 'display-none'
                        }
                    >
                        {UnitNumber(count_comment)}
                    </div>
                </div>
            </IconDiv>
        </div>
    );
}

export default BtnPostCmt;
