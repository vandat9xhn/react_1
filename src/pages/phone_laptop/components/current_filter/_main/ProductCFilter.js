import React from 'react';
import PropTypes from 'prop-types';
//
import ProductCFType from '../type/_main/ProductCFType';
// 
import './ProductCFilter.scss';

// 
ProductCFilter.propTypes = {
    arr_memories: PropTypes.array,
    arr_rams: PropTypes.array,
    arr_oses: PropTypes.array,
    arr_cpus: PropTypes.array,
    // 
    current_memories: PropTypes.array,
    current_rams: PropTypes.array,
    current_oses: PropTypes.array,
    current_cpus: PropTypes.array,
    //
    closeCurrentItem: PropTypes.func,
};

//
function ProductCFilter(props) {
    const {
        arr_memories,
        arr_rams,
        arr_oses,
        arr_cpus,

        current_rams,
        current_memories,
        current_oses,
        current_cpus,

        closeCurrentItem,
    } = props;

    const current_arr = [
        {
            current: current_memories,
            arr: arr_memories,
            current_name: 'memories',
            title: 'Memory',
        },
        {
            current: current_rams,
            arr: arr_rams,
            current_name: 'rams',
            title: 'RAM',
        },
        {
            current: current_oses,
            arr: arr_oses,
            current_name: 'oses',
            title: 'OS',
        },
        {
            current: current_cpus,
            arr: arr_cpus,
            current_name: 'cpus',
            title: 'CPU',
        },
    ];

    // 
    return (
        <div className="ProductCFilter">
            <div className="display-flex">
                {current_arr.map((item, i) => (
                    <div
                        key={`ProductCFilter_current_arr${i}`}
                        className={item.current.length ? 'ProductCFilter_type' : 'display-none'}
                    >
                        <ProductCFType
                            current={item.current}
                            title={item.title}
                            current_name={item.current_name}
                            arr={item.arr}
                            closeCurrentItem={closeCurrentItem}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCFilter;
