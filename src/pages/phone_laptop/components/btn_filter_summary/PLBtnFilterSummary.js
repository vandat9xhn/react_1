import React from 'react';
import PropTypes from 'prop-types';
//
import IconFilter from '../../../../_icons_svg/_icon_filter/IconFilter';
//
import BadgeDiv from '../../../../component/some_div/badge_div/BadgeDiv';

//
PLBtnFilterSummary.propTypes = {};

//
function PLBtnFilterSummary({ filter_count, handleClick }) {
    //
    return (
        <div
            className="PLBtnFilterSummary pos-rel h-100per padding-x-8px padding-y-5px brs-4px border-blur cursor-pointer"
            onClick={handleClick}
        >
            <div className="display-flex-center h-100per">
                <IconFilter
                    size_icon="20px"
                    stroke={
                        filter_count ? 'var(--blue)' : 'var(--md-color-third)'
                    }
                />

                <div className="margin-left-5px">Bộ lọc</div>
            </div>

            <div className="pos-abs right-0 top-0 trans-y--50per padding-right-5px">
                <BadgeDiv num={filter_count} />
            </div>
        </div>
    );
}

export default PLBtnFilterSummary;
