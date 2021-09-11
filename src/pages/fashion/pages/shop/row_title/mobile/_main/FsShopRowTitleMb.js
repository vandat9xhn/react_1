import React from 'react';
import PropTypes from 'prop-types';
//
import FsSRowTitleItemMb from '../item/FsSRowTitleItemMb';
// 
import './FsShopRowTitleMb.scss';

//
FsShopRowTitleMb.propTypes = {
    more_title_arr: PropTypes.array,
    title_name: PropTypes.string,
    handleChangeTitle: PropTypes.func,
};

FsShopRowTitleMb.defaultProps = {
    more_title_arr: [],
};

//
function FsShopRowTitleMb({ more_title_arr, title_name, handleChangeTitle }) {
    //
    const title_arr = [
        {
            name: 'shop',
            title: 'Shop',
        },
        {
            name: 'product',
            title: 'Sản phẩm',
        },
        {
            name: 'category',
            title: 'Danh mục',
        },
        {
            name: 'posts',
            title: 'Posts',
        },
        ...more_title_arr,
    ];

    //
    return (
        <div className="FsShopRowTitleMb">
            <div className="FsShopRowTitleMb_row display-flex align-items-center overflow-x-auto scroll-height-0">
                {title_arr.map((item, ix) => (
                    <div key={ix} className="FsShopRowTitleMb_item text-align-center">
                        <FsSRowTitleItemMb
                            name={item.name}
                            title={item.title}
                            is_active={item.name == title_name}
                            handleClick={handleChangeTitle}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsShopRowTitleMb;
