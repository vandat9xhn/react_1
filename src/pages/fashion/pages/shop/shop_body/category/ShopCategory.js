import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import './ShopCategory.scss';

// 
ShopCategory.propTypes = {
    
};

// 
function ShopCategory(props) {
    const {list_name} = props;
    // 
    const [active_ix, setActiveIx] = useState(-1)

    // 
    return (
        <div className="ShopCategory">
            <div className="ShopCategory_row display-flex">
                <div className={`ShopCategory_block ${active_ix == -1 ? 'ShopCategory_block-active' : ''}`}>All products</div>

                {list_name.map((item, ix) => (
                    <div className="ShopCategory_block" key={`ShopCategory_${ix}`}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopCategory;