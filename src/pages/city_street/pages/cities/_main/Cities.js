import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//
import { useObserverShowMore } from '../../../../../_hooks/useObserverShowMore';
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
import { IS_MOBILE } from '../../../../../_constant/Constant';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';

//
function Cities() {
    //
    const ref_fake_elm_end = useRef(null);
    const value_search = useRef('');

    //
    const { data_state, refreshData_API, observerShowMore } =
        useObserverShowMore({
            initial_arr: [],
            handle_API_L: (c_count) =>
                handle_API_City_L(value_search.current, c_count),
        });

    const { data_arr, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        document.title = 'City';
        value_search.current = ParseLocationSearch()['city'];
        refreshData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm_end.current,
            rootMargin: '0px 0px 1000px 0px',
            way_scroll: 'to_bottom',
            margin: 1000,
        });
    }, []);

    /* ---------- SEARCH -----------*/

    function handleSearch(new_value_search) {
        value_search.current = new_value_search;
        history.replaceState('', '', '?city=' + new_value_search);

        refreshData_API();
    }

    //
    return (
        <div>
            <div className={`Cities ${has_fetched ? '' : 'display-none'}`}>
                <div className="Cities_search">
                    <CitySearch handleSearch={handleSearch} />
                </div>

                <div className="Cities_contain">
                    {data_arr.map((city_obj) => (
                        <div key={`${city_obj.id}`} className="Cities_item">
                            <CityItem
                                city_obj={city_obj}
                                has_fetched={has_fetched}
                            />
                        </div>
                    ))}

                    <div className="width-fit-content margin-auto">
                        <FetchingDiv is_fetching={is_fetching} />
                    </div>
                </div>

                {localStorage.is_login == 1 && (
                    <div
                        className={`Cities_add pos-fixed left-0 ${
                            IS_MOBILE ? 'bottom-0' : 'Cities_add-pc trans-x--50per bottom-50per'
                        }`}
                    >
                        <Link to="/new-city">
                            <div
                                className="Cities_add-icon display-flex-center bg-green brs-50 box-shadow-fb cursor-pointer hv-opacity"
                                title="Add new city"
                            >
                                <IconsArrow y={400} />
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            <div className={`${has_fetched ? '' : 'Cities_skeleton'}`}>
                <ComponentSkeleton
                    component={<CityItemSkeleton />}
                    has_fetched={has_fetched}
                />
            </div>

            <div ref={ref_fake_elm_end} className="padding-1px"></div>
        </div>
    );
}

export default Cities;
