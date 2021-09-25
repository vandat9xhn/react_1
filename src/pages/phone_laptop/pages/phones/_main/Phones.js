import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Phones.scss';
import AllProducts from '../../../components/all_product/AllProducts';

//
function Phones(){
    //
    useEffect(() => {
        document.title = "Phone"
    }, [])

    //
    return (
        <div className="Phones">
            <AllProducts
                arr_brands={['samsung', 'iphone', 'oppo', 'xiaomi', 'realme', 'nokia', 'vivo']}
                arr_prices={['< 2tr', '2tr- 4tr', '4tr - 8tr', '8tr - 12tr', '12tr - 20tr', '> 20tr']}
                arr_memories={['< 4G', '4 - 8G', '8 - 16G', '16 - 32G', '> 32G']}
                arr_rams={['< 2G', '2 - 4G', '4 - 6G', '> 6G']}
                arr_sorts={['Hot product', 'New product', 'Ascending price', 'Descending price']}
                arr_oses={['android', 'iphone']}
                arr_cpus={['Snapdragon', 'Helio', '4 nhân', '8 nhân']}
            />
        </div>
    );
}

Phones.propTypes = {

};

export default Phones;