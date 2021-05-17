import React from 'react';
import PropTypes from 'prop-types';

import './ConfirmDiv.scss';
import WaitingCell from '../../waiting/waiting_cell/WaitingCell';
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
import IconFav from '../../../_icons_svg/_icon_fav/IconFav';


//
function ConfirmDiv(props) {
    const {open_confirm, closeConfirm, confirmYes, children} = props;

    return (
        <div className={`ConfirmDiv ${open_confirm ? '' : 'display-none'}`}>

            {/* screen blur */}
            <div className="screen-blur" onClick={closeConfirm}></div>

            {/* form */}
            <div className="ConfirmDiv_contain brs-5px App_box_shadow form-fixed">

                {/* top */}
                <div className="ConfirmDiv_top">
                    <div className="ConfirmDiv__title">
                        <div>
                            <IconFav size_icon="2.5rem"/>
                        </div>
                        <div>
                            {open_confirm && <WaitingCell />}
                        </div>
                    </div>

                    {/* close */}
                    <div className="ConfirmDiv__close brs-5px" onClick={closeConfirm}>
                        <IconsArrow y={400} size_icon="1.5rem"/>
                    </div>
                </div>

                {/* mid */}
                <div className="ConfirmDiv_mid">
                    {children}
                </div>

                {/* bot */}
                <div className="ConfirmDiv_bot">
                    {/* yes */}
                    <div>
                        <div className="ConfirmDiv__yes" onClick={confirmYes}>
                            Yes
                        </div>
                    </div>

                    {/* no */}
                    <div>
                        <div className="ConfirmDiv__no" onClick={closeConfirm}>
                            No
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


ConfirmDiv.propTypes = {
    children: PropTypes.any,
    // perform func when choosing ""yes""
    confirmYes: PropTypes.func,
    // close component
    closeConfirm: PropTypes.func,
    // open or close confirm
    open_confirm: PropTypes.bool,
};

ConfirmDiv.defaultProps = {
    
}

export default ConfirmDiv;