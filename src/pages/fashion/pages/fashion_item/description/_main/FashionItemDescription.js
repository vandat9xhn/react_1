import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import FashionBreadCrumb from '../../../../components/breadcrumb/FashionBreadCrumb';
//
import './FashionItemDescription.scss';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

//
FashionItemDescription.propTypes = {
    // categories: PropTypes.arrayOf(PropTypes.string),
    // quantity: PropTypes.string,
    // place: PropTypes.string,
    // description: PropTypes.string,
};

//
function FashionItemDescription({}) {
    //
    const { item_info, shop_info } = useContext(context_fashion_item);

    const { categories, quantity, description, attributes } = item_info;
    const { place } = shop_info;

    //
    return (
        <div
            className={`FashionItemDescription bg-primary ${
                IS_MOBILE ? 'font-14px' : 'padding-16px'
            }`}
        >
            <div>
                <h2
                    className={`padding-8px font-400 ${
                        IS_MOBILE
                            ? 'font-14px'
                            : 'margin-bottom-16px bg-screen text-secondary font-18px text-upper'
                    }`}
                >
                    Chi tiết sản phẩm
                </h2>

                <div
                    className={`FashionItemDescription_content padding-8px ${
                        IS_MOBILE ? '' : 'margin-bottom-16px'
                    }`}
                >
                    <div
                        className={`${
                            IS_MOBILE ? 'display-none' : 'display-flex'
                        }`}
                    >
                        <div className="FashionItemDescription_label fashion-item-label text-third">
                            Danh Mục
                        </div>

                        <div>
                            <FashionBreadCrumb
                                arr={categories.map(
                                    (item) => item.display_name
                                )}
                            />
                        </div>
                    </div>

                    {[
                        ...attributes,
                        {
                            name: 'Kho hàng',
                            value: quantity,
                        },
                        {
                            name: 'Gửi từ',
                            value: place,
                        },
                    ].map((item, ix) => (
                        <div key={ix} className="display-flex">
                            <div className="FashionItemDescription_label fashion-item-label text-third">
                                {item.name}
                            </div>

                            <div className="text-secondary">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2
                    className={`padding-8px font-400 ${
                        IS_MOBILE
                            ? 'font-14px'
                            : 'margin-bottom-16px bg-screen text-secondary font-18px text-upper'
                    }`}
                >
                    Mô tả sản phẩm
                </h2>

                <div className="FashionItemDescription_content padding-8px text-secondary">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default FashionItemDescription;
