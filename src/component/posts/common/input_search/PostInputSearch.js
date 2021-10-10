import React from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../_icons_svg/Icons_input/IconsInput';
// 
import './PostInputSearch.scss';

//
PostInputSearch.propTypes = {};

//
function PostInputSearch({ value, changeSearch }) {
    //
    return (
        <div className="PostInputSearch padding-y-6px padding-x-12px bg-fb">
            <div className="display-flex align-items-center">
                <IconsInput y={200} size_icon="16px" />

                <input
                    className="flex-grow-1 margin-left-8px border-none bg-transparent outline-none"
                    type="text"
                    value={value}
                    placeholder="Search for friends"
                    onChange={changeSearch}
                />
            </div>
        </div>
    );
}

export default PostInputSearch;
