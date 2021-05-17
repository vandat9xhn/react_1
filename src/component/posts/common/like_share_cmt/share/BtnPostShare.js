import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../_some_function/UnitNumber';
import IconsPost from '../../../../../_icons_svg/icons_post/IconsPost';
import IconDiv from '../../../../some_div/icon_div/IconDiv';

//
BtnPostShare.propTypes = {};

//
function BtnPostShare(props) {
    const { sharePost, count_share } = props;

    //
    return (
        <div className="LikeShareCmt_share" onClick={sharePost} title="share">
            <IconDiv y={200} Icon={IconsPost}>
                <div>
                    <div className="LikeShareCmt_cmt-share_title">Share</div>
                    <div className="LikeShareCmt_cmt-share_total">
                        {UnitNumber(count_share)}
                    </div>
                </div>
            </IconDiv>
        </div>
    );
}

export default BtnPostShare;
