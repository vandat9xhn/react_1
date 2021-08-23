// time change: millisecond
const UnitTime = (
    time_change,
    just_now = 'Just now',
    is_vietnamese = false
) => {
    if (time_change >= 31536000000) {
        return (
            Math.floor(time_change / 31536000000) +
            (is_vietnamese ? ' Năm' : ' y')
        );
    }

    if (time_change >= 2592000000) {
        return (
            Math.floor(time_change / 2592000000) +
            (is_vietnamese ? ' Tháng' : ' mon')
        );
    }

    if (time_change >= 86400000) {
        return (
            Math.floor(time_change / 86400000) +
            (is_vietnamese ? ' Ngày' : ' d')
        );
    }

    if (time_change >= 3600000) {
        return (
            Math.floor(time_change / 3600000) + (is_vietnamese ? ' Giờ' : ' h')
        );
    }

    if (time_change >= 60000) {
        return (
            Math.floor(time_change / 60000) + (is_vietnamese ? 'Phút' : ' m')
        );
    }

    return just_now;
};

export default UnitTime;
