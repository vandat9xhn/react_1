import React from 'react';
import PropTypes from 'prop-types';
//
import ProductFChoice from '../filter_choice/_main/ProductFChoice';
//
import './ProductFilter.scss';

//
ProductFilter.propTypes = {};

//
function ProductFilter(props) {
    const {
        filter_choice_arr,
        should_filter,
        handleChooseFilter,
        handleStartFilter,
    } = props;

    //
    return (
        <div className="ProductFilter">
            <div className="ProductFilter_row display-flex flex-wrap">
                {filter_choice_arr.map((item, ix) => (
                    <div
                        key={`ProductFilter_choice${ix}`}
                        className="ProductFilter_col"
                    >
                        <ProductFChoice
                            choice_ix={ix}
                            title={item.title}
                            arr={item.arr}
                            choose={item.choose}
                            choose_name={item.choose_name}
                            handleChooseFilter={handleChooseFilter}
                        />
                    </div>
                ))}
            </div>

            <div className="ProductFilter_btn padding">
                <button
                    className={`label-field padding-8px brs-5px ${
                        should_filter
                            ? 'cursor-pointer active-color'
                            : 'opacity-5'
                    }`}
                    onClick={handleStartFilter}
                    disabled={!should_filter}
                >
                    Filter Now
                </button>
            </div>
        </div>
    );
}

export default ProductFilter;
