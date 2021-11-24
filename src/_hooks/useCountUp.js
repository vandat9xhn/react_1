import { useState } from 'react';

//
export function useCountUp(initial_count = 0) {
    //
    const [count, setCount] = useState(initial_count);

    // ----

    //
    function countUp() {
        setCount((count) => count + 1);
    }

    //
    return { count, countUp };
}
