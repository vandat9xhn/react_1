import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../../_some_function/UnitNumber';
// 
import IconDiv from '../../../../../../../component/some_div/icon_div/IconDiv';
import IconHeart from '../../../../../../../_icons_svg/icons_like/icon_heart/IconHeart';
//
import './FsIIfLShareLike.scss';

//
FsIIfLShareLike.propTypes = {};

//
function FsIIfLShareLike({ count_like }) {
    //
    return (
        <div className="FsIIfLShareLike">
            <div className="FsIIfLShareLike_row display-flex align-items-center">
                <div className="FsIIfLShareLike_left">
                    <div className="display-flex-center">
                        <div>Chia sẻ:</div>

                        <button className="FsIIfLShareLike_btn FsIIfLShareLike_btn_1"></button>

                        <button className="FsIIfLShareLike_btn FsIIfLShareLike_btn_2"></button>

                        <button className="FsIIfLShareLike_btn FsIIfLShareLike_btn_3"></button>

                        <button className="FsIIfLShareLike_btn FsIIfLShareLike_btn_4"></button>
                    </div>
                </div>

                <div className="FsIIfLShareLike_right display-flex-center">
                    <IconDiv Icon={IconHeart} size_icon="2rem">
                        <span>Đã thích ({UnitNumber(count_like)})</span>
                    </IconDiv>
                </div>
            </div>
        </div>
    );
}

export default FsIIfLShareLike;
