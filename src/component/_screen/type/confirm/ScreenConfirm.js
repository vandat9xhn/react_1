import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../_hooks/useMakeBodyHidden';
//
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
function ScreenConfirm({ closeScreen, title, notification, handleConfirm }) {
    //
    useMakeBodyHidden({
        hidden_app: false,
        // blur_header: true,
    });

    //
    function onConfirm() {
        closeScreen();
        handleConfirm();
    }

    //
    return (
        <div className="ScreenConfirm w-100per h-100vh display-flex-center">
            <div className="ScreenConfirm_contain bg-primary brs-5px box-shadow-fb">
                <div className="ScreenConfirm_head margin-bottom-10px">
                    <ScreenBlurHead title={title} closeScreenBlur={closeScreen} />
                </div>

                <div className="ScreenConfirm_body padding-x-15px margin-bottom-10px">
                    {notification}
                </div>

                <div className="ScreenConfirm_foot">
                    <ScreenBlurFootYesNo
                        handleConfirm={onConfirm}
                        closeScreenBlur={closeScreen}
                    />
                </div>
            </div>
        </div>
    );
}

export default ScreenConfirm;
