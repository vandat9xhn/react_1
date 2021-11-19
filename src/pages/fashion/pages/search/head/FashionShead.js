import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
// 
import FashionHCommon from '../../../components/head/__main_common/FashionHCommon';

//
FashionShead.propTypes = {};

//
function FashionShead({ shop_id, value_search, search_arr, placeholder }) {
    //
    const use_history = useHistory();

    //
    const [value, setValue] = useState(value_search);
    const [where_search_ix, setWhereSearchIx] = useState(shop_id > 0 ? 1 : 0);

    //
    useEffect(() => {
        value_search != value && setValue(value_search);
    }, [value_search]);

    //
    useEffect(() => {
        setWhereSearchIx(shop_id > 0 ? 1 : 0);
    }, [shop_id]);

    // ------

    //
    function handleChange(e) {
        setValue(e.target.value);
    }

    //
    function changeWhereSearch(new_where_search_ix) {
        setWhereSearchIx(new_where_search_ix);
    }

    //
    function handleSearch() {
        (value_search != value || (where_search_ix == 0 && shop_id > 0)) &&
            use_history.push(
                `/fashion/search?q=${value}${
                    where_search_ix == 1 ? `&shop_id=${shop_id}` : ''
                }`
            );
    }

    //
    return (
        <div className="FashionShead">
            <FashionHCommon
                value={value}
                placeholder={
                    where_search_ix == 0 ? placeholder : 'Tìm trong Shop này'
                }
                //
                use_where_search={shop_id > 0}
                where_search_arr={
                    IS_MOBILE
                        ? ['Web', 'Shop']
                        : ['Trong web', 'Trong Shop này']
                }
                where_search_ix={where_search_ix}
                search_arr={search_arr}
                //
                changeWhereSearch={changeWhereSearch}
                handleChange={handleChange}
                handleSearch={handleSearch}
            />
        </div>
    );
}

export default FashionShead;
