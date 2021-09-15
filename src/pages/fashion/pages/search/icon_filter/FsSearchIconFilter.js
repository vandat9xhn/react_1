import React from 'react';
import PropTypes from 'prop-types';
//
import IconFilter from '../../../../../_icons_svg/_icon_filter/IconFilter';

//
FsSearchIconFilter.propTypes = {};

//
function FsSearchIconFilter({ openFilter }) {
    //
    return (
        <div className="FsSearchIconFilter padding-10px color-fashion">
            <div
                className="margin-left-auto width-fit-content font-400"
                onClick={openFilter}
            >
                <div className="display-flex align-items-end">
                    <IconFilter size_icon="1.5rem" stroke="currentColor" />

                    <span className="font-10px line-9px">Lọc</span>
                </div>
            </div>
        </div>
    );
}

export default FsSearchIconFilter;
