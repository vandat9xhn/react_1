import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconCaret from '../../../../../../../_icons_svg/_icon_caret/IconCaret';
//
import FsSRowTitleMorePc from '../more_title/FsSRowTitleMorePc';
//
import './FsShopRowTitlePc.scss';

//
FsShopRowTitlePc.propTypes = {
    category_arr: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            title: PropTypes.string,
        })
    ),
};

//
function FsShopRowTitlePc({ category_arr }) {
    //
    const category_title_arr = category_arr.map((item) => {
        return {
            link_to: '',
            title: item.title,
        };
    });

    const title_arr = [
        {
            link_to: '',
            title: 'Dạo',
        },
        {
            link_to: '',
            title: 'TẤT CẢ SẢN PHẨM',
        },
        ...category_title_arr.slice(0, 4),
    ];

    //
    return (
        <div className="FsShopRowTitlePc fashion-width padding-top-15px text-555">
            <div className="FsShopRowTitlePc_row display-flex">
                {title_arr.map((item, ix) => (
                    <Link
                        key={ix}
                        to={`/fashion/${item.link_to}`}
                        className="FsShopRowTitlePc_item text-555"
                    >
                        <div
                            className={`FsShopRowTitlePc_item_contain padding-10px text-align-center font-500 text-nowrap ${
                                ix == 0
                                    ? 'FsShopRowTitlePc_item_contain-active'
                                    : ''
                            }`}
                        >
                            {item.title}
                        </div>
                    </Link>
                ))}

                {category_title_arr.length > 4 ? (
                    <div className="FsShopRowTitlePc_more pos-rel">
                        <div className="inline-flex align-items-center padding-y-10px cursor-pointer">
                            <span className="margin-right-5px">Thêm</span>

                            <IconCaret />
                        </div>

                        <div className="FsShopRowTitlePc_more_list display-none pos-abs right-0 top-100per z-index-lv1 padding-top-10px">
                            <FsSRowTitleMorePc
                                more_title_arr={category_title_arr.slice(4)}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FsShopRowTitlePc;
