import React from 'react';
import PropTypes from 'prop-types';
//
import IconFsTruck from '../../../../../../../../_icons_svg/_icon_fs_truck/IconFsTruck';
import IconsStar from '../../../../../../../../_icons_svg/icons_star/IconsStar';
import IconsProfile from '../../../../../../../../_icons_svg/icons_profile/IconsProfile';
//
import StepperDiv from '../../../../../../../../component/some_div/stepper_div/StepperDiv';
//
import FsPPOrderStep from '../step/FsPPOrderStep';
// 
import './FsPPOrderSteps.scss';

//
const STEP_ARR = [
    { title: 'Đơn hàng đã đặt', Icon: <IconsProfile size_icon="30px" /> },
    {
        title: 'đã xác nhận thông tin thanh toán',
        Icon: <IconsProfile size_icon="30px" />,
    },
    { title: 'Đã giao cho ĐVVC', Icon: <IconFsTruck size_icon="30px" /> },
    { title: 'Đơn hàng đã nhận', Icon: <IconsProfile size_icon="30px" /> },
    { title: 'Đơn hàng đã giao', Icon: <IconsStar size_icon="30px" /> },
];

//
FsPPOrderSteps.propTypes = {};

//
function FsPPOrderSteps({ c_step }) {
    //
    const step_arr = STEP_ARR.map((item) => {
        return {
            component: FsPPOrderStep,
            props: {
                title: item.title,
                Icon: item.Icon,
            },
        };
    });

    //
    return (
        <div className="FsPPOrderSteps border-bottom-blur">
            <StepperDiv step_arr={step_arr} c_step={c_step} />
        </div>
    );
}

export default FsPPOrderSteps;
