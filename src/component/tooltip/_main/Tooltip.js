import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../_hooks/useBool';
import { useForceUpdate } from '../../../_hooks/UseForceUpdate';
import { useHold } from '../../../_hooks/useHold';
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
function Tooltip({
    ref_elm,
    ref_scroll_elm = { current: document.getElementsByTagName('html')[0] },
    use_scroll = false,

    children,
    pos,
    distance,
    class_contain,

    hold_time,
}) {
    //
    const ref_func_scroll = useRef(null);

    //
    const { is_true, setIsTrue } = useBool();
    const forceUpdate = useForceUpdate();
    const { StartHold, StopHold } = useHold({ time: hold_time });

    //
    useEffect(() => {
        if (ref_elm.current) {
            ref_elm.current.addEventListener('mouseenter', handleMouseEnter);
            ref_elm.current.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                ref_elm.current &&
                    ref_elm.current.removeEventListener(
                        'mouseenter',
                        handleMouseEnter
                    );
                ref_elm.current &&
                    ref_elm.current.removeEventListener(
                        'mouseleave',
                        handleMouseLeave
                    );
            };
        }
    }, [ref_elm.current]);

    //
    useEffect(() => {
        if (use_scroll) {
            if (!ref_func_scroll.current) {
                ref_func_scroll.current = handleScroll;
            }

            if (is_true) {
                ref_scroll_elm.current.addEventListener(
                    'scroll',
                    ref_func_scroll.current
                );
            } else {
                ref_scroll_elm.current.removeEventListener(
                    'scroll',
                    ref_func_scroll.current
                );
            }
        }
    }, [is_true]);

    // -----

    //
    function handleMouseEnter() {
        StartHold(() => {
            setIsTrue(true);
        });
    }

    //
    function handleMouseLeave() {
        StopHold();
        setIsTrue(false);
    }

    //
    function getTooltipPos() {
        if (!ref_elm.current) {
            return {};
        }

        let { top, left, bottom, right } =
            ref_elm.current.getBoundingClientRect();

        if (use_scroll) {
            const {
                top: scroll_top,
                left: scroll_left,
                bottom: scroll_bottom,
                right: scroll_right,
            } = ref_scroll_elm.current.getBoundingClientRect();

            if (
                top >= scroll_bottom ||
                bottom <= scroll_top ||
                left >= scroll_right ||
                right <= scroll_left
            ) {
                setIsTrue(false);
                return {};
            }

            if (top <= scroll_top) {
                top = scroll_top;
            } else if (bottom >= scroll_bottom) {
                bottom = scroll_bottom;
            }

            if (left <= scroll_left) {
                left = scroll_left;
            } else if (right >= scroll_right) {
                right = scroll_right;
            }
        }

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
                transform: `translate(-100%, -50%)`,
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
    function handleScroll() {
        forceUpdate();
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
