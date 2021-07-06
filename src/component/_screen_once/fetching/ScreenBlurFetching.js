import React from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../waiting/circle_loading/CircleLoading';
//
import './ScreenBlurFetching.scss';

//
export function openScreenFetching({ openScreenOnce, FetchingComponent }) {
    openScreenOnce({
        ScreenOneComponent: (
            <ScreenBlurFetching FetchingComponent={FetchingComponent} />
        ),
    });
}

//
ScreenBlurFetching.propTypes = {
    FetchingComponent: PropTypes.element,
};

ScreenBlurFetching.defaultProps = {
    FetchingComponent: <CircleLoading is_fetching={true} />,
};

//
function ScreenBlurFetching({ FetchingComponent }) {
    //
    return (
        <div className="ScreenBlurFetching bg-screen">
            <div className="ScreenBlurFetching_fetching">
                {FetchingComponent}
            </div>
        </div>
    );
}

export default ScreenBlurFetching;
