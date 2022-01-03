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

    class_main = '',
    title,
    title_center,
    notification,

    title_yes,
    title_no,
    reversed_btn = false,

    body_hidden_props = {},

    handleConfirm,
    ...other_props
}) {
    openScreenFloor({
        FloorComponent: ScreenConfirm,

        class_main: class_main,
        title: title,
        title_center: title_center,
        notification: notification,

        title_yes: title_yes,
        title_no: title_no,
        reversed_btn: reversed_btn,

        body_hidden_props: body_hidden_props,

        handleConfirm: handleConfirm,
        ...other_props,
    });
}

//
ScreenConfirm.propTypes = {};

//
function ScreenConfirm({
    class_main = '',

    title,
    title_center,
    notification,

    title_yes,
    title_no,
    reversed_btn,

    body_hidden_props = {},

    handleConfirm,
    closeScreen,
}) {
    //
    useMakeBodyHidden({
        hidden_app: false,
        use_z_index: true,
        screen_z_index: 99,
        ...body_hidden_props,
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
        <div
            className={`ScreenConfirm w-100per h-100vh display-flex-center ${class_main}`}
        >
            <div className="ScreenConfirm_contain bg-primary brs-5px box-shadow-fb">
                <div className="ScreenConfirm_head margin-bottom-10px">
                    <ScreenBlurHead
                        title={title}
                        is_center={title_center}
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
