import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useCountDownTime } from '../../../../../../../../../_hooks/useCountDownTime';
//
import IconUpdate from '../../../../../../../../../_icons_svg/icon_update/IconUpdate';

//
FsPPrPSecretKeyTime.propTypes = {};

//
function FsPPrPSecretKeyTime({ time_start, sendKeyAgain }) {
    //
    const { time_left, setTimeLeft, countDownTime } = useCountDownTime({
        second: 60,
    });

    //
    useEffect(() => {
        setTimeLeft(60);
        countDownTime();
    }, [time_start]);

    //
    return (
        <div className="FsPPrPSecretKeyTime text-del">
            {time_left ? (
                `${time_left}s`
            ) : (
                <div
                    className="cursor-pointer"
                    title="Gửi lại mã xác nhận"
                    onClick={sendKeyAgain}
                >
                    <IconUpdate size_icon="16px" stroke="var(--blue)" />
                </div>
            )}
        </div>
    );
}

export default FsPPrPSecretKeyTime;
