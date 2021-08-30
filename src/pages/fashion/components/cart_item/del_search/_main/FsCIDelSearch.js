import React from 'react';
import PropTypes from 'prop-types';
//
import IconDown from '../../../../../../_icons_svg/_icon_down/IconDown';
//
import FsCISearch from '../search/FsCISearch';
//
import './FsCIDelSearch.scss';

//
FsCIDelSearch.propTypes = {
    product_id: PropTypes.number,
    handleDelete: PropTypes.func,
};

//
function FsCIDelSearch({
    product_id,
    open_search,
    toggleSearchSame,
    handleDelete,
}) {
    //
    return (
        <div className="FsCIDelSearch">
            <div className="FsCIDelSearch_row">
                <div
                    className="FsCIDelSearch_del text-align-center cursor-pointer"
                    onClick={handleDelete}
                >
                    Xóa
                </div>

                <div
                    className={`flex-between-center padding-4px color-fashion cursor-pointer ${
                        open_search
                            ? 'FsCIDelSearch_same-open bg-primary text-nowrap'
                            : ''
                    }`}
                    onClick={toggleSearchSame}
                >
                    <div
                        className={`margin-right-5px text-align-center ${
                            open_search ? 'text-nowrap' : ''
                        }`}
                    >
                        Tìm kiếm sản phẩm tương tự
                    </div>

                    <div className="FsCIDelSearch_same_icon display-flex-center">
                        <IconDown size_icon="0.5rem" color="currentColor"/>
                    </div>
                </div>
            </div>

            <div
                className={`pos-abs left-0 w-100per z-index-lv1 ${
                    open_search ? '' : 'display-none'
                }`}
            >
                <FsCISearch product_id={product_id} />
            </div>
        </div>
    );
}

export default FsCIDelSearch;
