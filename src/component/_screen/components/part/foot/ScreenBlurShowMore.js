import React from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../../waiting/circle_loading/CircleLoading';
//
import './ScreenBlurShowMore.scss';

//
ScreenBlurShowMore.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    is_show_more: PropTypes.bool,
    is_fetching: PropTypes.bool,
    //
    handleShowMore: PropTypes.func,
    FetchingComponent: PropTypes.func,
};
ScreenBlurShowMore.defaultProps = {
    title: 'Show more...',
    FetchingComponent: CircleLoading,
};

//
function ScreenBlurShowMore({
    title,
    is_show_more,
    is_fetching,

    handleShowMore,
    FetchingComponent,
}) {
    //
    if (!is_show_more) {
        return null;
    }

    //
    return (
        <div className="ScreenBlurShowMore ScreenBlurShowMore-more display-flex-center">
            <div
                className={`ScreenBlurShowMore_title cursor-pointer ${
                    is_fetching ? 'display-none' : ''
                }`}
                onClick={handleShowMore}
            >
                {title}
            </div>

            <div className="ScreenBlurShowMore_fetching display-flex-center">
                <FetchingComponent is_fetching={is_fetching} />
            </div>
        </div>
    );
}

export default ScreenBlurShowMore;
