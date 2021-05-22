import React, { useState } from 'react';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';
//
import { data_menu_left } from '../../_data/HeaderLeftData';

import HeaderVItem from '../item/HeaderVItem';
import HeaderVItemHasSub from '../item_has_sub/HeaderVItemHasSub';
//
import './HeaderV.scss';

//
function HeaderV() {
    const [open_menu, setOpenMenu] = useState(false);

    /* ---------------------- MENU --------------------- */

    const ToggleMenu = () => {
        setOpenMenu(!open_menu);
    };

    const closeMenu = () => {
        if (open_menu) {
            setOpenMenu(false);
        }
    };

    /* ---------------------- FUNC CLICK LINK --------------------- */

    const changeURL = () => {
        closeMenu();
    };

    //
    return (
        <CloseDiv makeDivHidden={closeMenu}>
            <div className="HeaderV" onClick={changeURL}>
                <div
                    className={`HeaderV_menu header_menu ${
                        open_menu ? 'nav-active' : ''
                    }`}
                    onClick={ToggleMenu}
                >
                    <div className="header_item">
                        <IconsMenu />
                    </div>
                </div>

                <div
                    className={`header_hidden HeaderV_hidden ${
                        open_menu ? '' : 'display-none'
                    }`}
                >
                    <div className="header_hidden-contain">
                        <ul className="list-none">
                            {data_menu_left.map((item, ix) => (
                                <li
                                    className="HeaderV__item"
                                    key={`HeaderV__item_${ix}`}
                                >
                                    {!item.has_sub ? (
                                        <HeaderVItem item={item} />
                                    ) : (
                                        <HeaderVItemHasSub
                                            title={item.title}
                                            sub_list={item.sub_list}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default HeaderV;
