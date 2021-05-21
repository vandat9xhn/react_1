import React from 'react';
import PropTypes from 'prop-types';
//
import './ShopCategory.scss';

//
ShopCategory.propTypes = {
    active_ix: PropTypes.number,
};

//
function ShopCategory(props) {
    const { list_name, active_ix, changeGroupProducts } = props;

    // 
    function chooseAll(){
        changeGroupProducts(-1)
    }

    //
    return (
        <div className="ShopCategory bg-primary">
            <div className="ShopCategory_row display-flex">
                <div
                    className={`ShopCategory_item ${
                        active_ix == -1 ? 'ShopCategory_item-active' : ''
                    }`}
                    onClick={chooseAll}
                >
                    All
                </div>

                {list_name.map((item, ix) => (
                    <div
                        key={`ShopCategory_${ix}`}
                        className={`ShopCategory_item ${
                            active_ix == ix ? 'ShopCategory_item-active' : ''
                        }`}
                        onClick={() => changeGroupProducts(ix)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopCategory;
