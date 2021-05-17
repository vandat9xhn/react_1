import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ActionsAccount from '../actions/ActionsAccount';
// 
import './HeaderAccount.scss';

//
HeaderAccount.propTypes = {};

//
function HeaderAccount(props) {
    const [open_account, setOpenAccount] = useState(false);

    // Toggle
    async function toggleOpenAccount() {
        setOpenAccount(!open_account);
    }
    // Close
    function closeAccount() {
        open_account && setOpenAccount(false);
    }

    //
    return (
        <CloseDiv makeDivHidden={closeAccount}>
            <div className={`header_menu ${open_account ? 'bottom-blue' : ''}`}>
                <div
                    className={`HeaderAccount__icon header_icon ${
                        open_account ? 'nav-active' : ''
                    }`}
                    title="account"
                    onClick={toggleOpenAccount}
                >
                    <IconsArrow y={200} />
                </div>

                <div
                    className={`header_hidden ${
                        open_account ? '' : 'display-none'
                    }`}
                >
                    <div className="header_hidden-contain">
                        <ActionsAccount closeAccount={closeAccount} />
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default HeaderAccount;
