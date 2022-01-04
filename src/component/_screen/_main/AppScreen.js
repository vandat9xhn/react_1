import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { window_screen_scroll_arr } from './window_screen_scroll_arr';
//
import AppScreenFloors from './AppScreenFloors';
import ScreenNoFloor from './ScreenNoFloor';
import ScreenHasFloor from './ScreenHasFloor';
//
import './AppScreen.scss';

//
class AppScreen extends Component {
    state = {
        floor_arr: [],
        history_arr: [] || [0],
        count_history: 0,
    };

    //
    componentDidMount() {
        this.count_has_change = 0;
        this.has_change_obj = { current: false };
    }

    //
    openScreenFloor = (
        new_floor = {
            has_history: false,
            hidden_before: false,
            ...rest_floor_props,
        }
    ) => {
        const {
            has_history = false,
            hidden_before = false,
            ...rest_floor_props
        } = new_floor;
        const { root_floor_url_arr } = this.context;
        const { floor_arr, history_arr, count_history } = this.state;

        window_screen_scroll_arr.push({
            x: window.scrollX,
            y: window.scrollY,
        });

        if (has_history) {
            root_floor_url_arr.current.push(location.pathname);

            // console.log(root_floor_url_arr.current);
        }

        this.setState({
            floor_arr: [
                ...floor_arr,
                {
                    has_history: has_history,
                    hidden_before: hidden_before,
                    floor_props: rest_floor_props,
                },
            ],
            history_arr: has_history
                ? [...history_arr, floor_arr.length]
                : history_arr,
            count_history: count_history + (has_history ? 1 : 0),
        });
    };

    //
    detectScreenHasChange = (has_change) => {
        this.count_has_change += has_change ? 1 : -1;
        this.has_change_obj.current = this.count_has_change > 0;
    };

    //
    rerenderScreenFloor = () => {
        this.setState({});
    };

    //
    closeScreenFloor = () => {
        const { floor_arr } = this.state;

        floor_arr.pop();

        this.setState({});

        if (floor_arr.length == 0) {
            this.count_has_change = 0;
            this.has_change_obj = { current: false };
        }
    };

    //
    closeScreenHasHistory = () => {
        const { root_floor_url_arr } = this.context;
        const { floor_arr, history_arr, count_history } = this.state;

        root_floor_url_arr.current.pop();
        const last_history = history_arr.pop();

        this.setState({
            floor_arr: floor_arr.slice(0, last_history),
            count_history: count_history - 1,
        });
    };

    //
    closeAllScreen = () => {
        this.setState({
            floor_arr: [],
            history_arr: [],
            count_history: 0,
        });

        this.count_has_change = 0;
        this.has_change_obj = { current: false };
    };

    //
    render() {
        //
        const { floor_arr, count_history } = this.state;
        // console.log(floor_arr);

        //
        return (
            <div>
                {floor_arr.length ? (
                    <React.Fragment>
                        <AppScreenFloors
                            floor_arr={floor_arr}
                            count_history={count_history}
                            //
                            openScreenFloor={this.openScreenFloor}
                            closeScreenFloor={this.closeScreenFloor}
                            closeScreenHasHistory={this.closeScreenHasHistory}
                            closeAllScreen={this.closeAllScreen}
                            //
                            has_change={this.has_change_obj}
                            c_location={location.pathname + location.search}
                        />

                        <ScreenHasFloor count_floor={floor_arr.length} />
                    </React.Fragment>
                ) : (
                    <ScreenNoFloor />
                )}
            </div>
        );
    }
}

AppScreen.propTypes = {};

AppScreen.contextType = context_api;

export default AppScreen;
