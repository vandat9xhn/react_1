import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';

//
NFLShortcutsToggleMore.propTypes = {};

//
function NFLShortcutsToggleMore({ show_more, is_fetching, toggleSeeMore }) {
    //
    return (
        <div className="NFLShortcutsToggleMore font-600 cursor-pointer hv-bg-blur">
            <div
                className="display-flex align-items-center"
                onClick={toggleSeeMore}
            >
                <div className="btn-icon-36px bg-ccc">
                    <IconsArrow
                        class_icon={`${show_more ? 'rotate--90' : 'rotate-90'}`}
                        x={200}
                        size_icon="12px"
                    />
                </div>

                <div className="margin-left-12px">
                    {is_fetching ? (
                        <CircleLoading is_fetching={true} size_icon="20px" />
                    ) : show_more ? (
                        'See less'
                    ) : (
                        'See more'
                    )}
                </div>
            </div>
        </div>
    );
}

export default NFLShortcutsToggleMore;
