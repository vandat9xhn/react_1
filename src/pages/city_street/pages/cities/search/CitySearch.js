import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import SearchAnimateDiv from '../../../../../component/some_div/search_animate_div/SearchAnimateDiv';

// 
CitySearch.propTypes = {
    handleSearch: PropTypes.func,
};

// 
function CitySearch(props) {
    const {handleSearch} = props;
    // 
    const [value, setValue] = useState('')

    // 
    function handleChange(new_value) {
        setValue(new_value)
    }
    // 
    function onSearch() {
        handleSearch(value)
    }


    // 
    return (
        <div>
            <div>
                <div>
                    <SearchAnimateDiv
                        value={value}
                        placeholder="City..."
                        handleChange={handleChange}
                        handleSearch={onSearch}
                    />
                </div>
            </div>
        </div>
    );
}

export default CitySearch;