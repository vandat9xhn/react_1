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
    title_yes,
    title_no,
    reversed_btn = false,
    handleConfirm,
    ...other_props
}) {
    openScreenFloor({
        FloorComponent: ScreenConfirm,

        title: title,
        notification: notification,
        title_yes: title_yes,
        title_no: title_no,
        reversed_btn: reversed_btn,
        handleConfirm: handleConfirm,
        ...other_props,
    });
}

//
ScreenConfirm.propTypes = {};

//
function ScreenConfirm({
    title,
    notification,
    title_yes,
    title_no,
    reversed_btn,

    handleConfirm,
    closeScreen,
}) {
    //
    useMakeBodyHidden({
        hidden_app: false,
    });

    // -----

    //
    function onConfirm() {
        closeScreen();
        handleConfirm();
    }

    //
    function clickConfirm() {
        reversed_btn ? closeScreen() : onConfirm();
    }

    //
    function clickClose() {
        reversed_btn ? onConfirm() : closeScreen();
    }

    //
    return (
        <div className="ScreenConfirm w-100per h-100vh display-flex-center">
            <div className="ScreenConfirm_contain bg-primary brs-5px box-shadow-fb">
                <div className="ScreenConfirm_head margin-bottom-10px">
                    <ScreenBlurHead
                        title={title}
                        closeScreenBlur={closeScreen}
                    />
                </div>

                <div className="ScreenConfirm_body padding-x-15px margin-bottom-10px">
                    {notification}
                </div>

                <div className="ScreenConfirm_foot">
                    <ScreenBlurFootYesNo
                        title_yes={reversed_btn ? title_no : title_yes}
                        title_no={reversed_btn ? title_yes : title_no}
                        handleConfirm={clickConfirm}
                        closeScreenBlur={clickClose}
                    />
                </div>
            </div>
        </div>
    );
}

export default ScreenConfirm;
