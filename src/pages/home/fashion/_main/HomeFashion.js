import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { handle_API_FsProduct_L } from '../../../../_handle_api/fashion/FashionHandleAPI';
//
import FavWithLetter from '../../../../component/fav_with_letter/FavWithLetter';
import RowProducts from '../../../fashion/components/row_products/_main/RowProducts';

//
HomeFashion.propTypes = {};

//
function HomeFashion(props) {
    //
    return (
        <div className="HomeFashion font-for-fashion">
            <div className="home-title display-flex align-items-center">
                <div>
                    <Link to="/fashion">
                        <FavWithLetter
                            letter="S"
                            class_letter="color-fashion"
                        />
                    </Link>
                </div>

                <div className="flex-grow-1 padding-left-15px">
                    Mua gì cũng có, giá siêu rẻ, vận chuyển nhanh
                </div>
            </div>

            <div className="pos-rel">
                <RowProducts
                    handle_API_L={handle_API_FsProduct_L}
                    use_limit_count={true}
                    limit_count={20}
                />
            </div>
        </div>
    );
}

export default HomeFashion;
