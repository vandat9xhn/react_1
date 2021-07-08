import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import AppScreenFloors from './AppScreenFloors';
//
import './AppScreen.scss';
import ScreenNoFloor from './ScreenNoFloor';
import ScreenHasFloor from './ScreenHasFloor';

//
export const window_screen_scroll_arr = [];

//
class AppScreen extends Component {
    state = {
        floor_arr: [],
    };

    //
    componentDidMount() {
        this.count_has_change = 0;
        this.has_change_obj = { current: false };
    }

    //
    openScreenFloor = (new_floor) => {
        const { floor_arr } = this.state;

        window_screen_scroll_arr.push({
            x: window.scrollX,
            y: window.scrollY,
        });

        this.setState({
            floor_arr: [...floor_arr, new_floor],
        });
    };

    //
    closeScreenFloor = () => {
        const { floor_arr } = this.state;

        floor_arr.pop();
        this.setState({});
    };

    //
    detectScreenHasChange = (has_change) => {
        this.count_has_change += has_change ? 1 : -1;
        this.has_change_obj.current = this.count_has_change > 0;
    };

    //
    closeAllScreen = () => {
        this.setState({
            floor_arr: [],
        });

        this.count_has_change = 0;
        this.has_change_obj = { current: false };
    };

    //
    render() {
        //
        const { floor_arr } = this.state;

        //
        return (
            <div>
                {floor_arr.length ? (
                    <React.Fragment>
                        <AppScreenFloors
                            floor_arr={floor_arr}
                            //
                            openScreenFloor={this.openScreenFloor}
                            closeScreenFloor={this.closeScreenFloor}
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
