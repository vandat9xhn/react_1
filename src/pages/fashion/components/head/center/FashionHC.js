import React from 'react';
import PropTypes from 'prop-types';
// 
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
        handleSearchFashion,
        value_search,
        handled,
        handleChangeValueSearch,
    } = props;

    //
    return (
        <div className="FashionHC">
            <div className="FashionHC_contain">
                <div className="FashionHC_input">
                    <InputSearch
                        placeholder="Search for name, product"
                        onSearch={handleSearchFashion}
                        handled={handled}
                        default_search=""
                        value_search={value_search}
                        handleChangeSearch={handleChangeValueSearch}
                    />
                </div>

                <div className="FashionHC_search">
                    <div className="FashionHC_search-row">
                        {searches.map((search, ix) => (
                            <div key={`FashionHC_${ix}`}>
                                <div
                                    className="FashionHC_word"
                                    onClick={() => handleSearchFashion(search)}
                                >
                                    {search}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionHC;
