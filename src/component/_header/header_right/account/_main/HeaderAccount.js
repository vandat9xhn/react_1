import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ActionsAccount from '../actions/ActionsAccount';
//
import './HeaderAccount.scss';
import IconDown from '../../../../../_icons_svg/_icon_down/IconDown';

//
HeaderAccount.propTypes = {};

//
function HeaderAccount(props) {
    //
    const [open_account, setOpenAccount] = useState(false);

    //
    async function toggleOpenAccount() {
        setOpenAccount(!open_account);
    }

    //
    function closeAccount() {
        open_account && setOpenAccount(false);
    }

    //
    return (
        <CloseDiv makeDivHidden={closeAccount}>
            <div
                className={`header_menu ${
                    open_account ? 'text-blue bottom-blue nav-active' : ''
                }`}
            >
                <div
                    className="HeaderAccount__icon header_icon"
                    title="account"
                    onClick={toggleOpenAccount}
                >
                    <IconDown color="currentColor" />
                </div>

                <div
                    className={`header_hidden right-0 ${
                        open_account ? '' : 'display-none'
                    }`}
                >
                    <div className="header_hidden_contain">
                        <ActionsAccount closeAccount={closeAccount} />
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default HeaderAccount;
