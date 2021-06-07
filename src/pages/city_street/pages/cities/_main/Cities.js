import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//
import { useScrollDownWindow } from '../../../../../_custom_hooks/useScrollDown';
// 
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import FetchingDiv from '../../../../../component/some_div/fetching/FetchingDiv';
//
import { handle_API_City_L } from '../../../__handle_api/CityHandleAPI';
//
import './Cities.scss';
import './CitiesRes.scss';
// 
import CitySearch from '../search/CitySearch';
import CityItem from '../item/_main/CityItem';

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
        value_search.current = ParseLocationSearch()['city']
        getData_API_at_first();
    }, []);

    /* -------------------- SEARCH ------------------*/

    function handleSearch(new_value_search) {
        value_search.current = new_value_search;
        history.pushState('', '', '?city=' + new_value_search)

        getData_API_at_first();
    }

    //
    return (
        <div className="Cities">
            <div className="Cities_search">
                <CitySearch handleSearch={handleSearch} />
            </div>

            <div className="City_contain">
                <div className="City_row">
                    <div className="City_col">
                        <div className="Cities__cities_arr">
                            {(has_fetched ? cities_arr : [{}]).map((item) => (
                                <CityItem
                                    key={`City_${item.id}`}
                                    city_obj={item}
                                />
                            ))}
                        </div>

                        <div className="width-fit-content margin-auto">
                            <FetchingDiv is_fetching={is_fetching} />
                        </div>
                    </div>
                </div>
            </div>

            {/* link to add new city */}
            {localStorage.is_login == 1 && (
                <Link to="/new-city">
                    <div
                        className="Cities_add-city cursor-pointer hv-opacity"
                        title="Add new city"
                    ></div>
                </Link>
            )}
        </div>
    );
}

export default Cities;
