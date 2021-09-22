import React from 'react';
import PropTypes from 'prop-types';
//
import FooterFsAbout from '../about/FooterFsAbout';
import FooterFsFollowUs from '../follow_us/FooterFsFollowUs';
import FooterFsService from '../service/FooterFsService';
//
import './FooterFashion.scss';

//
const SERVICE_LINK_ARR = [
    {
        link_to: '',
        name: 'Trung Tâm Trợ Giúp',
    },
    {
        link_to: '',
        name: 'Blog',
    },
    {
        link_to: '',
        name: 'Mall',
    },
    {
        link_to: '',
        name: 'Hướng Dẫn Mua Hàng',
    },
    {
        link_to: '',
        name: 'Hướng Dẫn Bán Hàng',
    },
    {
        link_to: '',
        name: 'Thanh Toán',
    },
    {
        link_to: '',
        name: 'Xu',
    },
    {
        link_to: '',
        name: 'Vận Chuyển',
    },
    {
        link_to: '',
        name: 'Trả Hàng & Hoàn Tiền',
    },
    {
        link_to: '',
        name: 'Chăm Sóc Khách Hàng',
    },
    {
        link_to: '',
        name: 'Chính Sách Bảo Hành',
    },
];

const ABOUT_LINK_ARR = [
    {
        link_to: '',
        name: 'Giới Thiệu',
    },
    {
        link_to: '',
        name: 'Tuyển Dụng',
    },
    {
        link_to: '',
        name: 'Điều Khoản',
    },
    {
        link_to: '',
        name: 'Chính Sách Bảo Mật',
    },
    {
        link_to: '',
        name: 'Chính Hãng',
    },
    {
        link_to: '',
        name: 'Kênh Người Bán',
    },
    {
        link_to: '',
        name: 'Flash Sales',
    },
    {
        link_to: '',
        name: 'Tiếp Thị Liên Kết',
    },
    {
        link_to: '',
        name: 'Liên Hệ Với Truyền Thông',
    },
];

const FOLLOW_LINK_ARR = [
    {
        link_to: '',
        name: 'FaceBook',
    },
    {
        link_to: '',
        name: 'Instagram',
    },
    {
        link_to: '',
        name: 'LinkedIn',
    },
]

//
FooterFashion.propTypes = {};

//
function FooterFashion(props) {
    //
    return (
        <div className="FooterFashion fashion-width font-for-fashion">
            <div className="display-flex flex-wrap font-12px text-third">
                <div className="FooterFashion_head_col">
                    <FooterFsService link_arr={SERVICE_LINK_ARR} />
                </div>

                <div className="FooterFashion_head_col">
                    <FooterFsAbout link_arr={ABOUT_LINK_ARR} />
                </div>

                <div className="FooterFashion_head_col"></div>

                <div className="FooterFashion_head_col">
                    <FooterFsFollowUs link_arr={FOLLOW_LINK_ARR} target="_blank" />
                </div>

                <div className="FooterFashion_head_col"></div>
            </div>

            <div></div>
        </div>
    );
}

export default FooterFashion;
