import React from 'react';
import PropTypes from 'prop-types';
//
import BgImgList from '../../../../../input/bg_img/_main/BgImgList';
//
import StoryBtnPrivacyMb from '../../../../_components/create/mobile/privacy/StoryBtnPrivacyMb';
import StoryBtnShareMb from '../../../../_components/create/mobile/btn_share/StoryBtnShareMb';
//
import './StoryCTFootMb.scss';

//
StoryCTFootMb.propTypes = {};

function StoryCTFootMb({
    active_bg_ix,
    bg_img_arr,
    can_share,

    handleChooseBg,
    openPrivacy,
    handleCreateStory,
}) {
    //
    return (
        <div className="StoryCTFootMb padding-4px">
            <div className="StoryCTFootMb_bg">
                <BgImgList
                    active_ix={active_bg_ix}
                    bg_img_arr={bg_img_arr}
                    handleChooseBg={handleChooseBg}
                />
            </div>

            <div className="flex-between-center">
                <div>
                    <StoryBtnPrivacyMb openPrivacy={openPrivacy} />
                </div>

                <div>
                    <StoryBtnShareMb
                        can_share={can_share}
                        handleCreateStory={handleCreateStory}
                    />
                </div>
            </div>
        </div>
    );
}

export default StoryCTFootMb;
