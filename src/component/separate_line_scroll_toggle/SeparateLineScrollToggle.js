import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../_hooks/useBool';

//
SeparateLineScrollToggle.propTypes = {};

//
function SeparateLineScrollToggle({ ref_scroll_elm }) {
    //
    const { is_true, setIsTrue } = useBool();

    //
    useEffect(() => {
        ref_scroll_elm.current.addEventListener('scroll', handleScroll);

        return () => {
            ref_scroll_elm.current &&
                ref_scroll_elm.current.removeEventListener(
                    'scroll',
                    handleScroll
                );
        };
    }, []);

    // ----

    //
    function handleScroll(e) {
        setIsTrue(e.target.scrollTop > 0);
    }

    //
    return (
        <div
            className={`SeparateLineScrollToggle h-1px bg-blur ${
                is_true ? '' : 'display-none'
            }`}
        ></div>
    );
}

export default SeparateLineScrollToggle;
