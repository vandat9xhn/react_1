import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
// 
import { toggleAppHiddenTemp } from '../../../../../_some_function/AppHiddenTemp';
// 
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
//
import ActionsAccount from '../actions/ActionsAccount';
//
import './HeaderAccount.scss';

//
HeaderAccount.propTypes = {};

//
function HeaderAccount(props) {
    //
    const [open_account, setOpenAccount] = useState(false);

    //
    useEffect(() => {
        IS_MOBILE && toggleAppHiddenTemp({ is_hidden: open_account });
    }, [open_account]);

    // ------

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
                    <IconCaret fill="currentColor" />
                </div>

                <div
                    className={`header_hidden right-0 ${
                        open_account ? 'border-top-blur' : 'display-none'
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
