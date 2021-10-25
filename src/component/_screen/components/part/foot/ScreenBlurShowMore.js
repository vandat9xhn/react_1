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
    return (
        <div
            className={
                !is_fetching && !is_show_more
                    ? ''
                    : 'ScreenBlurShowMore padding-8px'
            }
        >
            <div className="display-flex justify-content-center">
                <div
                    className={
                        is_show_more && !is_fetching
                            ? 'cursor-pointer'
                            : 'display-none'
                    }
                    onClick={handleShowMore}
                >
                    {title}
                </div>

                <div>
                    <FetchingComponent is_fetching={is_fetching} />
                </div>
            </div>
        </div>
    );
}

export default ScreenBlurShowMore;
