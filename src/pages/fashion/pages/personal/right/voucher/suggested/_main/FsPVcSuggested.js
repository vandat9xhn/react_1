import React from 'react';
import PropTypes from 'prop-types';
//
import FsPVcSuggestedItem from '../item/FsPVcSuggestedItem';
//
import './FsPVcSuggested.scss';

//
FsPVcSuggested.propTypes = {};

//
function FsPVcSuggested({ suggested_arr, handleSave }) {
    //
    return (
        <div className="FsPVcSuggested">
            <div className="FsPVcSuggested_title padding-bottom-20px font-18px font-500">
                Voucher gợi ý
            </div>

            <div>
                <div className="FsPVcSuggested_row display-flex flex-wrap">
                    {suggested_arr.map((item, ix) => (
                        <div key={item.id} className="FsPVcSuggested_item">
                            <FsPVcSuggestedItem
                                ix={ix}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                new_price={item.new_price}
                                discount_str={item.discount_str}
                                min_spend={item.min_spend}
                                // 
                                is_like={item.is_like}
                                is_mall={item.is_mall}
                                is_plus={item.is_plus}
                                // 
                                handleSave={handleSave}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FsPVcSuggested;
