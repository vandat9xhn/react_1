import { useState } from 'react';

//
export function useFocusBlur() {
    //
    const [is_focus, setIsFocus] = useState(false);

    //
    function handleFocus() {
        setIsFocus(true);
    }

    //
    function handleBlur() {
        setIsFocus(false);
    }

    return { is_focus, setIsFocus, handleFocus, handleBlur };
}
