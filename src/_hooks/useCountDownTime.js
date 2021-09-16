import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

//
export function useCountDownTime({ second = 0 }) {
    //
    const [time_left, setTimeLeft] = useState(second);

    //
    const ref_has_interval = useRef(false);
    const ref_interval = useRef(null);

    //
    useEffect(() => {
        return () => {
            clearInterval(ref_interval.current);
        };
    }, []);

    //
    function countDownTime() {
        if (!ref_has_interval.current) {
            ref_has_interval.current = true;

            ref_interval.current = setInterval(() => {
                setTimeLeft((time_left) => {
                    if (time_left == 0) {
                        clearInterval(ref_interval.current);

                        ref_has_interval.current = false;
                        return 0;
                    }

                    return time_left - 1;
                });
            }, 1000);
        }
    }

    //
    return {
        time_left,
        setTimeLeft,

        countDownTime,
    };
}
