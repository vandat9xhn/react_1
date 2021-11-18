import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FsCIDelSearchMb.propTypes = {
    item_id: PropTypes.number,
    width: PropTypes.number,
    handleDelete: PropTypes.func,
};

//
function FsCIDelSearchMb({ item_id, width, handleDelete }) {
    //
    return (
        <div className="display-flex h-100per font-14px">
            <Link
                to={`/fashion/fb-search?product_same_id=${item_id}`}
                className="h-100per text-white"
            >
                <div
                    className="display-flex-center h-100per text-align-center bg-fashion-border"
                    style={{ width: `${width / 2}px` }}
                >
                    Sản Phẩm tương tự
                </div>
            </Link>

            <div
                className="display-flex-center bg-fashion-red text-white"
                style={{ width: `${width / 2}px` }}
                onClick={handleDelete}
            >
                Xóa
            </div>
        </div>
    );
}

export default FsCIDelSearchMb;
