import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlur from '../../components/frame/blur/ScreenBlur';
import ScreenBlurHead from '../../components/part/head/ScreenBlurHead';
import ScreenBlurFootYesNo from '../../components/part/foot_yes_no/ScreenBlurFootYesNo';
//
import './ScreenConfirm.scss';

//
export function openScreenConfirm({
    openScreenFloor,

    title,
    notification,
    handleConfirm,
    ...other_props
}) {
    openScreenFloor({
        FloorComponent: ScreenConfirm,

        title: title,
        notification: notification,
        handleConfirm: handleConfirm,
        ...other_props,
    });
}

//
ScreenConfirm.propTypes = {};

//
function ScreenConfirm({
    closeScreen,
    title,
    notification,
    handleConfirm,
}) {
    //
    function onConfirm() {
        closeScreen();

        handleConfirm();
    }

    //
    return (
        <ScreenBlur closeScreen={closeScreen} screen_center={true}>
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
                        handleConfirm={onConfirm}
                        closeScreenBlur={closeScreen}
                    />
                </div>
            </div>
        </ScreenBlur>
    );
}

export default ScreenConfirm;
