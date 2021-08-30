import { useRef } from 'react';

//
export const useNewCount = ({
    getCount = () => 1,
    getMax = () => 1,
    getMin = () => 1,
    handleSetCount = () => {},
}) => {
    //
    const value_before = useRef(0);

    /* ------- COUNT -------- */

    //
    function countUp() {
        const count = getCount();
        const max = getMax();

        if (count < max) {
            handleSetCount(+count + 1);
        }
    }

    //
    function countDown() {
        const count = getCount();
        const min = getMin();

        if (count > min) {
            handleSetCount(count - 1);
        }
    }

    //
    function beforeCountNum(value) {
        value_before.current = value;
    }

    //
    function countNum(value) {
        const max = getMax();
        const min = getMin();

        if (value == '') {
            handleSetCount(value);
        }

        if (value >= min && value <= max) {
            handleSetCount(+value);
            beforeCountNum(+value);
        }
    }

    //
    function countNumDone(value) {
        const max = getMax();
        const min = getMin();

        if (value_before.current == value) {
            return;
        }

        if (+value < min) {
            handleSetCount(min);
        } else if (+value > max) {
            handleSetCount(max);
        } else {
            handleSetCount(+value);
        }
    }

    //
    return {
        countUp,
        countDown,
        beforeCountNum,
        countNum,
        countNumDone,
    };
};
