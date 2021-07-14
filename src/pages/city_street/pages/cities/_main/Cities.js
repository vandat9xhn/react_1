import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//
import { useScrollDownWindow } from '../../../../../_hooks/useScrollDown';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import FetchingDiv from '../../../../../component/some_div/fetching/FetchingDiv';
import ComponentSkeleton from '../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
//
import { handle_API_City_L } from '../../../../../_handle_api/city/CityHandleAPI';
//
import CitySearch from '../search/CitySearch';
import CityItem from '../item/_main/CityItem';
import CityItemSkeleton from '../item/skeleton/CityItemSkeleton';
//
import './Cities.scss';
import './CitiesRes.scss';

//
function Cities() {
    //
    const value_search = useRef('');

    //
    const { data_state: city_obj, getData_API_at_first } = useScrollDownWindow({
        handle_API_L: (c_count) =>
            handle_API_City_L(value_search.current, c_count),
        thresh_hold: 0.8,
    });

    const { data_arr: cities_arr, is_fetching, has_fetched } = city_obj;

    //
    useEffect(() => {
        document.title = 'City';
        value_search.current = ParseLocationSearch()['city'];
        getData_API_at_first();
    }, []);

    /* -------------------- SEARCH ------------------*/

    function handleSearch(new_value_search) {
        value_search.current = new_value_search;
        history.pushState('', '', '?city=' + new_value_search);

        getData_API_at_first();
    }

    //
    return (
        <div>
            <div className={`Cities ${has_fetched ? '' : 'display-none'}`}>
                <div className="Cities_search">
                    <CitySearch handleSearch={handleSearch} />
                </div>

                <div className="Cities_contain">
                    <div className="Cities__cities_arr">
                        {cities_arr.map((item) => (
                            <div
                                className="Cities_item"
                                key={`City_${item.id}`}
                            >
                                <CityItem
                                    city_obj={item}
                                    has_fetched={has_fetched}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="width-fit-content margin-auto">
                        <FetchingDiv is_fetching={is_fetching} />
                    </div>
                </div>

                {localStorage.is_login == 1 && (
                    <Link to="/new-city">
                        <div
                            className="Cities_add-city cursor-pointer hv-opacity"
                            title="Add new city"
                        ></div>
                    </Link>
                )}
            </div>

            <div className={`${has_fetched ? '' : 'Cities_skeleton'}`}>
                <ComponentSkeleton
                    component={<CityItemSkeleton />}
                    has_fetched={has_fetched}
                />
            </div>
        </div>
    );
}

export default Cities;
