import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FsShopCategoryMb.scss';

//
FsShopCategoryMb.propTypes = {};

//
function FsShopCategoryMb({ shop_id, category_arr }) {
    //
    return (
        <div className="FsShopCategoryMb bg-primary">
            <div className="list-none">
                {category_arr.map((item, ix) => (
                    <Link
                        key={item.id}
                        to={`/fashion/fb-search?shop_id=${shop_id}`}
                        className="FsShopCategoryMb_item flex-between-center padding-10px"
                    >
                        <div className="display-flex align-items-center">
                            <img
                                className="margin-right-10px object-fit-cover"
                                src={item.img}
                                alt=""
                                width="40"
                                height="40"
                            />

                            <div>
                                <div className="font-14px text-primary">
                                    {item.title}
                                </div>

                                <div className="font-12px text-third">
                                    {item.quantity} sản phẩm
                                </div>
                            </div>
                        </div>

                        <div>
                            <IconsArrow x={200} size_icon="0.75rem" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FsShopCategoryMb;
