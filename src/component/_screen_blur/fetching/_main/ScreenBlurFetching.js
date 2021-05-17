import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../waiting/circle_loading/CircleLoading';
//
import './ScreenBlurFetching.scss';

//
class ScreenBlurFetching extends Component {
    state = {
        open_fetching: false,
        FetchingComponent: () => <div></div>,
    };

    //
    openScreenFetching = (FetchingComponent) => {
        this.setState({
            open_fetching: true,
            FetchingComponent: FetchingComponent || CircleLoading,
        });
    };

    //
    closeScreenFetching = () => {
        this.setState({
            open_fetching: false,
            FetchingComponent: () => <div></div>,
        });
    };

    //
    render() {
        const { open_fetching, FetchingComponent } = this.state;

        return (
            open_fetching && (
                <div
                    className={
                        open_fetching ? 'ScreenBlurFetching' : 'display-none'
                    }
                >
                    <div className="ScreenBlurFetching_screen screen-blur">
                        <div className="ScreenBlurFetching_fetching">
                            <FetchingComponent open_fetching={open_fetching} />
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
