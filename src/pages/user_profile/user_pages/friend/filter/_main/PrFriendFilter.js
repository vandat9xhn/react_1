import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import PrFriendFilterItem from '../item/PrFriendFilterItem';

//
PrFriendFilter.propTypes = {};

//
function PrFriendFilter({ user_id }) {
    //
    const { user } = useContext(context_api);

    //
    const type = ParseLocationSearch()['type'] || '';

    //
    const [filter_arr, setFilterArr] = useState(
        [] || [{ title: '', type: '' }]
    );

    //
    useEffect(() => {
        getData_API();
    }, []);

    // ----

    function getData_API() {
        setFilterArr(
            user.id == user_id
                ? [
                      { title: 'All friends', type: '' },
                      { title: 'Recently added', type: 'recent' },
                      { title: 'Births Day', type: 'birth' },
                      { title: 'Current City', type: 'city' },
                      { title: 'Following', type: 'following' },
                  ]
                : [
                      { title: 'All friends', type: '' },
                      { title: 'Mutual', type: 'mutual' },
                      { title: 'Following', type: 'following' },
                  ]
        );
    }

    //
    return (
        <div className="PrFriendFilter overflow-x-auto scroll-height-0 padding-x-8px font-600 text-secondary">
            <div className="display-flex">
                {filter_arr.map((item, ix) => (
                    <div key={ix}>
                        <PrFriendFilterItem
                            user_id={user_id}
                            title={item.title}
                            type={item.type}
                            is_active={type == item.type}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PrFriendFilter;
