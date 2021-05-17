import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './FashionLN.scss'
//
const list_names = [
    {name: 'Shop mall',link: 'mall', },
    {name: 'Extra ship',link: 'extra-ship', },
    {name: 'Premium',link: 'premium', },
    {name: 'Brand discount',link: 'brand-discount', },
    {name: 'Brand name',link: 'brand-1', },
    {name: 'Brand name',link: 'brand-1', },
    {name: 'Brand name',link: 'brand-1', },
    {name: 'Brand name',link: 'brand-1', },
    {name: 'Brand name',link: 'brand-1', },
]

//
FashionLN.propTypes = {
    
};

//
function FashionLN(props) {
    
    return (
        <div className="FashionLN">
            <ul className="FashionLN_list list-none">
                {list_names.map((item, ix) => (
                    <li key={`FashionLN_${ix}`} className="FashionLN_item">
                        <Link to={`/fashion/${item.link}`}>
                            <div className="FashionLN_title brs-5px label-field">{item.name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FashionLN;