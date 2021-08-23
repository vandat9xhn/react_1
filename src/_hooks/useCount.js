import { useRef, useState } from 'react';

//
export const useNewCount = ({
    initial_count,
    initial_min,
    initial_max,
    callback = () => {},
}) => {
    // state
    const [count, setCount] = useState(initial_count);

    // ref
    const min = useRef(initial_min);
    const max = useRef(initial_max);
    const value_before = useRef(count);

    /* ---------------- COMMON FUNC ------------------ */
    //
    function handleSetCount(value) {
        setCount(value);
        callback && callback(value);
    }

    //
    function changeMax(new_max) {
        max.current = new_max;
        if (new_max < count) {
            handleSetCount(new_max);
        }
    }

    //
    function changeMin(new_min) {
        min.current = new_min;
        if (new_min > count) {
            handleSetCount(new_min);
        }
    }

    //
    function handleInitialCount(new_max, new_min, new_count) {
        max.current = new_max;
        min.current = new_min;
        handleSetCount(new_count);
    }

    /* ---------------- COUNT ------------------ */

    //
    function countUp() {
        if (count < max.current) {
            handleSetCount(+count + 1);
        }
    }

    //
    function countDown() {
        if (count > min.current) {
            handleSetCount(count - 1);
        }
    }

    //
    function beforeCountNum(value) {
        value_before.current = value;
    }

    //
    function countNum(value) {
        if ((value >= min.current && value <= max.current) || value == '') {
            setCount(value);
        }
    }

    //
    function countNumDone(value) {
        if (value_before.current == value) {
            return;
        }

        if (value < min.current) {
            handleSetCount(min.current);
        }
        //
        else if (value > max.current) {
            handleSetCount(max.current);
        }
        //
        else {
            handleSetCount(+value);
        }
    }

    //
    return {
        count,
        countUp,
        countDown,
        beforeCountNum,
        countNum,
        countNumDone,
        changeMax,
        changeMin,
        handleInitialCount,
    };
};
