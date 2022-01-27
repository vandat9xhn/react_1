import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useHold } from '../../../../_hooks/useHold';
import { useBool } from '../../../../_hooks/useBool';
//
import './VideoUtilsLayout.scss';

//
VideoUtilsLayout.propTypes = {};

//
function VideoUtilsLayout({
    ref_main_video = { current: document.getElementsByTagName('div')[0] },
    use_hide_utils = true,
    is_hide_cursor,
    children,
}) {
    //
    const { StartHold, StopHold } = useHold({ time: 1500 });
    const { is_true, setIsTrue } = useBool();

    //
    useEffect(() => {
        if (use_hide_utils) {
            ref_main_video.current.addEventListener(
                'mouseleave',
                handleMouseLeave
            );
            ref_main_video.current.addEventListener(
                'mouseenter',
                handleMouseEnter
            );

            return () => {
                if (ref_main_video.current) {
                    ref_main_video.current.removeEventListener(
                        'mouseleave',
                        handleMouseLeave
                    );
                    ref_main_video.current.removeEventListener(
                        'mouseenter',
                        handleMouseEnter
                    );
                }
            };
        }
    }, []);

    // ----

    //
    function handleMouseLeave() {
        StartHold(() => {
            setIsTrue(true);
        });
    }

    //
    function handleMouseEnter() {
        StopHold();
        setIsTrue(false);
    }

    //
    return (
        <div
            className={`VideoUtilsLayout pos-abs left-0 bottom-0 w-100per ${
                is_true || is_hide_cursor ? 'VideoUtilsLayout-out' : ''
            }`}
        >
            <div className="VideoUtilsLayout_contain">{children}</div>
        </div>
    );
}

export default VideoUtilsLayout;
