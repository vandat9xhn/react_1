import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import ScreenTitle from '../../../../_screen/components/frame/has_title/title/ScreenTitle';

//
ZoomPostCommonTitle.propTypes = {};

//
function ZoomPostCommonTitle({ url, show_screen_title, closeScreenTitle }) {
    //
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // ------

    //
    function handleKeyDown(e) {
        if (e.key == 'Escape') {
            closeScreenTitle();
        }
    }

    //
    return (
        <div className="ZoomPostCommonTitle">
            <ScreenTitle
                url={url}
                show_screen_title={show_screen_title}
                tooltipCloseElm={'Press Esc to close'}
                closeScreenTitle={closeScreenTitle}
            />
        </div>
    );
}

export default ZoomPostCommonTitle;
