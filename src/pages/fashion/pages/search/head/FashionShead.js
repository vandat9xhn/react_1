import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import FashionHSearch from '../../../components/head/_main_search/FashionHSearch';

//
FashionShead.propTypes = {};

//
function FashionShead({ handleSearchFashion }) {
    //
    const [value_search, setValueSearch] = useState('');

    //
    useEffect(() => {
        const new_value_search = ParseLocationSearch()['q'];
        document.title = new_value_search;
        setValueSearch(new_value_search);
    }, [location.search]);

    /* --------------------------------- */

    //
    function handleChangeValueSearch(e) {
        setValueSearch(e.target.value);
    }

    //
    function onSearchFashion(new_value_search) {
        handleSearchFashion(new_value_search);
    }

    //
    return (
        <div className="FashionShead">
            <FashionHSearch
                value_search={value_search}
                handleChangeValueSearch={handleChangeValueSearch}
                handleSearchFashion={onSearchFashion}
            />
        </div>
    );
}

export default FashionShead;
