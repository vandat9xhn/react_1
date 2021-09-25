import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// 
import AllProducts from '../../../components/all_product/AllProducts';
// 
import './Laptops.scss';

//
function Laptops() {
    //
    useEffect(() => {
        document.title = "Laptop"
    }, [])

    //
    return (
        <div className="Laptops">
            <AllProducts
                arr_brands={['acer', 'php', 'asus', 'dell', 'mac']}
                arr_prices={['< 6tr', '6tr - 8tr', '8tr - 10tr', '10tr - 12tr', '12tr - 20tr', '> 20tr']}
                arr_memories={['< 200G', '200G - 500G', '500G - 1T', '1T - 1.5T', '> 1.5T']}
                arr_rams={['< 3G', '6 - 8G', '8 - 16G', '16 - 322G', '> 32G']}
                arr_sorts={['Hot product', 'New product', 'Ascending price', 'Descending price']}
                arr_oses={['window', 'mac']}
                arr_cpus={['Intel', 'Core i3', 'Core i5', 'Core i7']}
                type_product="laptop"
            />
        </div>
    );
}


Laptops.propTypes = {

};

export default Laptops;