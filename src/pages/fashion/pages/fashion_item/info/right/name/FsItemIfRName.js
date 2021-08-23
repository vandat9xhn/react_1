import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import FashionIsLike from '../../../../../components/is_like/FashionIsLike';
//
import './FsItemIfRName.scss';

//
FsItemIfRName.propTypes = {};

//
function FsItemIfRName({}) {
    //
    const { item_info } = useContext(context_fashion_item);

    //
    return (
        <div className="FsItemIfRName overflow-hidden">
            <div className="FsItemIfRName_like font-12px">
                <FashionIsLike
                    is_like={item_info.is_like}
                    className="FsItemIfRName_like"
                />
            </div>

            <span className="FsItemIfRName_name font-20px label-field text-secondary">
                {item_info.name}
            </span>
        </div>
    );
}

export default FsItemIfRName;
