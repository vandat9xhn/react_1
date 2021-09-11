import React from 'react';
//
import { default_shop_obj } from '../../../../../_default/fashion/DefaultShop';
import { getRandomId } from '../../../../../_default/_common/default_id';
import { getRandomVidPic } from '../../../../../_default/_common/default_image';
import { getDefaultArr } from '../../../../../_default/_common/getDefaultArr';
//
import { initial_fashion_shop } from '../../../../../_initial/fashion/FashionInitial';
//
import FsShopInfo from '../info/_main/FsShopInfo';
import FsShopRowProducts from '../row_products/FsShopRowProducts';
import FsShopVidPicCarousel from '../vid_pic_carousel/FsShopVidPicCarousel';
import FsShopVidPicSingle from '../vid_pic_single/FsShopVidPicSingle';
import FsShopHotDeal from '../hot_deal/FsShopHotDeal';
import FsShopCombo from '../combo/FsShopCombo';
//
import fire from '../../../../../../image/fire.png';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
export const FS_SHOP_TYPE_COMPONENT_OBJ = {
    special: FsShopVidPicSingle,

    vid_pic: FsShopVidPicSingle,

    carousel: FsShopVidPicCarousel,

    info: FsShopInfo,

    products: FsShopRowProducts,

    hot_deal: FsShopHotDeal,

    combo: FsShopCombo,
};

//
export const FsShop_initial_state_obj = () => {
    return {
        shop_info: initial_fashion_shop(),
        data_type_arr: [
            {
                id: 0,
                type: '',
                data: {},
            },
        ],
        has_fetched: false,

        title_name: 'shop',
    };
};

//
export function FsShop_handleDataState({ data = {}, setStateObj = () => {} }) {
    const shop_info = default_shop_obj();

    const new_vid_pics = shop_info.vid_pics.map((item) => item.vid_pic);
    shop_info.vid_pics = new_vid_pics;

    // 
    const info_obj = IS_MOBILE ? {} : {
        id: getRandomId(),
        type: 'info',
        data: {
            shop_info: shop_info,
        },
    }

    const data_type_arr = [
        {
            id: getRandomId(),
            type: 'special',
            data: {
                vid_pic: getRandomVidPic(),
            },
        },
        ...info_obj,
        {
            id: getRandomId(),
            type: 'vid_pic',
            data: {
                vid_pic: getRandomVidPic(),
            },
        },
        {
            id: getRandomId(),
            type: 'carousel',
            data: {
                vid_pics: getDefaultArr(getRandomVidPic, 2, 4),
            },
        },
        {
            id: getRandomId(),
            type: 'products',
            data: {
                title: (
                    <div>
                        <img src={fire} alt="" width="14" height="14" />

                        <span className="margin-left-5px color-fashion">
                            DEAL HOT{IS_MOBILE ? '' : ', MUA NGAY KẺO LỠ!'}
                        </span>
                    </div>
                ),
                type_id: getRandomId(),
            },
        },
        {
            id: getRandomId(),
            type: 'products',
            data: {
                title: 'Gợi ý cho bạn',
                type_id: getRandomId(),
            },
        },
        {
            id: getRandomId(),
            type: 'hot_deal',
            data: {
                type_id: getRandomId(),
            },
        },
        {
            id: getRandomId(),
            type: 'combo',
            data: {
                title: 'Mua 3 & giảm ₫5.000',
                type_id: getRandomId(),
            },
        },
    ].sort((a, b) => a.id - b.id);

    setStateObj((state_obj = FsShop_initial_state_obj()) => {
        return {
            ...state_obj,
            shop_info: shop_info,
            data_type_arr: data_type_arr,
            has_fetched: true,
        };
    });
}
