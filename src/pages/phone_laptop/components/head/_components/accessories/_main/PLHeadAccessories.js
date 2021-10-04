import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import PLHeadList from '../../list/PLHeadList';
//
import './PLHeadAccessories.scss';

//
const PKDD_LINK_ARR = [
    { name: 'Pin sạc dự phòng', link_to: '/phone-laptop' },
    { name: 'Sạc, cáp', link_to: '/phone-laptop' },
    { name: 'Miếng dán màn hình', link_to: '/phone-laptop' },
    { name: 'Ốp lưng điện thoại', link_to: '/phone-laptop' },
    { name: 'Ốp lưng máy tính bảng', link_to: '/phone-laptop' },
    { name: 'Gậy tự sướng', link_to: '/phone-laptop' },
    { name: 'Giá đỡ laptop, điện thoại', link_to: '/phone-laptop' },
    { name: 'Đế, móc điện thoại', link_to: '/phone-laptop' },
    { name: 'Túi chống nước', link_to: '/phone-laptop' },
    { name: 'Túi đựng Airpods', link_to: '/phone-laptop' },
    { name: 'Phụ kiện iPad', link_to: '/phone-laptop' },
];

const PKLT_LINK_ARR = [
    { name: 'Chuột, bàn phím', link_to: '/phone-laptop' },
    { name: 'Thiết bị mạng', link_to: '/phone-laptop' },
    { name: 'Camera, Webcam', link_to: '/phone-laptop' },
    { name: 'Balo, túi chống sốc', link_to: '/phone-laptop' },
    { name: 'Phần mềm', link_to: '/phone-laptop' },
];

const BRAND_LINK_ARR = [
    { name: 'Apple', link_to: '' },
    { name: 'Samsung', link_to: '' },
    { name: 'Sony', link_to: '' },
    { name: 'Anker', link_to: '' },
];

const MUSIC_LINK_ARR = [
    { name: 'Tai nghe', link_to: '' },
    { name: 'Loa', link_to: '' },
];

const STORE_LINK_ARR = [
    { name: 'Thẻ nhớ', link_to: '' },
    { name: 'USB', link_to: '' },
    { name: 'Ổ cứng di động', link_to: '' },
];

const OTHER_LINK_ARR = [
    { name: 'Thiết bị thông minh', link_to: '' },
    { name: 'Phụ kiện ô tô', link_to: '' },
    { name: 'Máy tính cầm tay', link_to: '' },
    { name: 'Máy chiếu, TV Box', link_to: '' },
    { name: 'Quạt mini', link_to: '' },
    { name: 'Pin tiểu, pin điện thoại', link_to: '' },
];

//
PLHeadAccessories.propTypes = {};

//
function PLHeadAccessories(props) {
    //
    return (
        <div className="PLHeadAccessories brs-4px box-shadow-fb font-14px">
            <div className="PLHeadAccessories_row display-flex">
                <div className="PLHeadAccessories_left PLHeadAccessories_PKDD">
                    <PLHeadList
                        title="PHỤ KIỆN DI ĐỘNG"
                        link_arr={PKDD_LINK_ARR}
                    />
                </div>

                <div className="PLHeadAccessories_right display-flex flex-wrap">
                    <div className="PLHeadAccessories_PKLT PLHeadAccessories_right_part">
                        <PLHeadList
                            title="PHỤ KIỆN LAPTOP"
                            link_arr={PKLT_LINK_ARR}
                        />
                    </div>

                    <div className="PLHeadAccessories_brand PLHeadAccessories_right_part">
                        <PLHeadList
                            title={
                                <div>
                                    <span className="margin-right-5px">
                                        THƯƠNG HIỆU HÀNG ĐẦU
                                    </span>

                                    <Link
                                        className="font-12px"
                                        to="/phone-laptop"
                                    >
                                        Xem tất cả
                                    </Link>
                                </div>
                            }
                            link_arr={BRAND_LINK_ARR}
                        />
                    </div>

                    <div className="PLHeadAccessories_right_part">
                        <div className="PLHeadAccessories_TBAT margin-top-10px">
                            <PLHeadList
                                title="THIẾT BỊ ÂM THANH"
                                link_arr={MUSIC_LINK_ARR}
                            />
                        </div>

                        <div className="PLHeadAccessories_TBLT margin-top-10px">
                            <PLHeadList
                                title="THIẾT BỊ LƯU TRỮ"
                                link_arr={STORE_LINK_ARR}
                            />
                        </div>
                    </div>

                    <div className="PLHeadAccessories_right_part margin-top-10px">
                        <PLHeadList
                            title="PHỤ KIỆN KHÁC"
                            link_arr={OTHER_LINK_ARR}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PLHeadAccessories;
