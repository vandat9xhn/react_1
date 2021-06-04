import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../waiting/circle_loading/CircleLoading';
//
import './ScreenBlurFetching.scss';

//
class ScreenBlurFetching extends Component {
    state = {
        is_fetching: false,
        FetchingComponent: () => <div></div>,
    };

    //
    openScreenFetching = (FetchingComponent) => {
        this.setState({
            is_fetching: true,
            FetchingComponent: FetchingComponent || CircleLoading,
        });
    };

    //
    closeScreenFetching = () => {
        this.setState({
            is_fetching: false,
            FetchingComponent: () => <div></div>,
        });
    };

    //
    render() {
        const { is_fetching, FetchingComponent } = this.state;

        return (
            is_fetching && (
                <div
                    className={
                        is_fetching ? 'ScreenBlurFetching' : 'display-none'
                    }
                >
                    <div className="ScreenBlurFetching_screen screen-blur">
                        <div className="ScreenBlurFetching_fetching">
                            <FetchingComponent is_fetching={is_fetching} />
                        </div>
                    </div>
                </div>
            )
        );
    }
}

ScreenBlurFetching.propTypes = {};

ScreenBlurFetching.defaultProps = {};

export default ScreenBlurFetching;
