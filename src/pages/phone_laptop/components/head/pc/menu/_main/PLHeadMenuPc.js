import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconCaret from '../../../../../../../_icons_svg/_icon_caret/IconCaret';
import IconsProfile from '../../../../../../../_icons_svg/icons_profile/IconsProfile';
//
import PLHeadAccessories from '../../../_components/accessories/_main/PLHeadAccessories';
import PLHeadPcPrinter from '../../../_components/pc_printer/PLHeadPcPrinter';
//
import './PLHeadMenuPc.scss';

//
const MENU_ARR = [
    {
        Icon: <IconsProfile size_icon="18px" y={200} />,
        name: 'Điện thoại',
        link_to: '/phone-laptop-phones',
        class_main: '',
        has_sub: false,
        sub_elm: null,
        class_sub: '',
        has_label: false,
        label: '',
    },
    {
        Icon: null,
        name: 'Laptop',
        link_to: '/phone-laptop-laptops',
        class_main: '',
        has_sub: false,
        sub_elm: null,
        class_sub: '',
        has_label: false,
        label: '',
    },
    {
        Icon: null,
        name: 'Tablet',
        link_to: '/phone-laptop',
        class_main: '',
        has_sub: false,
        sub_elm: null,
        class_sub: '',
        has_label: false,
        label: '',
    },
    {
        Icon: null,
        name: 'Phụ kiện',
        link_to: '',
        class_main: 'PLHeadMenuPc_item-pk',
        has_sub: true,
        sub_elm: <PLHeadAccessories />,
        class_sub: 'PLHeadMenuPc_sub-pk pos-abs left-0 top-100per',
        has_label: false,
        label: '',
    },
    {
        Icon: null,
        name: 'Đồng hồ thông minh',
        link_to: '',
        class_main: '',
        has_sub: false,
        sub_elm: null,
        class_sub: '',
        has_label: false,
        label: '',
    },

    {
        Icon: null,
        name: 'Đồng hồ thời trang',
        link_to: '',
        class_main: '',
        has_sub: false,
        sub_elm: null,
        class_sub: '',
        has_label: false,
        label: '',
    },
    {
        Icon: null,
        name: 'PC, Máy in',
        link_to: '',
        class_main: 'PLHeadMenuPc_item-printer',
        has_sub: true,
        sub_elm: <PLHeadPcPrinter />,
        class_sub: 'PLHeadMenuPc_sub-printer pos-abs left-0 top-100per',
        has_label: false,
        label: '',
    },
    {
        Icon: null,
        name: 'Máy cũ giá rẻ',
        link_to: '',
        class_main: '',
        has_sub: false,
        sub_elm: null,
        class_sub: '',
        has_label: false,
        label: '',
    },
    {
        Icon: null,
        name: 'Sim, Thẻ cào',
        link_to: '',
        class_main: '',
        has_sub: false,
        sub_elm: null,
        class_sub: '',
        has_label: true,
        label: 'Giảm 5%',
    },
    {
        Icon: null,
        name: 'Trả góp, điện nước',
        link_to: '',
        class_main: '',
        has_sub: false,
        sub_elm: null,
        class_sub: '',
        has_label: false,
        label: '',
    },
];

//
PLHeadMenuPc.propTypes = {};

//
function PLHeadMenuPc(props) {
    //
    return (
        <div className="PLHeadMenuPc bg-gold line-18px font-14px font-500">
            <ul className="display-flex list-none fashion-width">
                {MENU_ARR.map((item, ix) => (
                    <li
                        key={ix}
                        className={`PLHeadMenuPc_item pos-rel flex-grow-1 ${item.class_main}`}
                    >
                        <Link
                            className="display-flex-center h-100per padding-y-8px color-inherit"
                            to={item.link_to}
                        >
                            {item.Icon ? item.Icon : null}

                            <span className="margin-left-5px">{item.name}</span>

                            {item.has_sub ? (
                                <IconCaret
                                    size_icon="14px"
                                    stroke="currentColor"
                                    class_icon="margin-left-5px"
                                />
                            ) : null}
                        </Link>

                        {item.has_label ? (
                            <div className="pos-abs right-0 top-0 padding-top-2px pointer-events-none">
                                <div className="PLHeadMenuPc_label_contain pos-rel padding-x-3px brs-4px bg-fashion-mall text-white font-9px line-13px">
                                    {item.label}
                                </div>
                            </div>
                        ) : null}

                        {item.has_sub ? (
                            <div
                                className={`PLHeadMenuPc_sub display-none z-index-lv1 bg-primary ${item.class_sub}`}
                            >
                                {item.sub_elm}
                            </div>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLHeadMenuPc;
