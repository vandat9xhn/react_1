import React from 'react';
import PropTypes from 'prop-types';
//
import CustomLink from '../../../../../component/link/link/CustomLink';
import InputSearch from '../../../../../component/input/input_search/InputSearch';
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
function FashionHC(props) {
    const {
        value_search,
        handled,
        handleChangeValueSearch,
        handleSearchFashion,
    } = props;

    //
    return (
        <div className="FashionHC">
            <div className="FashionHC_contain">
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
                    <div className="FashionHC_search-row">
                        {searches.map((search, ix) => (
                            <div key={`FashionHC_${ix}`}>
                                <CustomLink
                                    to={`/fashion/search?q=${search}`}
                                    className="normal-text"
                                >
                                    {search}
                                </CustomLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionHC;
