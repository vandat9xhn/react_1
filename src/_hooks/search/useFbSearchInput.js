import { useState } from 'react';
//
import { useHistory } from 'react-router-dom';
//
import { useBool } from '../useBool';

//
export function useFbSearchInput({
    initial_value = '',
    initial_open = true,
    always_open = false,
}) {
    //
    const use_history = useHistory();

    //
    const [value, setValue] = useState(initial_value);

    //
    const { is_true: show_contain, setIsTrue: setShowContain } = useBool();
    const { is_true: is_open, setIsTrue: setIsOpen } = useBool(
        always_open || initial_open
    );

    // -----

    //
    function handleFocus() {
        !always_open && setIsOpen(true);
        setShowContain(true);
    }

    //
    function handleClose() {
        show_contain && setShowContain(false);
        !always_open && is_open && setIsOpen(false);
    }

    //
    function handleChange(new_value) {
        setValue(new_value);
    }

    //
    function onSearch() {
        use_history.push(`/fb-search?q=${value}`);
    }

    // -----
    return {
        is_open,
        show_contain,
        value,

        handleFocus,
        handleChange,
        handleClose,
        onSearch,
    };
}
