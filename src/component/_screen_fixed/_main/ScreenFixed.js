import React from 'react';
import PropTypes from 'prop-types';
//
import { useCloseScreen } from '../../../_custom_hooks/useCloseScreen';
import { useFullScreen } from '../../../_custom_hooks/useFullScreen';
import { useMakeBodyHidden } from '../../../_custom_hooks/useMakeBodyHidden';
//
import ScreenTitle from '../title/ScreenTitle';
//
import './ScreenFixed.scss';

//
ScreenFixed.propTypes = {
    url: PropTypes.string,
    children: PropTypes.any,
    handleDownload: PropTypes.func,
    closeScreenFixed: PropTypes.func,
};
ScreenFixed.defaultProps = {
    url: '',
};

//
function ScreenFixed(props) {
    //
    const { url, handleDownload, children, closeScreenFixed } = props;

    //
    useFullScreen()
    useCloseScreen(closeScreenFixed);
    useMakeBodyHidden();

    //
    return (
        <div className="ScreenFixed screen-blur">
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
