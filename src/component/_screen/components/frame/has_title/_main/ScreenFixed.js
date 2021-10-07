import React from 'react';
import PropTypes from 'prop-types';
//
import { useFullScreen } from '../../../../../../_hooks/useFullScreen';
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import ScreenTitle from '../title/ScreenTitle';
//
import './ScreenFixed.scss';

//
ScreenFixed.propTypes = {
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    show_screen_title: PropTypes.bool,
    body_hidden_params: PropTypes.shape({
        // blur_header: PropTypes.bool,
        hidden_app: PropTypes.bool,
        hidden_header: PropTypes.bool,
        hidden_scroll: PropTypes.bool,
        use_z_index: PropTypes.bool,
        screen_z_index: PropTypes.number,
    }),
    children: PropTypes.any,
    handleDownload: PropTypes.func,
    closeScreenFixed: PropTypes.func,
};
ScreenFixed.defaultProps = {
    url: '',
    body_hidden_params: {},
};

//
function ScreenFixed({
    url,
    show_screen_title,
    children,
    body_hidden_params,

    handleDownload,
    closeScreenFixed,
}) {
    //
    useFullScreen();
    useMakeBodyHidden({
        hidden_scroll: true,
        hidden_app: true,
        ...body_hidden_params,
    });

    //
    return (
        <div className="ScreenFixed">
            <div className="ScreenFixed_contain wh-100">
                {children}

                <div className="ScreenFixed_title z-index-lv5">
                    <ScreenTitle
                        show_screen_title={show_screen_title}
                        url={url}
                        handleDownload={handleDownload}
                        closeScreenTitle={closeScreenFixed}
                    />
                </div>
            </div>
        </div>
    );
}

export default ScreenFixed;
