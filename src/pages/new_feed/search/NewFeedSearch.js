import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import SearchAnimateDiv from '../../../component/some_div/search_animate_div/SearchAnimateDiv';
//
import './NewFeedSearch.scss';

//
NewFeedSearch.propTypes = {
    handleSearch: PropTypes.func,
};

//
function NewFeedSearch(props) {
    const { handleSearch } = props;
    //
    const [value, setValue] = useState('');

    //
    function handleChange(new_value) {
        setValue(new_value);
    }
    //
    function onSearch() {
        handleSearch(value);
    }

    //
    return (
        <div className="NewFeedSearch">
            <div>
                <SearchAnimateDiv
                    value={value}
                    placeholder="Search..."
                    handleChange={handleChange}
                    handleSearch={onSearch}
                />
            </div>
        </div>
    );
}

export default NewFeedSearch;
