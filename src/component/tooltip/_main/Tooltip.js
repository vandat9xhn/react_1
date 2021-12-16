import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../_hooks/useBool';
//
import PortalAtBody from '../../portal/at_body/PortalAtBody';

//
Tooltip.propTypes = {
    ref_elm: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    pos: PropTypes.string,
    distance: PropTypes.number,
    class_contain: PropTypes.string,
};

Tooltip.defaultProps = {
    pos: 'bottom',
    distance: 2,
    class_contain:
        'padding-x-10px padding-y-6px brs-8px bg-shadow-8 font-13px text-white pointer-events-none',
};

//
function Tooltip({ ref_elm, children, pos, distance, class_contain }) {
    //
    useEffect(() => {
        if (ref_elm.current) {
            ref_elm.current.addEventListener('mouseenter', handleMouseEnter);
            ref_elm.current.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                ref_elm.current.removeEventListener(
                    'mouseenter',
                    handleMouseEnter
                );
                ref_elm.current.removeEventListener(
                    'mouseleave',
                    handleMouseLeave
                );
            };
        }
    }, [ref_elm.current]);

    //
    const { is_true, setIsTrue } = useBool();

    // -----

    //
    function handleMouseEnter() {
        setIsTrue(true);
    }

    //
    function handleMouseLeave() {
        setIsTrue(false);
    }

    //
    function getTooltipPos() {
        const { top, left, bottom, right } =
            ref_elm.current.getBoundingClientRect();
        const x_center = (left + right) / 2;
        const y_center = (top + bottom) / 2;

        if (pos == 'bottom') {
            return {
                top: bottom + distance,
                left: x_center,
                transform: `translateX(-50%)`,
            };
        }

        if (pos == 'top') {
            return {
                bottom: bottom + distance,
                left: x_center,
                transform: `translateX(-50%)`,
            };
        }

        if (pos == 'left') {
            return {
                left: left + distance,
                top: y_center,
                transform: `translateY(-50%)`,
            };
        }

        if (pos == 'right') {
            return {
                left: right + distance,
                top: y_center,
                transform: `translateY(-50%)`,
            };
        }
    }

    //
    if (!is_true) {
        return null;
    }

    //
    return (
        <PortalAtBody>
            <div
                className="Tooltip pos-fixed z-index-lv5"
                style={{ ...getTooltipPos() }}
            >
                <div className={class_contain}>{children}</div>
            </div>
        </PortalAtBody>
    );
}

export default Tooltip;
