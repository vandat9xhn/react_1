import React from 'react';
import PropTypes from 'prop-types';
//
import IconsMenu from '../../../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import FsSCategoryItem from '../item/FsSCategoryItem';
//
import './FsShopCategory.scss';

//
FsShopCategory.propTypes = {
    category_arr: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            title: PropTypes.string,
        })
    ),
    category_id: PropTypes.number,
    handleChange: PropTypes.func,
};

//
function FsShopCategory({ category_arr, category_id, handleChange }) {
    //
    return (
        <div className="FsShopCategory">
            <h2 className="FsShopCategory_title margin-bottom-10px padding-y-15px font-16px">
                <div className="inline-flex align-items-center">
                    <IconsMenu size_icon="10px" />

                    <span className="margin-left-10px text-cap">Danh mục</span>
                </div>
            </h2>

            <div>
                <ul className="list-none">
                    {[
                        { id: -1, name: 'all', title: 'Sản phẩm' },
                        ...category_arr,
                    ].map((category_obj) => (
                        <li key={category_obj.id}>
                            <FsSCategoryItem
                                id={category_obj.id}
                                name={category_obj.title}
                                is_active={category_obj.id == category_id}
                                handleChange={handleChange}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FsShopCategory;
