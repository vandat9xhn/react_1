import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
import { handle_API_City_L } from '../../../__handle_api/CityHandleAPI';
import { WindowScrollDownBool } from '../../../../../_some_function/ScrollDown';
//
import FetchingDiv from '../../../../../component/some_div/fetching/FetchingDiv';
//
import CitySearch from '../search/CitySearch';
import CityItem from '../item/_main/CityItem';
//
import './Cities.scss';
import './CitiesRes.scss';

//
class Cities extends Component {
    state = {
        cities_arr: [],
        count: 0,
        has_fetched: false,
        fetching_city: false,
    };

    componentDidMount() {
        document.title = 'City and street';
        this.pos_scroll = 0;
        this.just_fetching = true;
        this.is_max = false;
        this.search_what = '';
        //
        this.getData_API_Cities();
        window.addEventListener('scroll', this.windowScroll);
    }

    //
    componentWillUnmount() {
        window.removeEventListener('scroll', this.windowScroll);
    }

    // scroll
    windowScroll = () => {
        if (
            WindowScrollDownBool(
                this.pos_scroll,
                this.just_fetching,
                this.is_max,
                0.8
            )
        ) {
            this.just_fetching = true;
            this.pos_scroll = window.pageYOffset;
            this.getData_API_Cities(this.search_what);
        }
    };

    /* ----------------------------------- API -------------------------------- */

    // get API
    getData_API_Cities = async (search = '') => {
        const { has_fetched, cities_arr, count } = this.state;

        has_fetched &&
            this.setState({
                fetching_city: true,
            });
        //
        const [data, new_count] = await handle_API_City_L(
            search,
            cities_arr.length
        );

        cities_arr.push(...data);
        this.setState({
            count: has_fetched ? count : new_count,
            fetching_city: false,
            has_fetched: true,
        });
        //
        has_fetched && (this.is_max = cities_arr.length >= count);
        this.just_fetching = false;
    };

    /* -------------------- SEARCH ------------------*/

    handleSearch = (new_value_search) => {
        const value_search = new_value_search.trim();
        //
        if (value_search !== this.search_what) {
            this.search_what = value_search;
            this.setState({
                cities_arr: [],
                count: 0,
                has_fetched: false,
            });

            setTimeout(() => {
                this.getData_API_Cities(value_search);
            }, 1);
        }
    };

    render() {
        const { has_fetched, cities_arr, fetching_city } = this.state;

        //
        return (
            <div className="Cities">
                <div className="Cities_search">
                    <CitySearch handleSearch={this.handleSearch} />
                </div>

                <div className="City_contain">
                    <div className="City_row">
                        <div className="City_col">
                            <div className="Cities__cities_arr">
                                {(has_fetched ? cities_arr : [{}]).map(
                                    (item, index) => (
                                        <CityItem
                                            key={`City_${index}`}
                                            city_obj={item}
                                        />
                                    )
                                )}
                            </div>

                            <div className="width-fit-content margin-auto">
                                <FetchingDiv open_fetching={fetching_city} />
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
}

export default Cities;
