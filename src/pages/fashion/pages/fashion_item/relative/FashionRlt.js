import React from 'react';
import PropTypes from 'prop-types';
// 
import RowProducts from '../../../components/row_products/RowProducts';
// 
import './FashionRlt.scss';

//
FashionRlt.propTypes = {
    products: PropTypes.array,
};

FashionRlt.defaultProps = {
    products: [{
        vid_pics: [{
            vid_pic: '',
        }]
    }],
}

//
function FashionRlt(props) {
    const {products} = props;

    // 
    return (
        <div className="FashionRlt">
            <RowProducts list_products={[products, products]}>
                <div>
                    OTHER PRODUCTS:
                </div>
            </RowProducts>
            <br/>

            <RowProducts list_products={[products, products]}>
                <div>
                    RELATIVE PRODUCTS:
                </div>
            </RowProducts>
        </div>
    );
}

export default FashionRlt;