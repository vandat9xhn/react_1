import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import FashionMallLike from '../../../../../components/is_like/FashionMallLike';
//
import './FsItemIfRName.scss';
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
import DiscountSymbol from '../../../../../../../component/symbol/discount/DiscountSymbol';

//
FsItemIfRName.propTypes = {};

//
function FsItemIfRName({}) {
    //
    const { item_info } = useContext(context_fashion_item);

    //
    return (
        <div className="FsItemIfRName">
            <div className="display-flex space-between">
                <div className="FsItemIfRName_left overflow-hidden">
                    <div className="FsItemIfRName_like font-12px">
                        <FashionMallLike
                            is_like={item_info.is_like}
                            className="FsItemIfRName_like"
                        />
                    </div>

                    <span className="FsItemIfRName_name font-20px label-field text-secondary">
                        {item_info.name}
                    </span>
                </div>

                {IS_MOBILE ? (
                    <div>
                        <DiscountSymbol discount={item_info.discount} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FsItemIfRName;
