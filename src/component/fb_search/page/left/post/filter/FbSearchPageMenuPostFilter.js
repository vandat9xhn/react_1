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
import './FbSearchPageMenuPostFilter.scss';

//
FbSearchPageMenuPostFilter.propTypes = {};

//
function FbSearchPageMenuPostFilter(props) {
    //
    const search_obj = ParseLocationSearch();

    //
    const [state_obj, setStateObj] = useState({
        date_option_arr: [],
        date_option_object: { id: 0, title: '', img: '' },

        from_option_arr: [],
        from_option_object: { id: 0, title: '', img: '' },

        location_option_arr: [],
        location_option_object: { id: 0, title: '', img: '' },

        has_fetched: false,
        is_fetching: false,
    });

    const {
        date_option_arr,
        date_option_object,

        from_option_arr,
        from_option_object,

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
                date_option_arr: [
                    { id: 2021, title: 2021, img: '' },
                    { id: 2020, title: 2020, img: '' },
                    { id: 2019, title: 2019, img: '' },
                    { id: 2018, title: 2018, img: '' },
                    { id: 2017, title: 2017, img: '' },
                    { id: 2016, title: 2016, img: '' },
                    { id: 2015, title: 2015, img: '' },
                ],
                // date_option_object: data.date_option_object,
                // from_option_arr: data.from_option_arr,
                // from_option_object: data.from_option_object,
                // location_option_arr: data.location_option_arr,
                // location_option_object: data.location_option_object,

                has_fetched: true,
            };
        });
    }

    // ------

    //
    function switchRecently() {
        switchLocationSearch({ search_key: 'recently_posts' });
    }

    //
    function switchSeen() {
        switchLocationSearch({ search_key: 'seen_posts' });
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
        <div className="FbSearchPageMenuPostFilter">
            <div className="FbSearchPageMenuPostFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSwitch
                    title="Recently posts"
                    switch_on={!!search_obj['recently_posts']}
                    toggleSwitch={switchRecently}
                />
            </div>

            <div className="FbSearchPageMenuPostFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSwitch
                    title="Posts you've seen"
                    switch_on={!!search_obj['seen_posts']}
                    toggleSwitch={switchSeen}
                />
            </div>

            <div className="FbSearchPageMenuPostFilter_part fb-search-page-left-filter-item">
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

            <div className="FbSearchPageMenuPostFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="posts_from"
                    title="Posts from"
                    use_input={true}
                    placeholder="Choose a source"
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={from_option_arr}
                    initial_option_obj={from_option_object}
                />
            </div>

            <div className="FbSearchPageMenuPostFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="location"
                    title="Tagged location"
                    use_input={true}
                    placeholder="Choose a location"
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={location_option_arr}
                    initial_option_obj={location_option_object}
                />
            </div>
        </div>
    );
}

export default FbSearchPageMenuPostFilter;
