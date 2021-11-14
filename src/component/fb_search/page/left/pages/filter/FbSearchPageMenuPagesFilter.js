import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import { useSwitchLocationSearch } from '../../../../../../_hooks/useSwitchLocationSearch';
//
import CircleLoading from '../../../../../waiting/circle_loading/CircleLoading';
import FbSearchPageFilterSwitch from '../../../_components/filter/switch/FbSearchPageFilterSwitch';
import FbSearchPageFilterSelect from '../../../_components/filter/select/FbSearchPageFilterSelect';
//
import './FbSearchPageMenuPagesFilter.scss';

//
FbSearchPageMenuPagesFilter.propTypes = {};

//
function FbSearchPageMenuPagesFilter(props) {
    //
    const search_obj = ParseLocationSearch();

    //
    const [state_obj, setStateObj] = useState({
        location_option_arr: [],
        location_option_object: { id: 0, title: '', img: '' },

        category_option_arr: [],
        category_option_object: { id: 0, title: '', img: '' },

        has_fetched: false,
        is_fetching: false,
    });

    const {
        category_option_arr,
        category_option_object,

        location_option_arr,
        location_option_object,

        has_fetched,
        is_fetching,
    } = state_obj;

    //
    const { switchLocationSearch } = useSwitchLocationSearch({});

    //
    useEffect(() => {
        getData_chosenOptions();
    }, []);

    // -----

    //
    async function getData_chosenOptions() {
        // const data = await handle_API_FbSearchPostOptions_R({
        //     params: { ...ParseLocationSearch() },
        // });
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                category_option_arr: [
                    { id: 1, title: 'Local Business or Place', img: '' },
                    { id: 2, title: 'Brand or Product', img: '' },
                    { id: 3, title: 'Artist, Band or Public Figure', img: '' },
                    { id: 4, title: 'Entertainment', img: '' },
                ],
                // category_option_object: data.category_option_object,
                location_option_arr: [
                    { id: 1, title: 'Ha Noi, Viet Nam', img: '' },
                ],
                // location_option_object: data.location_option_object,

                has_fetched: true,
            };
        });
    }

    // ------

    //
    function switchShops() {
        switchLocationSearch({ search_key: 'shops' });
    }

    //
    function switchVerified() {
        switchLocationSearch({ search_key: 'verified' });
    }

    //
    if (!has_fetched) {
        return (
            <div className="display-flex-center padding-y-20px">
                <CircleLoading is_fetching={true} />
            </div>
        );
    }

    //
    return (
        <div className="FbSearchPageMenuPagesFilter">
            <div className="FbSearchPageMenuPagesFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSwitch
                    title="Shops"
                    switch_on={!!search_obj['shops']}
                    toggleSwitch={switchShops}
                />
            </div>

            <div className="FbSearchPageMenuPagesFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="location"
                    title="Location"
                    use_input={true}
                    placeholder="Choose a town or city..."
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={location_option_arr}
                    initial_option_obj={location_option_object}
                />
            </div>

            <div className="FbSearchPageMenuPagesFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSwitch
                    title="Verified"
                    switch_on={!!search_obj['verified']}
                    toggleSwitch={switchVerified}
                />
            </div>

            <div className="FbSearchPageMenuPagesFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="category"
                    title="Category"
                    use_input={false}
                    // placeholder={}
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={category_option_arr}
                    initial_option_obj={category_option_object}
                />
            </div>
        </div>
    );
}

export default FbSearchPageMenuPagesFilter;
