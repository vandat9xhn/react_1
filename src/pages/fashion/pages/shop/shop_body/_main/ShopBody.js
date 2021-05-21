import React from 'react';
import PropTypes from 'prop-types';
//
import Pagination from '../../../../../../component/pagination/_main/Pagination';
//
import ShopCategory from '../category/ShopCategory';
import ShopProducts from '../products/ShopProducts';
//
import './ShopBody.scss';
import CircleLoading from '../../../../../../component/waiting/circle_loading/CircleLoading';

//
ShopBody.propTypes = {
    list_name: PropTypes.array,
    products: PropTypes.array,
    count_page: PropTypes.number,
    cur_page: PropTypes.number,
    is_fetching: PropTypes.bool,
    handleChangePage: PropTypes.func,
};

//
function ShopBody(props) {
    const {
        products,
        list_name,
        active_group_ix,
        
        count_page,
        cur_page,
        is_fetching,
        
        changeGroupProducts,
        handleChangePage,
    } = props;

    //
    return (
        <div>
            <div>
                <ShopCategory
                    list_name={list_name}
                    active_ix={active_group_ix}
                    changeGroupProducts={changeGroupProducts}
                />
            </div>

            <div className={is_fetching ? 'display-none' : ''}>
                <ShopProducts products={products} />
            </div>

            <div className="width-fit-content margin-auto">
                <CircleLoading open_fetching={is_fetching} />
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
