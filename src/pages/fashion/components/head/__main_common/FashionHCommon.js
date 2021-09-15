import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
// 
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import FashionHL from '../left/FashionHL';
import FashionHC from '../center/_main/FashionHC';
import FashionHR from '../right/FashionHR';
//
import './FashionHCommon.scss';

//
FashionHCommon.propTypes = {
    ...FashionHC.propTypes,
};

//
function FashionHCommon({
    value,
    placeholder,

    use_where_search,
    where_search_arr,
    where_search_ix,

    search_arr,

    changeWhereSearch,
    handleChange,
    handleSearch,
}) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div
            className={`FashionHCommon fashion-head padding-8px bg-img-fashion-head ${
                IS_MOBILE ? 'FashionHCommon-mobile' : ''
            }`}
        >
            <div className="FashionHCommon_contain margin-auto">
                <div className="FashionHCommon_row display-flex align-items-center">
                    <div className="FashionHCommon_left FashionHCommon_side">
                        <FashionHL />
                    </div>

                    <div className="FashionHCommon_center flex-grow-1">
                        <FashionHC
                            value={value}
                            placeholder={placeholder}
                            //
                            use_where_search={use_where_search}
                            where_search_arr={where_search_arr}
                            where_search_ix={where_search_ix}
                            //
                            search_arr={search_arr}
                            //
                            changeWhereSearch={changeWhereSearch}
                            handleChange={handleChange}
                            handleSearch={handleSearch}
                        />
                    </div>

                    <div className="FashionHCommon_right FashionHCommon_side">
                        {user.id ? <FashionHR /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionHCommon;
