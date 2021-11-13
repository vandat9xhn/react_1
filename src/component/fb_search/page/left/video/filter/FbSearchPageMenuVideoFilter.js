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
import './FbSearchPageMenuVideoFilter.scss';

//
FbSearchPageMenuVideoFilter.propTypes = {};

//
function FbSearchPageMenuVideoFilter(props) {
    //
    const search_obj = ParseLocationSearch();

    //
    const [state_obj, setStateObj] = useState({
        sort_option_arr: [],
        sort_option_object: { id: 0, title: '', img: '' },

        date_option_arr: [],
        date_option_object: { id: 0, title: '', img: '' },

        has_fetched: false,
        is_fetching: false,
    });

    const {
        date_option_arr,
        date_option_object,

        sort_option_arr,
        sort_option_object,

        has_fetched,
        is_fetching,
    } = state_obj;

    //
    const { switchLocationSearch } = useSwitchLocationSearch();

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
                date_option_arr: [
                    { id: 1, title: 'Today', img: '' },
                    { id: 2, title: 'This week', img: '' },
                    { id: 3, title: 'This month', img: '' },
                ],
                // date_option_object: data.date_option_object,
                sort_option_arr: [{ id: 1, title: 'Most recently', img: '' }],
                // sort_option_object: data.sort_option_object,

                has_fetched: true,
            };
        });
    }

    // ------

    //
    function switchLive() {
        switchLocationSearch({ search_key: 'live' });
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
        <div className="FbSearchPageMenuVideoFilter">
            <div className="FbSearchPageMenuVideoFilter_part">
                <FbSearchPageFilterSelect
                    params_key="sort"
                    title="Sort by"
                    use_input={false}
                    // placeholder=""
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={sort_option_arr}
                    initial_option_obj={sort_option_object}
                />
            </div>

            <div className="FbSearchPageMenuVideoFilter_part">
                <FbSearchPageFilterSelect
                    params_key="date_posted"
                    title="Date posted"
                    use_input={false}
                    // placeholder={}
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={date_option_arr}
                    initial_option_obj={date_option_object}
                />
            </div>

            <div className="FbSearchPageMenuVideoFilter_part">
                <FbSearchPageFilterSwitch
                    title="Live"
                    switch_on={!!search_obj['live']}
                    toggleSwitch={switchLive}
                />
            </div>
        </div>
    );
}

export default FbSearchPageMenuVideoFilter;
