import React from 'react';
import PropTypes from 'prop-types';
// 
import Pagination from '../../../../../../component/pagination/_main/Pagination';
// 
import ShopCategory from '../category/ShopCategory';
import ShopProducts from '../products/ShopProducts';
// 
import './ShopBody.scss';

// 
ShopBody.propTypes = {
    list_name: PropTypes.array,
    products: PropTypes.array,
    count_page: PropTypes.number,
    cur_page: PropTypes.number,
    handleChangePage: PropTypes.func,
};

// 
function ShopBody(props) {
    const {list_name, products, count_page, cur_page, handleChangePage} = props;

    // 
    return (
        <div>
            <div>
                <ShopCategory list_name={list_name}/>
            </div>

            <div>
                <ShopProducts products={products}/>
            </div>

            <div className="ShopBody_pagination">
                <Pagination
                    count={count_page}
                    num_side_center={2}
                    current={cur_page}
                    handleChangePage={handleChangePage}
                />
            </div>
        </div>
    );
}

export default ShopBody;