import React from 'react';
import PropTypes from 'prop-types';
//
import CustomLink from '../../../../../../component/link/link/CustomLink';
import InputSearch from '../input/InputSearch';
//
import './FashionHC.scss';

//
const searches = ['Shoes', 'cloth', 'skirt', 'sandal'];

//
FashionHC.propTypes = {
    handleSearchFashion: PropTypes.func,
    handleChangeValueSearch: PropTypes.func,
    value_search: PropTypes.string,
    handled: PropTypes.bool,
};

//
function FashionHC({
    value_search,
    handled,
    handleChangeValueSearch,
    handleSearchFashion,
}) {
    //
    return (
        <div className="FashionHC">
            <div className="FashionHC_input">
                <InputSearch
                    value_search={value_search}
                    default_search=""
                    handled={handled}
                    placeholder="Search for name, product"
                    handleChangeSearch={handleChangeValueSearch}
                    onSearch={handleSearchFashion}
                />
            </div>

            <div className="FashionHC_search">
                <div className="display-flex">
                    {searches.map((search, ix) => (
                        <div key={`${ix}`} className="padding-x-8px">
                            <CustomLink
                                to={`/fashion/search?q=${search}`}
                                className="text-white font-12px font-500"
                            >
                                {search}
                            </CustomLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FashionHC;
