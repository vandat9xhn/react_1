import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fashion from '../../../../../image/image_loading.svg';

import './FashionCtg.scss';
//
const categories = [
    {name: 'Fashion man', img: fashion.png, link: 'man', },
    {name: 'Fashion woman', img: fashion.png, link: 'woman', },
    {name: 'Laptop & phone', img: fashion.png, link: 'laptop-phone', },
    {name: 'Watch', img: fashion.png, link: 'watch', },
    {name: 'Shoes', img: fashion.png, link: 'shoes', },
    {name: 'Mom & baby', img: fashion.png, link: 'mom-baby', },
    {name: 'Wallet', img: fashion.png, link: 'wallet', },
    {name: 'House', img: fashion.png, link: 'house', },
]

//
FashionCtg.propTypes = {
    
};

//
function FashionCtg(props) {
    return (
        <div>
            <ul className="FashionCtg_list list-none">
                {categories.map((item, ix) => (
                    <li key={`FashionCtg_${ix}`}>
                        <Link to={`/fashion/search?q=${item.link}`}>
                            <div className="FashionCtg_item brs-5px">
                                <div><img src={item.img} alt="" width="50" height="50"/></div>
                                <div className="FashionCtg_item-name">{item.name}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FashionCtg;