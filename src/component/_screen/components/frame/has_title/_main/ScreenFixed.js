import React from 'react';
import PropTypes from 'prop-types';
//
import { useCloseScreen } from '../../../../../../_hooks/useCloseScreen';
import { useFullScreen } from '../../../../../../_hooks/useFullScreen';
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import ScreenTitle from '../title/ScreenTitle';
//
import './ScreenFixed.scss';

//
ScreenFixed.propTypes = {
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.any,
    handleDownload: PropTypes.func,
    closeScreenFixed: PropTypes.func,
};
ScreenFixed.defaultProps = {
    url: '',
};

//
function ScreenFixed({ url, handleDownload, children, closeScreenFixed }) {
    //
    useFullScreen();
    // useCloseScreen(closeScreenFixed);
    useMakeBodyHidden({ hidden_scroll: true, hidden_app: true });

    //
    return (
        <div className="ScreenFixed">
            <div className="ScreenFixed_contain wh-100">
                {children}

                <div className="ScreenFixed_title">
                    <ScreenTitle
                        closeScreenTitle={closeScreenFixed}
                        url={url}
                        handleDownload={handleDownload}
                    />
                </div>
            </div>
        </div>
    );
}

export default ScreenFixed;
