import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../../_some_function/ParseLocationSearch';
//
import FbSearchPageRelatedItem from '../item/FbSearchPageRelatedItem';

//
FbSearchPageRelated.propTypes = {};

//
function FbSearchPageRelated(props) {
    //
    const [search_value_arr, setSearchKeyArr] = useState(
        [] || [{ search_value: '' }]
    );

    //
    useEffect(() => {
        getData_API();
    }, []);

    // -----

    //
    function getData_API() {
        const main_search_value = ParseLocationSearch()['q'];

        const new_search_value_arr = Array(8)
            .fill(1)
            .map((_, ix) => {
                return {
                    search_value: `${main_search_value} ${ix}`,
                };
            });

        setSearchKeyArr(new_search_value_arr);
    }
    //
    return (
        <div className="FbSearchPageRelated padding-16px brs-8px bg-primary box-shadow-1">
            <div>
                {search_value_arr.map((item, ix) => (
                    <div key={ix}>
                        <FbSearchPageRelatedItem
                            search_value={item.search_value}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FbSearchPageRelated;
