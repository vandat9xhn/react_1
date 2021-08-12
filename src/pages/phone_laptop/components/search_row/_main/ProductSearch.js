import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconDiv from '../../../../../component/some_div/icon_div/IconDiv';
//
import ProductFilter from '../filter/_main/ProductFilter';
import ProductSort from '../sort/_main/ProductSort';
//
import './ProductSearch.scss';

//
ProductSearch.propTypes = {
    arr_memories: PropTypes.array,
    arr_rams: PropTypes.array,
    arr_cpus: PropTypes.array,
    arr_oses: PropTypes.array,
    arr_sorts: PropTypes.array,
    //
    choose_memories: PropTypes.array,
    choose_rams: PropTypes.array,
    choose_oses: PropTypes.array,
    choose_cpus: PropTypes.array,
    //
    should_filter: PropTypes.bool,
    handleChooseFilter: PropTypes.func,
    handleStartFilter: PropTypes.func,
    //
    current_sort: PropTypes.number,
    handleChooseSort: PropTypes.func,
};

//
function ProductSearch({
    arr_memories,
    arr_rams,
    arr_sorts,
    arr_cpus,
    arr_oses,

    choose_memories,
    choose_rams,
    choose_cpus,
    choose_oses,
    current_sort,

    should_filter,
    handleChooseFilter,
    handleStartFilter,
    handleChooseSort,
}) {
    //
    const filter_choice_arr = [
        {
            arr: arr_memories,
            choose: choose_memories,
            choose_name: 'choose_memories',
            title: 'Internal memory',
        },
        {
            arr: arr_rams,
            choose: choose_rams,
            choose_name: 'choose_rams',
            title: 'Ram capacity',
        },
        {
            arr: arr_cpus,
            choose: choose_cpus,
            choose_name: 'choose_cpus',
            title: 'CPU',
        },
        {
            arr: arr_oses,
            choose: choose_oses,
            choose_name: 'choose_oses',
            title: 'OS',
        },
    ];

    //
    const [filter_or_sort, setFilterOrSort] = useState('');

    //
    const toggleFilterSort = (which_open) => {
        if (filter_or_sort == which_open) {
            setFilterOrSort('');
        } else {
            setFilterOrSort(which_open);
        }
    };

    //
    function toggleFilter() {
        toggleFilterSort('filter');
    }

    //
    function toggleSort() {
        toggleFilterSort('sort');
    }

    // 
    function onStartFilter() {
        setFilterOrSort('')
        handleStartFilter()
    }
    
    // 
    function onChooseSort(sort_ix) {
        setFilterOrSort('')
        handleChooseSort(sort_ix)
    }

    //
    return (
        <div className="ProductSearch pos-rel bg-primary">
            <div className="display-flex">
                <div>
                    <button
                        className={`ProductSearch__btn btn padding-8px brs-5px ${
                            filter_or_sort == 'filter'
                                ? 'nav-active text-blue'
                                : ''
                        }`}
                        onClick={toggleFilter}
                    >
                        <IconDiv
                            Icon={IconsArrow}
                            y={200}
                            is_reverse={true}
                            size_icon="0.8rem"
                        >
                            Filter
                        </IconDiv>
                    </button>
                </div>

                <div>
                    <button
                        className={`ProductSearch__btn btn padding-8px brs-5px ${
                            filter_or_sort == 'sort'
                                ? 'nav-active text-blue'
                                : ''
                        }`}
                        onClick={toggleSort}
                    >
                        <IconDiv
                            Icon={IconsArrow}
                            y={200}
                            is_reverse={true}
                            size_icon="0.8rem"
                        >
                            Sort
                        </IconDiv>
                    </button>
                </div>
            </div>

            <div
                className={`ProductSearch_filter_sort bg-primary w-100per box-shadow-1 ${
                    filter_or_sort != '' ? '' : 'display-none'
                }`}
            >
                <div
                    className={`ProductSearch_filter brs-5px ${
                        filter_or_sort == 'filter' ? '' : 'display-none'
                    }`}
                >
                    <ProductFilter
                        filter_choice_arr={filter_choice_arr}
                        should_filter={should_filter}
                        handleChooseFilter={handleChooseFilter}
                        handleStartFilter={onStartFilter}
                    />
                </div>

                <div
                    className={`ProductSearch_sort brs-5px ${
                        filter_or_sort == 'sort' ? '' : 'display-none'
                    }`}
                >
                    <ProductSort
                        arr_sorts={arr_sorts}
                        current_sort={current_sort}
                        handleChooseSort={onChooseSort}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductSearch;
