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
        <div onClick={sharePost} title="share">
            <IconDiv y={200} Icon={IconsPost}>
                <div>
                    <div className="BtnPostCmtShare_title">Share</div>
                    <div className={count_share ? 'BtnPostCmtShare_total' : 'display-none'}>
                        {UnitNumber(count_share)}
                    </div>
                </div>
            </IconDiv>
        </div>
    );
}

export default BtnPostShare;
