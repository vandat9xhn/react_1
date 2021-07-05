import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ScreenFloor from '../floor/ScreenFloor';

//
class AppScreen extends Component {
    state = {
        floor_arr: [],
    };

    //
    openScreenFloor = (new_floor = {}) => {
        const { floor_arr } = this.state;

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
    render() {
        //
        const { floor_arr } = this.state;

        //
        return (
            <div>
                {floor_arr.map((floor_obj, ix) => (
                    <div
                        key={`${ix}`}
                        className={`${
                            ix != floor_arr.length - 1 ? 'display-none' : ''
                        }`}
                    >
                        <ScreenFloor
                            closeScreen={this.closeScreenFloor}
                            {...floor_obj}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

AppScreen.propTypes = {};

export default AppScreen;
