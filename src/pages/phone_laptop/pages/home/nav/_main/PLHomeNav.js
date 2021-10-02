import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './PLHomeNav.scss';

//
const NAV_ARR = [
    {
        name: 'Điện thoại',
        label: null,
        link_to: '/phone-laptop-phones',
    },
    {
        name: 'Laptop',
        label: null,
        link_to: '/phone-laptop-laptops',
    },
    {
        name: 'Tablet',
        label: null,
        link_to: '',
    },
    {
        name: 'Phụ kiện',
        label: null,
        link_to: '',
    },
    {
        name: 'Đồng hồ\nthông minh',
        label: null,
        link_to: '',
    },

    {
        name: 'Đồng hồ\nthời trang',
        label: null,
        link_to: '',
    },
    {
        name: 'Pc\nMáy in',
        label: null,
        link_to: '',
    },
    {
        name: 'Máy cũ\ngiá rẻ',
        label: null,
        link_to: '',
    },
    {
        name: 'Sim\nthẻ cào',
        label: '-5%',
        link_to: '',
    },
    {
        name: 'Điện nước\ntrả góp',
        label: null,
        link_to: '',
    },
];

//
PLHomeNav.propTypes = {};

//
function PLHomeNav(props) {
    //
    return (
        <div className="PLHomeNav padding-x-10px text-align-center line-16px font-12px">
            <nav className="display-flex space-between flex-wrap">
                {NAV_ARR.map((item, ix) => (
                    <Link
                        key={ix}
                        className="PLHomeNav_item pos-rel display-block margin-bottom-6px padding-y-5px brs-4px border-blur color-inherit"
                        to={item.link_to}
                    >
                        <div className="wh-100 display-flex-center">
                            {item.name}
                        </div>
                        {item.label ? (
                            <div className="pos-abs right-0 top-0 padding-x-2px brs-3px bg-fashion-mall line-11px font-9px text-white">
                                {item.label}
                            </div>
                        ) : null}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default PLHomeNav;
