import React from 'react';
import PropTypes from 'prop-types';
//
import FashionHL from '../left/FashionHL';
import FashionHC from '../center/FashionHC';
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
function FashionHCommon(props) {
    const {
        value_search,
        handled,
        handleChangeValueSearch,
        handleSearchFashion,
    } = props;

    //
    return (
        <div className="FashionHCommon">
            <div className="FashionHCommon_row display-flex align-items-center">
                <div className="FashionHCommon_left">
                    <FashionHL />
                </div>

                <div className="FashionHCommon_center">
                    <FashionHC
                        handled={handled}
                        value_search={value_search}
                        handleChangeValueSearch={handleChangeValueSearch}
                        handleSearchFashion={handleSearchFashion}
                    />
                </div>

                <div className="FashionHCommon_right">
                    {localStorage.is_login == 1 && <FashionHR />}
                </div>
            </div>
        </div>
    );
}

export default FashionHCommon;
