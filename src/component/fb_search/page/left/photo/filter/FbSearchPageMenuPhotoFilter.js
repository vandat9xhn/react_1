import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import CircleLoading from '../../../../../waiting/circle_loading/CircleLoading';
import FbSearchPageFilterSelect from '../../../_components/filter/select/FbSearchPageFilterSelect';
//
import './FbSearchPageMenuPhotoFilter.scss';

//
FbSearchPageMenuPhotoFilter.propTypes = {};

//
function FbSearchPageMenuPhotoFilter(props) {
    //
    const search_obj = ParseLocationSearch();

    //
    const [state_obj, setStateObj] = useState({
        by_option_arr: [],
        by_option_object: { id: 0, title: '', img: '' },

        type_option_arr: [],
        type_option_object: { id: 0, title: '', img: '' },

        location_option_arr: [],
        location_option_object: { id: 0, title: '', img: '' },

        date_option_arr: [],
        date_option_object: { id: 0, title: '', img: '' },

        has_fetched: false,
        is_fetching: false,
    });

    const {
        by_option_arr,
        by_option_object,

        type_option_arr,
        type_option_object,

        location_option_arr,
        location_option_object,

        date_option_arr,
        date_option_object,

        has_fetched,
        is_fetching,
    } = state_obj;

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
                // by_option_object: data.by_option_object,
                // type_option_arr: data.type_option_arr,
                // type_option_object: data.type_option_object,
                // location_option_arr: data.location_option_arr,
                // location_option_object: data.location_option_object,

                has_fetched: true,
            };
        });
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
        <div className="FbSearchPageMenuPhotoFilter">
            <div className="FbSearchPageMenuPhotoFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="posted_by"
                    title="Posted by"
                    use_input={true}
                    placeholder="Choose a source"
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={by_option_arr}
                    initial_option_obj={by_option_object}
                />
            </div>

            <div className="FbSearchPageMenuPhotoFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="type"
                    title="Photo type"
                    use_input={false}
                    // placeholder=""
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={type_option_arr}
                    initial_option_obj={type_option_object}
                />
            </div>

            <div className="FbSearchPageMenuPhotoFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="location"
                    title="Tagged location"
                    use_input={true}
                    placeholder="Choose a location..."
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={location_option_arr}
                    initial_option_obj={location_option_object}
                />
            </div>

            <div className="FbSearchPageMenuPhotoFilter_part fb-search-page-left-filter-item">
                <FbSearchPageFilterSelect
                    params_key="date"
                    title="Date posted"
                    use_input={false}
                    // placeholder=""
                    // ItemComponent={item.ItemComponent}
                    initial_option_arr={date_option_arr}
                    initial_option_obj={date_option_object}
                />
            </div>
        </div>
    );
}

export default FbSearchPageMenuPhotoFilter;
