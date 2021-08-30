import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import FashionHL from '../left/FashionHL';
import FashionHC from '../center/_main/FashionHC';
import FashionHR from '../right/FashionHR';
//
import './FashionHCommon.scss';

//
FashionHCommon.propTypes = {
    value_search: PropTypes.string,
    handleSearchFashion: PropTypes.func,
    handleSearchFashion: PropTypes.func,
    handled: PropTypes.bool,
};

//
function FashionHCommon({
    value_search,
    handled,
    handleChangeValueSearch,
    handleSearchFashion,
}) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div className="FashionHCommon fashion-head padding-8px bg-img-fashion-head">
            <div className="FashionHCommon_contain margin-auto">
                <div className="FashionHCommon_row display-flex align-items-center">
                    <div className="FashionHCommon_left FashionHCommon_side">
                        <FashionHL />
                    </div>

                    <div className="FashionHCommon_center flex-grow-1">
                        <FashionHC
                            handled={handled}
                            value_search={value_search}
                            handleChangeValueSearch={handleChangeValueSearch}
                            handleSearchFashion={handleSearchFashion}
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
