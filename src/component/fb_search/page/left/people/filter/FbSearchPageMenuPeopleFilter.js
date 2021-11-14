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
import './FbSearchPageMenuPeopleFilter.scss';

//
const FRIENDS_FRIENDS_SEARCH_KEY = 'friends_friends';

//
FbSearchPageMenuPeopleFilter.propTypes = {};

//
function FbSearchPageMenuPeopleFilter(props) {
    //
    const search_obj = ParseLocationSearch();

    //
    const [state_obj, setStateObj] = useState({
        city_option_arr: [],
        city_option_object: { id: 0, title: '', img: '' },

        edu_option_arr: [],
        edu_option_object: { id: 0, title: '', img: '' },

        work_option_arr: [],
        work_option_object: { id: 0, title: '', img: '' },

        has_fetched: false,
        is_fetching: false,
    });

    const {
        city_option_arr,
        city_option_object,

        edu_option_arr,
        edu_option_object,

        work_option_arr,
        work_option_object,

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
    function getData_chosenOptions() {
        // const data = await handle_API_FbSearchPostOptions_R({
        //     params: { ...ParseLocationSearch() },
        // });
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                city_option_arr: [
                    { id: 1, title: 'Ha Noi, Viet Nam', img: '' },
                ],
                // city_option_object: data.city_option_object,
                edu_option_arr: [
                    {
                        id: 1,
                        title: 'Dai hoc buon long ga ban long vit',
                        img: '',
                    },
                ],
                // edu_option_object: data.edu_option_object,
                // work_option_arr: [],
                // work_option_object: data.work_option_object,
                has_fetched: true,
            };
        });
    }

    // ------

    //
    function switchFriendsFriends() {
        switchLocationSearch({ search_key: FRIENDS_FRIENDS_SEARCH_KEY });
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
        <div className="FbSearchPageMenuPeopleFilter">
            <div className="FbSearchPageMenuPeopleFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSwitch
                    title="Friends of friends"
                    switch_on={!!search_obj[FRIENDS_FRIENDS_SEARCH_KEY]}
                    toggleSwitch={switchFriendsFriends}
                />
            </div>

            <div className="FbSearchPageMenuPeopleFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="people_city"
                    title="City"
                    use_input={true}
                    placeholder="Choose a town or city..."
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={city_option_arr}
                    initial_option_obj={city_option_object}
                />
            </div>

            <div className="FbSearchPageMenuPeopleFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="people_edu"
                    title="Education"
                    use_input={true}
                    placeholder="Choose a school, college or university"
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={edu_option_arr}
                    initial_option_obj={edu_option_object}
                />
            </div>

            <div className="FbSearchPageMenuPeopleFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="people_work"
                    title="Work"
                    use_input={true}
                    placeholder="Choose a company..."
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={work_option_arr}
                    initial_option_obj={work_option_object}
                />
            </div>
        </div>
    );
}

export default FbSearchPageMenuPeopleFilter;
