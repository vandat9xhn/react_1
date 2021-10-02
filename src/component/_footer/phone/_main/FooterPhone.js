import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../_hooks/useBool';
//
import IconCaret from '../../../../_icons_svg/_icon_caret/IconCaret';
//
import FooterLinkArr from '../../link_arr/FooterLinkArr';
//
import './FooterPhone.scss';

//
const LINK_ARR_1 = [
    { name: 'Lịch sử mua hàng', link_to: '/phone-laptop' },
    { name: 'Cộng tác bán hàng cùng TGDĐ', link_to: '/phone-laptop' },
    { name: 'Tìm hiểu về mua trả góp', link_to: '/phone-laptop' },
    { name: 'Chính sách bảo hành', link_to: '/phone-laptop' },
];

//
const LINK_ARR_1_MORE = [
    { name: 'Chính sách đổi trả', link_to: '/phone-laptop' },
    { name: 'Giao hàng & Thanh toán', link_to: '/phone-laptop' },
    { name: 'Hướng dẫn mua online', link_to: '/phone-laptop' },
    { name: 'Bán hàng doanh nghiệp', link_to: '/phone-laptop' },
    { name: 'Phiếu mua hàng', link_to: '/phone-laptop' },
    { name: 'In hóa đơn điện tử', link_to: '/phone-laptop' },
];

const LINK_ARR_2 = [
    { name: 'Giới thiệu công ty (MWG.vn)', link_to: '/phone-laptop' },
    { name: 'Tuyển dụng', link_to: '/phone-laptop' },
    { name: 'Gửi góp ý, khiếu nại', link_to: '/phone-laptop' },
    { name: 'Tìm siêu thị (2.736 shop)', link_to: '/phone-laptop' },
    { name: 'Xem bản mobile', link_to: '/phone-laptop' },
];

const LINK_ARR_3 = [
    {
        title: 'Gọi mua:',
        phone: '1800.0000',
        time_str: '7:30 - 22:00',
        link_to: '/phone-laptop',
    },
    {
        title: 'Kỹ thuật:',
        phone: '1800.0001',
        time_str: '7:30 - 22:00',
        link_to: '/phone-laptop',
    },
    {
        title: 'Khiếu nại:',
        phone: '1800.0002',
        time_str: '8:00 - 21:30',
        link_to: '/phone-laptop',
    },
    {
        title: 'Bảo hành:',
        phone: '1800.0003',
        time_str: '8:00 - 21:00',
        link_to: '/phone-laptop',
    },
].map((item, ix) => {
    return {
        name: (
            <div className="display-flex">
                <div className="FooterPhone_phone_label">{item.title}</div>

                <div className="margin-right-3px text-blue">{item.phone}</div>

                <div>({item.time_str})</div>
            </div>
        ),
        link_to: item.link_to,
    };
});

//
FooterPhone.propTypes = {};

//
function FooterPhone(props) {
    //
    const { is_true, toggleBool } = useBool();

    //
    return (
        <div className="FooterPhone bg-primary padding-y-15px border-top-blur">
            <div className="FooterPhone_row display-flex flex-wrap fashion-width">
                <div className="FooterPhone_col">
                    <FooterLinkArr
                        link_arr={
                            is_true
                                ? [...LINK_ARR_1, ...LINK_ARR_1_MORE]
                                : LINK_ARR_1
                        }
                    />

                    <div className="margin-bottom-10px cursor-pointer" onClick={toggleBool}>
                        <span className="margin-right-10px">
                            {is_true ? 'Thu gọn' : 'Xem thêm'}
                        </span>

                        <IconCaret
                            size_icon="14px"
                            class_icon={`${is_true ? 'rotate-180' : ''}`}
                        />
                    </div>
                </div>

                <div className="FooterPhone_col">
                    <FooterLinkArr link_arr={LINK_ARR_2} />
                </div>

                <div className="FooterPhone_col">
                    <div className="margin-bottom-10px">
                        <strong>Tổng đài hỗ trợ</strong>

                        <span className="margin-left-3px">(Miễn phí gọi)</span>
                    </div>

                    <FooterLinkArr link_arr={LINK_ARR_3} />
                </div>

                <div className="FooterPhone_col"></div>
            </div>
        </div>
    );
}

export default FooterPhone;
