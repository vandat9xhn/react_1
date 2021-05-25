import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//
import { useScrollDown } from '../../../../../_custom_hooks/useScrollDown';
//
import FetchingDiv from '../../../../../component/some_div/fetching/FetchingDiv';
//
import { handle_API_City_L } from '../../../__handle_api/CityHandleAPI';

import CitySearch from '../search/CitySearch';
import CityItem from '../item/_main/CityItem';
//
import './Cities.scss';
import './CitiesRes.scss';

//
function Cities() {
    //
    const value_search = useRef('');

    //
    const [city_obj, setCityObj, getData_API_at_first] = useScrollDown(
        [],
        (c_count) => handle_API_City_L(value_search.current, c_count),
        0.8
    );

    const { data_arr: cities_arr, is_fetching, has_fetched } = city_obj;

    //
    useEffect(() => {
        document.title = 'City';
        getData_API_at_first();
    }, []);

    /* -------------------- SEARCH ------------------*/

    function handleSearch(new_value_search) {
        value_search.current = new_value_search;
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
                            <FetchingDiv open_fetching={is_fetching} />
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
