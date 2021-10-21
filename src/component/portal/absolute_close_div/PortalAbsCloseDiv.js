import React from 'react';
import PropTypes from 'prop-types';
//
import PortalAtElm from '../at_elm/PortalAtElm';
import CloseDiv from '../../some_div/close_div/CloseDiv';

//
PortalAbsCloseDiv.propTypes = {};

//
function PortalAbsCloseDiv({
    class_scroll_elm,
    className,

    pos_left,
    pos_top,
    children,
    
    refs_target,
    makeDivHidden,
}) {
    //
    return (
        <PortalAtElm
            elm={
                class_scroll_elm
                    ? document.getElementsByClassName(class_scroll_elm)[0]
                    : document.getElementsByTagName('body')[0]
            }
            className={className}
        >
            <div
                className="PortalAbsCloseDiv pos-abs z-index-1"
                style={{ top: pos_top, left: pos_left }}
            >
                <CloseDiv
                    makeDivHidden={makeDivHidden}
                    refs_target={refs_target}
                >
                    {children}
                </CloseDiv>
            </div>
        </PortalAtElm>
    );
}

export default PortalAbsCloseDiv;
