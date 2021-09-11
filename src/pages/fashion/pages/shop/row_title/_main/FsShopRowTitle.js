import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import FsShopRowTitlePc from '../pc/_main/FsShopRowTitlePc';
import FsShopRowTitleMb from '../mobile/_main/FsShopRowTitleMb';

//
FsShopRowTitle.propTypes = {};

//
function FsShopRowTitle({
    category_arr,

    more_title_arr,
    title_name,
    handleChangeTitle,
}) {
    //
    return (
        <div className="FsShopRowTitle">
            {IS_MOBILE ? (
                <FsShopRowTitleMb
                    more_title_arr={more_title_arr}
                    title_name={title_name}
                    handleChangeTitle={handleChangeTitle}
                />
            ) : (
                <FsShopRowTitlePc category_arr={category_arr} />
            )}
        </div>
    );
}

export default FsShopRowTitle;
