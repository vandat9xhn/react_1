import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FilterPhoneLaptop_L } from '../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import ProductBrands from '../brands_row/_main/ProductBrands';
import ProductSearch from '../search_row/_main/ProductSearch';
import ProductContent from '../content/ProductContent';
import GetMore from '../get_more/GetMore';
import ProductCFilter from '../current_filter/_main/ProductCFilter';
import ProductPrices from '../prices_row/ProductPrices';
//
import { initial_phone_arr } from '../../__initial/InitialPhone';
//
import './AllProducts.scss';
import './AllProductsRes.scss';

function addOrRemoveItem(old_arr = [], ix = 0) {
    return old_arr.includes(ix)
        ? old_arr.filter((item) => item != ix)
        : [...old_arr, ix];
}

//
AllProducts.propTypes = {
    arr_brands: PropTypes.arrayOf(PropTypes.string),
    arr_prices: PropTypes.arrayOf(PropTypes.string),
    arr_memories: PropTypes.arrayOf(PropTypes.string),
    arr_rams: PropTypes.arrayOf(PropTypes.string),
    arr_oses: PropTypes.arrayOf(PropTypes.string),
    arr_cpus: PropTypes.arrayOf(PropTypes.string),
    arr_sorts: PropTypes.arrayOf(PropTypes.string),
    //
    type_product: PropTypes.string,
};

AllProducts.defaultProps = {
    type_product: 'phone',
};

//
function AllProducts(props) {
    //
    const {
        type_product,

        arr_brands,
        arr_prices,
        arr_memories,
        arr_rams,
        arr_sorts,
        arr_cpus,
        arr_oses,
    } = props;

    //
    const [product_obj, setProductObj] = useState({
        // current_brands: [-1],
        // current_prices: [-1],
        // current_rams: [-1],
        // current_memories: [-1],
        // current_cpus: [-1],
        // current_oses: [-1],
        // current_sort: 0,

        // choose_memories: [-1],
        // choose_rams: [-1],
        // choose_cpus: [-1],
        // choose_oses: [-1],

        current_brands: [],
        current_prices: [],
        current_rams: [],
        current_memories: [],
        current_cpus: [],
        current_oses: [],
        current_sort: 0,

        choose_memories: [],
        choose_rams: [],
        choose_cpus: [],
        choose_oses: [],

        products: initial_phone_arr,
        has_fetched: false,
        is_fetching: false,
        count: 0,

        should_filter: false,
    });

    const {
        current_brands,
        current_prices,
        current_rams,
        current_memories,
        current_cpus,
        current_oses,
        current_sort,

        choose_memories,
        choose_rams,
        choose_cpus,
        choose_oses,

        products,
        has_fetched,
        is_fetching,
        count,

        should_filter,
    } = product_obj;

    //
    useEffect(() => {
        getFilterSortAllProducts();
    }, []);

    /* ---------------------- COMMON ----------------------------- */

    //
    function ListOrEmpty(new_arr = [''] || [-1], arr = [''] || [-1]) {
        if (new_arr.length >= 1) {
            return new_arr;
        }

        return arr;
    }

    //
    function ListOrEmptyNumber(new_arr = [-1], count_arr) {
        return ListOrEmpty(
            new_arr,
            Array.from({ length: count_arr }, (_, k) => k)
        );
    }

    //
    function ListOrRegex(current_arr = [-1], arr = [''], is_reg = false) {
        const new_arr = current_arr.map((ix) => arr[ix]);

        if (is_reg) {
            return '(?i).*' + new_arr.join('|') + '.*';
        }

        return ListOrEmpty(new_arr, arr);
    }

    // params
    function paramsListFilter(is_get_more = false) {
        const common_params = {
            type_product: type_product,
            in_stock: '',
            current_brands: ListOrRegex(current_brands, arr_brands, false),
            current_prices: ListOrEmpty(current_prices),
            current_sort: ['is_hot', 'date', 'new_price', '-new_price'][
                current_sort
            ],

            page: 1,
            size: has_fetched ? 15 : 20,
            c_count: products.length,
        };

        if (is_get_more) {
            return {
                current_i_memories: ListOrEmptyNumber(
                    current_memories,
                    arr_memories.length
                ),
                current_rams: ListOrEmptyNumber(current_rams, arr_rams.length),
                current_oses: ListOrEmpty(current_oses, arr_oses),
                current_cpus: ListOrRegex(current_cpus, arr_cpus, true),
                ...common_params,
            };
        }

        return {
            current_i_memories: ListOrEmptyNumber(
                choose_memories,
                arr_memories.length
            ),
            current_rams: ListOrEmptyNumber(choose_rams, arr_rams.length),
            current_oses: ListOrEmpty(choose_oses, arr_oses),
            current_cpus: ListOrRegex(choose_cpus, arr_cpus, true),
            ...common_params,
        };
    }

    //
    function handleAddOrRemoveItem(choose_name = '', index = 0, new_obj = {}) {
        setProductObj((product_obj) => ({
            ...product_obj,
            [choose_name]: addOrRemoveItem(product_obj[choose_name], index),
            ...new_obj,
        }));
    }

    /* --------------- GET API --------------- */

    //
    async function getFilterSortAllProducts(new_start_obj = {}) {
        try {
            setProductObj((product_obj) => ({
                ...product_obj,
                has_fetched: false,
                ...new_start_obj,
            }));

            const res = await API_FilterPhoneLaptop_L(paramsListFilter(false));

            const { data, count: new_count } = res.data;

            setProductObj((product_obj) => ({
                ...product_obj,
                products: data,
                count: new_count,

                current_memories: [...product_obj.choose_memories],
                current_rams: [...product_obj.choose_rams],
                current_cpus: [...product_obj.choose_cpus],
                current_oses: [...product_obj.choose_oses],

                should_filter: false,
                has_fetched: true,
            }));
        } catch (e) {
            console.log(e);
        }
    }

    //
    async function handleGetMore() {
        try {
            setProductObj((product_obj) => ({
                ...product_obj,
                is_fetching: true,
            }));

            const res = await API_FilterPhoneLaptop_L(paramsListFilter(true));

            const { data } = res.data;
            setProductObj((product_obj) => ({
                ...product_obj,
                products: [...products, ...data],
                is_fetching: false,
            }));
        } catch (e) {
            console.log(e);
        }
    }

    /* --------------------------- FILTER + SORT ------------------------------ */

    // choose filter
    function handleChooseFilter(choose_name, index) {
        handleAddOrRemoveItem(choose_name, index, {
            should_filter: true,
        });
    }

    // start filter
    function handleStartFilter() {
        getFilterSortAllProducts();
    }

    // choose sort
    function handleChooseSort(index) {
        getFilterSortAllProducts({
            current_sort: index,
        });
    }

    // current item
    function closeCurrentItem(name = '', index = 0) {
        const choose_name = 'choose_' + name;
        const current_name = 'current_' + name;

        getFilterSortAllProducts({
            [choose_name]: addOrRemoveItem(
                product_obj[choose_name],
                product_obj[choose_name][index]
            ),
            [current_name]: addOrRemoveItem(
                product_obj[current_name],
                product_obj[current_name][index]
            ),
        });
    }

    /* --------------------------- PRICE BRAND ------------------------------ */

    //
    function handleChooseBrand(brand_ix) {
        getFilterSortAllProducts({
            current_brands: addOrRemoveItem(current_brands, brand_ix),
        });
    }

    //
    function handleChooseAllBrand() {
        getFilterSortAllProducts({
            current_brands: [],
        });
    }

    //
    function handleChoosePrice(price_ix) {
        getFilterSortAllProducts({
            current_prices: addOrRemoveItem(current_prices, price_ix),
        });
    }

    //
    function handleChooseAllPrice() {
        getFilterSortAllProducts({
            current_prices: [],
        });
    }

    //
    return (
        <div className="AllProducts">
            <div className="AllProducts_banner">
                <div>
                    <ProductBrands
                        arr_brands={arr_brands}
                        current_brands={current_brands}
                        //
                        handleChooseAllBrand={handleChooseAllBrand}
                        handleChooseBrand={handleChooseBrand}
                    />
                </div>

                <div>
                    <ProductPrices
                        arr_prices={arr_prices}
                        current_prices={current_prices}
                        //
                        handleChoosePrice={handleChoosePrice}
                        handleChooseAllPrice={handleChooseAllPrice}
                    />
                </div>
            </div>

            <div className="AllProducts_search">
                <ProductSearch
                    arr_memories={arr_memories}
                    arr_rams={arr_rams}
                    arr_sorts={arr_sorts}
                    arr_oses={arr_oses}
                    arr_cpus={arr_cpus}
                    //
                    choose_memories={choose_memories}
                    choose_rams={choose_rams}
                    choose_oses={choose_oses}
                    choose_cpus={choose_cpus}
                    //
                    handleChooseFilter={handleChooseFilter}
                    should_filter={should_filter}
                    handleStartFilter={handleStartFilter}
                    //
                    handleChooseSort={handleChooseSort}
                    current_sort={current_sort}
                />
            </div>

            <div
                className={
                    current_memories.length +
                    current_rams.length +
                    current_oses.length +
                    current_cpus.length
                        ? ''
                        : 'display-none'
                }
            >
                <ProductCFilter
                    arr_memories={arr_memories}
                    arr_rams={arr_rams}
                    arr_oses={arr_oses}
                    arr_cpus={arr_cpus}
                    //
                    current_memories={current_memories}
                    current_rams={current_rams}
                    current_oses={current_oses}
                    current_cpus={current_cpus}
                    //
                    closeCurrentItem={closeCurrentItem}
                />
            </div>

            <div>
                <ProductContent
                    products={has_fetched ? products : Array(10).fill({})}
                />
            </div>

            <div className={count > products.length ? '' : 'display-none'}>
                <GetMore
                    title_more={`Get more ${count - products.length} products`}
                    handleGetMore={handleGetMore}
                    should_get_more={count > products.length}
                    is_fetching={is_fetching}
                />
            </div>
        </div>
    );
}

export default AllProducts;
