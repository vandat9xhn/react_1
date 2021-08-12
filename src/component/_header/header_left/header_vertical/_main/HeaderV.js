import React, { useState } from 'react';
//
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
//
import { data_menu_left } from '../../_data/HeaderLeftData';
//
import HeaderVItem from '../item/HeaderVItem';
import HeaderVItemHasSub from '../item_has_sub/HeaderVItemHasSub';
//
import './HeaderV.scss';

//
function HeaderV() {
    //
    const [open_menu, setOpenMenu] = useState(false);

    //
    function ToggleMenu() {
        setOpenMenu(!open_menu);
    }

    //
    function closeMenu() {
        if (open_menu) {
            setOpenMenu(false);
        }
    }

    //
    return (
        <CloseDiv makeDivHidden={closeMenu}>
            <div className="HeaderV pos-rel">
                <div>
                    <div
                        className={`HeaderV_menu header_menu cursor-pointer ${
                            open_menu ? 'nav-active' : ''
                        }`}
                        onClick={ToggleMenu}
                    >
                        <IconsMenu />
                    </div>
                </div>

                <div
                    className={`HeaderV_hidden header_hidden left-0 ${
                        open_menu ? '' : 'display-none'
                    }`}
                    onClick={closeMenu}
                >
                    <div className="header_hidden-contain">
                        <ul className="list-none">
                            {data_menu_left.map((item, ix) => (
                                <li
                                    key={`HeaderV__item_${ix}`}
                                    className="HeaderV__item"
                                >
                                    {!item.has_sub ? (
                                        <HeaderVItem item={item} />
                                    ) : (
                                        <HeaderVItemHasSub item={item} />
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
