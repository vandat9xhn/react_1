import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import './ShopCategory.scss';

//
ShopCategory.propTypes = {};

//
function ShopCategory({ list_name }) {
    //
    return (
        <div className="ShopCategory bg-primary">
            <div className="ShopCategory_row display-flex">
                <div>
                    <Link
                        to={location.pathname}
                        className="normal-text"
                    >
                        <div
                            className={`ShopCategory_item label-field ${
                                !ParseLocationSearch()['category']
                                    ? 'ShopCategory_item-active pointer-events-none'
                                    : ''
                            }`}
                        >
                            All
                        </div>
                    </Link>
                </div>

                {list_name.map((item, ix) => (
                    <div key={`ShopCategory_${ix}`}>
                        <Link
                            to={`?category=${item.name}`}
                            className="normal-text"
                        >
                            <div
                                className={`ShopCategory_item label-field ${
                                    item.name ==
                                    ParseLocationSearch()['category']
                                        ? 'ShopCategory_item-active pointer-events-none'
                                        : ''
                                }`}
                            >
                                {item.title}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopCategory;
