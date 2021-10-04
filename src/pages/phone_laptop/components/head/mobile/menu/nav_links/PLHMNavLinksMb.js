import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './PLHMNavLinksMb.scss';

//
const NAV_ARR = [
    {
        name: 'Điện thoại',
        link_to: '/phone-laptop-phones',
    },
    {
        name: 'Laptop',
        link_to: '/phone-laptop-laptops',
    },
    {
        name: 'Tablet',
        link_to: '',
    },
    {
        name: 'Phụ kiện',
        link_to: '',
    },

    {
        name: 'Đồng hồ\nthời trang',
        link_to: '',
    },
    {
        name: 'Đồng hồ\nthông minh',
        link_to: '',
    },
    {
        name: 'Máy tính bộ',
        link_to: '',
    },
    {
        name: 'Màn hình\nmáy tính',
        link_to: '',
    },
    {
        name: 'Máy in',
        link_to: '',
    },
    {
        name: 'Mực in',
        link_to: '',
    },

    {
        name: 'Máy cũ\ngiá rẻ',
        link_to: '',
    },
    {
        name: 'Sim, thẻ\ncào',
        link_to: '',
    },
    {
        name: 'Trả góp,\nđiện nước',
        link_to: '',
    },
];

//
PLHMNavLinksMb.propTypes = {};

//
function PLHMNavLinksMb(props) {
    //
    return (
        <div className="PLHMNavLinksMb padding-left-10px padding-right-5px text-align-center">
            <nav className="display-flex flex-wrap">
                {NAV_ARR.map((item, ix) => (
                    <Link
                        key={ix}
                        className="PLHMNavLinksMb_item display-flex-center margin-bottom-5px margin-right-5px border-blur brs-4px color-inherit"
                        to={item.link_to}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default PLHMNavLinksMb;
