import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import AppScreenFloors from './AppScreenFloors';
//
import { window_screen_scroll_arr } from './window_screen_scroll_arr';
//
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
        const { floor_arr, history_arr, count_history } = this.state;

        window_screen_scroll_arr.push({
            x: window.scrollX,
            y: window.scrollY,
        });

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
    closeScreenFloor = () => {
        const { floor_arr } = this.state;

        if (floor_arr[floor_arr.length - 1].has_history) {
            history.back();
        } else {
            floor_arr.pop();

            this.setState({});

            if (floor_arr.length == 0) {
                this.count_has_change = 0;
                this.has_change_obj = { current: false };
            }
        }
    };

    //
    detectScreenHasChange = (has_change) => {
        this.count_has_change += has_change ? 1 : -1;
        this.has_change_obj.current = this.count_has_change > 0;
    };

    //
    closeScreenHasHistory = () => {
        const { floor_arr, history_arr, count_history } = this.state;
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

export default AppScreen;
