import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
// 
import SearchAnimateDiv from '../../../component/some_div/search_animate_div/SearchAnimateDiv';
// 
import './TestSearchAnimate.scss';
import { context_post } from '../../../component/posts/__context_post/ContextPost';

// 
TestSearchAnimate.propTypes = {};

// 
function TestSearchAnimate(props) {
    const [value, setValue] = useState('')
    // 

    // 
    function handleChange(new_value) {
        setValue(new_value)
    }
    //
    function handleSearch() {
        console.log(value);
    }

    // 
    return (
        <div>
            <div className="TestSearchAnimate_search">
                <SearchAnimateDiv
                    value={value}
                    handleChange={handleChange}
                    handleSearch={handleSearch}
                />
            </div>
        </div>
    );
}

export default TestSearchAnimate;
