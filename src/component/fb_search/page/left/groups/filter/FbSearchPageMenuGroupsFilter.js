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
import './FbSearchPageMenuGroupsFilter.scss';

//
FbSearchPageMenuGroupsFilter.propTypes = {};

//
function FbSearchPageMenuGroupsFilter(props) {
    //
    const search_obj = ParseLocationSearch();

    //
    const [state_obj, setStateObj] = useState({
        city_option_arr: [],
        city_option_object: { id: 0, title: '', img: '' },

        has_fetched: false,
        is_fetching: false,
    });

    const {
        city_option_arr,
        city_option_object,

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
                city_option_arr: [
                    { id: 1, title: 'Ha Noi, Viet Nam', img: '' },
                ],
                // city_option_object: data.city_option_object,

                has_fetched: true,
            };
        });
    }

    // ------

    //
    function switchPublic() {
        switchLocationSearch({ search_key: 'public' });
    }

    //
    function switchMyGroup() {
        switchLocationSearch({ search_key: 'joined' });
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
        <div className="FbSearchPageMenuGroupsFilter">
            <div className="FbSearchPageMenuGroupsFilter_part">
                <FbSearchPageFilterSelect
                    params_key="city"
                    title="Location"
                    use_input={true}
                    placeholder="Choose a town or city..."
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={city_option_arr}
                    initial_option_obj={city_option_object}
                />
            </div>

            <div className="FbSearchPageMenuGroupsFilter_part">
                <FbSearchPageFilterSwitch
                    title="Public groups"
                    switch_on={!!search_obj['public']}
                    toggleSwitch={switchPublic}
                />
            </div>

            <div className="FbSearchPageMenuGroupsFilter_part">
                <FbSearchPageFilterSwitch
                    title="My groups"
                    switch_on={!!search_obj['joined']}
                    toggleSwitch={switchMyGroup}
                />
            </div>
        </div>
    );
}

export default FbSearchPageMenuGroupsFilter;
