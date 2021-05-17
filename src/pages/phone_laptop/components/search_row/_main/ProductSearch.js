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
function ProductSearch(props) {
    //
    const {
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
    } = props;

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
    return (
        <div className="ProductSearch">
            <div className="display-flex">
                <div
                    className={`ProductSearch__btn brs-5px ${
                        filter_or_sort == 'filter' ? 'nav-active ' : ''
                    }`}
                    onClick={toggleFilter}
                >
                    <IconDiv Icon={IconsArrow} y={200} is_reverse={true} size_icon="1rem">
                        <div
                            className={
                                filter_or_sort == 'filter' ? 'active-color' : ''
                            }
                        >
                            Filter
                        </div>
                    </IconDiv>
                </div>

                <div
                    className={`ProductSearch__btn brs-5px ${
                        filter_or_sort == 'sort' ? 'nav-active ' : ''
                    }`}
                    onClick={toggleSort}
                >
                    <IconDiv Icon={IconsArrow} y={200} is_reverse={true} size_icon="1rem">
                        <div
                            className={
                                filter_or_sort == 'sort' ? 'active-color' : ''
                            }
                        >
                            Sort
                        </div>
                    </IconDiv>
                </div>
            </div>

            <div
                className={`ProductSearch_filter brs-5px ${
                    filter_or_sort == 'filter' ? '' : 'display-none'
                }`}
            >
                <ProductFilter
                    filter_choice_arr={filter_choice_arr}
                    should_filter={should_filter}
                    handleChooseFilter={handleChooseFilter}
                    handleStartFilter={handleStartFilter}
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
                    handleChooseSort={handleChooseSort}
                />
            </div>
        </div>
    );
}

export default ProductSearch;
