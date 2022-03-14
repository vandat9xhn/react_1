import React, { useEffect, useRef, useState } from 'react';
import { ClickingOutSideFull } from 'react-click-outside-ts';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { toggleAppHiddenTemp } from '../../../../../_some_function/AppHiddenTemp';
//
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';
//
import Tooltip from '../../../../tooltip/_main/Tooltip';
//
import HeaderBtnIcon from '../../../_components/btn_icon/HeaderBtnIcon';
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
    const ref_child = useRef(null);
    const ref_btn = useRef(null);

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
    function handleClickOutSide() {
        setOpenAccount(false);
    }

    //
    return (
        <div className={`${open_account ? 'text-blue nav-active' : ''}`}>
            <HeaderBtnIcon
                ref_btn={ref_btn}
                // title="Account"
                handleClick={toggleOpenAccount}
                // count_new={0}
            >
                <IconCaret fill="currentColor" />
            </HeaderBtnIcon>

            <Tooltip ref_elm={ref_btn} pos="bottom">
                Account
            </Tooltip>

            <ClickingOutSideFull
                ref_child={ref_child}
                refs_target={[ref_btn]}
                is_show={open_account}
                handleClickOutSide={handleClickOutSide}
            >
                <div
                    ref={ref_child}
                    className={`header_hidden right-0 ${
                        open_account ? 'border-top-blur' : 'display-none'
                    }`}
                >
                    <div className="header_hidden_contain">
                        <ActionsAccount closeAccount={closeAccount} />
                    </div>
                </div>
            </ClickingOutSideFull>
        </div>
    );
}

export default HeaderAccount;
