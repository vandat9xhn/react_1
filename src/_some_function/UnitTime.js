//
export function getTimeAndUnit({ c_time = new Date() || 1 || '' }) {
    const time_change = new Date() - new Date(c_time);

    if (time_change >= 31536000000) {
        return {
            time: Math.floor(time_change / 31536000000),
            unit: 'year',
        };
    }

    if (time_change >= 2592000000) {
        return {
            time: Math.floor(time_change / 2592000000),
            unit: 'month',
        };
    }

    if (time_change >= 86400000) {
        return {
            time: Math.floor(time_change / 86400000),
            unit: 'day',
        };
    }

    if (time_change >= 3600000) {
        return {
            time: Math.floor(time_change / 3600000),
            unit: 'hour',
        };
    }

    if (time_change >= 60000) {
        return {
            time: Math.floor(time_change / 3600000),
            unit: 'minute',
        };
    }

    return {
        time: Math.floor(time_change / 1000),
        unit: 'second',
    };
}

// time change: millisecond
const UnitTime = (
    time_change,
    just_now = 'Just now',
    is_vietnamese = false,
    full_time = false
) => {
    if (time_change >= 31536000000) {
        return (
            Math.floor(time_change / 31536000000) +
            (is_vietnamese ? ' Năm' : full_time ? 'year' : ' y')
        );
    }

    if (time_change >= 2592000000) {
        return (
            Math.floor(time_change / 2592000000) +
            (is_vietnamese ? ' Tháng' : full_time ? 'month' : ' mon')
        );
    }

    if (time_change >= 86400000) {
        return (
            Math.floor(time_change / 86400000) +
            (is_vietnamese ? ' Ngày' : full_time ? 'day' : ' d')
        );
    }

    if (time_change >= 3600000) {
        return (
            Math.floor(time_change / 3600000) +
            (is_vietnamese ? ' Giờ' : full_time ? 'hour' : ' h')
        );
    }

    if (time_change >= 60000) {
        return (
            Math.floor(time_change / 60000) +
            (is_vietnamese ? 'Phút' : full_time ? 'minute' : ' m')
        );
    }

    return just_now;
};

export default UnitTime;
