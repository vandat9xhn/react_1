import React from 'react';
//
import IconsProfile from '../../../../../_icons_svg/icons_profile/IconsProfile';
//
import phone_specific from '../../../../../../image/phone_specific.png';
import phone_360deg from '../../../../../../image/phone_360deg.png';
import phone_box from '../../../../../../image/phone_box.png';
import phone_post from '../../../../../../image/phone_post.png';
import phone_config from '../../../../../../image/phone_config.png';
import phone_img_main from '../../../../../../image/phone_img_main.jpg';

//
import {
    getRandomId,
    getRandomNumber,
} from '../../../../../_default/_common/default_id';
import { getRandomVidPic } from '../../../../../_default/_common/default_image';
import { getDefaultArr } from '../../../../../_default/_common/getDefaultArr';
import { getRandomBool } from '../../../../../_default/_common/default_bool';

//
const default_post = (
    <div>
        <h3 className="margin-y-20px">
            Xiaomi chính thức trình làng Redmi 10 (4GB/64GB), chiếc điện thoại
            hài hòa giữa phong cách thiết kế sang trọng, hiệu năng mạnh mẽ với
            vi xử lý Helio G88, màn hình giải trí 90 Hz mượt mà cùng hệ thống 4
            camera chất lượng. Sản phẩm được đánh giá là chiến binh mới đầy tiềm
            năng trong phân khúc thị trường smartphone.
        </h3>

        <h3>Bộ 4 camera AI 50 MP chụp ảnh siêu ấn tượng</h3>

        <p>
            Redmi 10 trang bị cụm camera sau trông khá bắt mắt bao gồm 4 camera
            với độ phân giải “khủng” lần lượt là camera chính 50 MP, camera góc
            siêu rộng 8 MP, 2 camera 2 MP hỗ trợ đo chiều sâu ảnh và chụp ảnh
            macro.
        </p>

        <img className="w-100per" src={getRandomVidPic()} alt="" />

        <p>
            Cảm biến chính độ phân giải cao 50 MP tích hợp công nghệ AI thông
            minh hỗ trợ khả năng lấy nét ấn tượng, giúp ánh sáng được đẩy lên ở
            mức tự nhiên, màu sắc chính xác, giảm thiểu độ nhiễu đồng thời không
            giảm chi tiết của ảnh chụp.
        </p>
        <p>
            Redmi 10 trang bị cụm camera sau trông khá bắt mắt bao gồm 4 camera
            với độ phân giải “khủng” lần lượt là camera chính 50 MP, camera góc
            siêu rộng 8 MP, 2 camera 2 MP hỗ trợ đo chiều sâu ảnh và chụp ảnh
            macro.
        </p>

        <img className="w-100per" src={getRandomVidPic()} alt="" />

        <p>
            Cảm biến chính độ phân giải cao 50 MP tích hợp công nghệ AI thông
            minh hỗ trợ khả năng lấy nét ấn tượng, giúp ánh sáng được đẩy lên ở
            mức tự nhiên, màu sắc chính xác, giảm thiểu độ nhiễu đồng thời không
            giảm chi tiết của ảnh chụp.
        </p>

        <p>
            Cảm biến chính độ phân giải cao 50 MP tích hợp công nghệ AI thông
            minh hỗ trợ khả năng lấy nét ấn tượng, giúp ánh sáng được đẩy lên ở
            mức tự nhiên, màu sắc chính xác, giảm thiểu độ nhiễu đồng thời không
            giảm chi tiết của ảnh chụp.
        </p>
    </div>
);

//
const default_carousel_choice_arr = [
    {
        name: 'specific',
        title: 'Điểm nổi bật',
        title_see_all: 'Xem tất cả điểm nổi bật',
        only_screen: false,
        img: phone_specific,
    },
    {
        name: 'black',
        title: 'Đen',
        title_see_all: 'Xem tất cả hình',
        only_screen: false,
        img: getRandomVidPic(),
    },
    {
        name: 'green',
        title: 'Xanh',
        title_see_all: 'Xem tất cả hình',
        only_screen: false,
        img: getRandomVidPic(),
    },
    {
        name: 'white',
        title: 'Trắng',
        title_see_all: 'Xem tất cả hình',
        only_screen: false,
        img: getRandomVidPic(),
    },
    {
        name: 'open',
        title: 'Hình mở hộp',
        title_see_all: '',
        only_screen: true,
        img: phone_box,
    },
    {
        name: '360',
        title: 'Hình 360 độ',
        title_see_all: '',
        only_screen: true,
        img: phone_360deg,
    },
    {
        name: 'config',
        title: 'Thông số kĩ thuật',
        title_see_all: '',
        only_screen: true,
        img: phone_config,
    },
    {
        name: 'post',
        title: 'Bài viết đánh giá',
        title_see_all: '',
        only_screen: true,
        img: phone_post,
    },
];

//
export const PL_detail_initial_state_obj = () => {
    const promotion_obj = {
        cost: 0,
        end_time: '' || 0,
        data: [
            {
                id: 0,
                info: '',
            },
        ],
    };

    const offer_obj = {
        end_time: '' || 0,
        data: [
            {
                id: 0,
                info: '',
            },
        ],
    };

    return {
        has_fetched: false,
        price_ix: 0,
        product_obj: {} || {
            link_arr: [
                {
                    name: '',
                    link_to: '',
                },
            ],
            id: 0,
            name: '',
            img_main: '',
            new_price: 0,
            old_price: 0,
            discount: '',
            installment: '',

            is_coming: false,
            in_stock: true,

            has_two_price: false,
            new_price_2: 0,
            title_price_2: '',

            carousel_choice_arr: [
                {
                    name: '',
                    title: '',
                    img: '',
                    only_screen,
                },
            ],
            specific_vid_pics: [''],
            has_link_more: false,
            link_more_name: '',
            link_more_to: '',

            policy_arr: [
                {
                    id: 0,
                    Icon: <div></div>,
                    info: '',
                    link_to: '',
                    link_target: '',
                    link_title: '',
                },
            ],
            post: default_post,
            group_arr: [
                [
                    {
                        title: '',
                        is_active: false,
                    },
                ],
            ],
            short_config_arr: [
                {
                    name: '',
                    value: '',
                },
            ],
            installment_arr: [
                {
                    link_to: '',
                    title: '',
                    info: '',
                },
            ],
            province: '',

            promotion_obj: promotion_obj,
            promotion_2_obj: promotion_obj,

            offer_obj: offer_obj,
            offer_2_obj: offer_obj,
        },
    };
};

//
export function PLDetail_handleState({ data = {}, setStateObj = () => {} }) {
    const phone_id = getRandomId();
    const name = 'Điện thoại Xiaomi Redmi 10';
    const old_price = data.old_price;
    const new_price = data.new_price;

    const has_two_price = getRandomBool();

    setStateObj((state_obj) => {
        return {
            ...state_obj,
            has_fetched: true,
            product_obj: {
                link_arr: [
                    {
                        name: 'Điện thoại',
                        link_to: '/phone-laptop-phones',
                    },
                    {
                        name: name,
                        link_to: '/phone-laptop-phones:' + phone_id,
                    },
                ],

                id: phone_id,
                name: name,
                img_main: phone_img_main,
                new_price: new_price,
                old_price: old_price,
                discount: null,
                installment: '0%',

                is_coming: false,
                in_stock: true,

                rating_avg: getRandomNumber(20, 50) / 10,
                count_like: getRandomNumber(10, 200),
                rating_count: getRandomNumber(40, 300),

                has_two_price: has_two_price,
                new_price_2: has_two_price ? new_price - 500000 : null,
                title_price_2: has_two_price ? 'Giá rẻ online' : null,

                carousel_choice_arr: default_carousel_choice_arr,
                specific_vid_pics: getDefaultArr(getRandomVidPic, 3, 15),
                has_link_more: false,
                link_more_name: '',
                link_more_to: '',

                policy_arr: [
                    {
                        id: getRandomId(),
                        Icon: <IconsProfile size_icon="30px" />,
                        info: 'Bảo hành chính hãng điện thoại 18 tháng',
                        link_to: '/phone-laptop',
                        link_target: '_blank',
                        link_title: 'Xem chi tiết',
                    },
                    {
                        id: getRandomId(),
                        Icon: <IconsProfile size_icon="30px" />,
                        info: 'Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Ốp lưng, Cáp Type C, Củ sạc nhanh rời đầu Type',
                        link_to: '',
                        link_target: '',
                        link_title: 'Xem hình',
                    },
                    {
                        id: getRandomId(),
                        Icon: <IconsProfile size_icon="30px" />,
                        info: '1 đổi 1 trong 30 ngày đối với sản phẩm lỗi',
                        link_to: '',
                        link_target: '',
                        link_title: '',
                    },
                ],
                post: default_post,
                group_arr: [
                    [
                        {
                            title: '4G',
                            is_active: true,
                        },
                        {
                            title: '8G',
                            is_active: false,
                        },
                        {
                            title: '16G',
                            is_active: false,
                        },
                    ],
                    [
                        {
                            title: 'Đen',
                            is_active: true,
                        },
                        {
                            title: 'Xanh',
                            is_active: false,
                        },
                        {
                            title: 'Trắng',
                            is_active: false,
                        },
                    ],
                ],
                short_config_arr: [
                    {
                        name: 'Màn hình',
                        value: 'IPS LCD6.5"Full HD+',
                    },
                    {
                        name: 'Hệ điều hành',
                        value: 'Android 11',
                    },
                    {
                        name: 'Camera sau',
                        value: 'Chính 50 MP & Phụ 8 MP, 2 MP, 2 MP',
                    },
                    {
                        name: 'Camera trước',
                        value: '8 MP',
                    },
                    {
                        name: 'Chip',
                        value: 'MediaTek Helio G88 8 nhân',
                    },
                    {
                        name: 'RAM',
                        value: '4 GB',
                    },
                    {
                        name: 'Bộ nhớ trong',
                        value: '64 GB',
                    },
                    {
                        name: 'SIM',
                        value: '2 Nano SIMHỗ trợ 4G',
                    },
                    {
                        name: 'Pin, Sạc',
                        value: '5000 mAh18 W',
                    },
                ],
                installment_arr: [
                    {
                        link_to: '',
                        title: 'MUA TRẢ GÓP 0%',
                        info: 'Duyệt hồ sơ trong 5 phút',
                    },
                    {
                        link_to: '',
                        title: 'TRẢ GÓP  QUA THẺ',
                        info: 'Visa, Mastercard, JCB',
                    },
                ],
                province: 'Hà Nội',

                promotion_obj: {
                    cost: 200000,
                    end_time: new Date().getTime(),
                    note: '(*) Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt (0%, 0.5%, 1%)',
                    condition_arr: [],
                    data: [
                        {
                            id: getRandomId(),
                            info: 'Tặng Phiếu mua hàng Gia dụng trị giá 200,000đ (Khuyến mãi chỉ áp dụng cho các tỉnh/ thành sau giãn cách)',
                        },
                        {
                            id: getRandomId(),
                            info: 'Nhập mã DMX100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng (click xem chi tiết)',
                        },
                    ],
                    gift_arr: [
                        {
                            id: getRandomId(),
                            img: getRandomVidPic(),
                            name: 'Balo laptop HP',
                        },
                    ],
                },

                promotion_2_obj: !has_two_price
                    ? null
                    : {
                          cost: 0,
                          end_time: new Date().getTime(),
                          note: '(*) Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt (0%, 0.5%, 1%)',
                          condition_arr: [
                              {
                                  id: getRandomId(),
                                  condition_str:
                                      'Giao hàng nhanh chóng (tuỳ khu vực).',
                              },
                              {
                                  id: getRandomId(),
                                  condition_str:
                                      'Chính sách bảo hành, đổi trả áp dụng như mua giá thường.',
                              },
                              {
                                  id: getRandomId(),
                                  condition_str:
                                      'Mỗi số điện thoại chỉ mua 1 sản phẩm trong 1 tháng.',
                              },
                          ],
                          data: [
                              {
                                  id: getRandomId(),
                                  info: 'Tặng Phiếu mua hàng Gia dụng trị giá 200,000đ (Khuyến mãi chỉ áp dụng cho các tỉnh/ thành sau giãn cách)',
                              },
                              {
                                  id: getRandomId(),
                                  info: 'Nhập mã DMX100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng (click xem chi tiết)',
                              },
                          ],
                          gift_arr: [],
                      },

                offer_obj: {
                    end_time: new Date().getTime(),
                    data: [
                        {
                            id: getRandomId(),
                            info: 'Tặng suất mua xe đạp Giảm đến 20% (không kèm KM khác) (click xem chi tiết)',
                        },
                        {
                            id: getRandomId(),
                            info: 'Mua kèm Pin sạc dự phòng AVA/AVA+ giảm 40%',
                        },
                        {
                            id: getRandomId(),
                            info: 'Mua Đồng hồ thời trang giảm 40% cho Đồng hồ dưới 3 triệu, giảm 30% cho Đồng hồ từ 3 triệu trở lên',
                        },
                    ],
                },
                offer_2_obj: null,
            },
        };
    });
}
