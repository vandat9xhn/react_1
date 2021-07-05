import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlur from '../../../component/_screen_blur/_main/ScreenBlur';
import ScreenBlurHead from '../../../component/_screen_blur/_component/head/ScreenBlurHead';
import ScreenBlurFootYesNo from '../../../component/_screen_blur/_component/foot_yes_no/ScreenBlurFootYesNo';

//
LearnScreenConfirm.propTypes = {};

//
function LearnScreenConfirm({ closeScreen, title, notification, handleConfirm }) {
    // 
    return (
        <ScreenBlur closeScreen={closeScreen}>
            <div className="ScreenConfirm_contain">
                <div className="ScreenConfirm_head">
                    <ScreenBlurHead
                        title={title}
                        closeScreenBlur={closeScreen}
                    />
                </div>

                <div>
                    <div className="ScreenConfirm_body">{notification}</div>
                </div>

                <div className="ScreenConfirm_foot">
                    <ScreenBlurFootYesNo
                        handleConfirm={handleConfirm}
                        closeScreenBlur={closeScreen}
                    />
                </div>
            </div>
        </ScreenBlur>
    );
}

export default LearnScreenConfirm;
