import React from 'react';
import PropTypes from 'prop-types';
//
import PostInputSearch from '../../../input_search/PostInputSearch';
//
import './CUPTagSearch.scss';

//
CUPTagSearch.propTypes = {};

//
function CUPTagSearch({ value, changeSearch, handleConfirmTag }) {
    //
    return (
        <div className="CUPTagSearch padding-x-16px padding-y-10px">
            <div className="CUPTagSearch_row display-flex align-items-center">
                <div className="CUPTagSearch_search flex-grow-1">
                    <PostInputSearch
                        value={value}
                        placeholder="Search for friends"
                        changeSearch={changeSearch}
                    />
                </div>

                <button
                    className="margin-right-5px margin-left-20px btn text-blue font-600 cursor-pointer"
                    type="button"
                    onClick={handleConfirmTag}
                >
                    Done
                </button>
            </div>
        </div>
    );
}

export default CUPTagSearch;
