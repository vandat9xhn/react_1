import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import FashionHCommon from '../__main_common/FashionHCommon';

//
FashionH.propTypes = {};

//
function FashionH({ placeholder, search_arr }) {
    //
    const use_history = useHistory();

    //
    const [value, setValue] = useState('');

    // ------

    //
    function handleChange(e) {
        setValue(e.target.value);
    }

    //
    function handleSearch() {
        use_history.push(`/fashion/fb-search?q=${value}`);
    }

    //
    return (
        <div className="FashionH">
            <FashionHCommon
                value={value}
                placeholder={placeholder}
                use_where_search={false}
                search_arr={search_arr}
                handleChange={handleChange}
                handleSearch={handleSearch}
            />
        </div>
    );
}

export default FashionH;
