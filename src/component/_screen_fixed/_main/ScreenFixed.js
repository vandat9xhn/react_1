import React from 'react';
import PropTypes from 'prop-types';
//
import { useCloseScreen } from '../../../_custom_hooks/useCloseScreen';
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
    useCloseScreen(closeScreenFixed);
    useMakeBodyHidden();

    //
    return (
        <div className="ScreenFixed">
            <div className="ScreenFixed_contain screen-blur">
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
