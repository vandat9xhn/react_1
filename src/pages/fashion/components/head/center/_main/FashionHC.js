import React from 'react';
import PropTypes from 'prop-types';
//
import CustomLink from '../../../../../../component/link/link/CustomLink';
//
import FsSearch from '../../../search/_main/FsSearch';
//
import './FashionHC.scss';

//
FashionHC.propTypes = {
    ...FsSearch.propTypes,
    search_arr: PropTypes.arrayOf(PropTypes.string),
};

FashionHC.defaultProps = {
    search_arr: ['Shoes', 'cloth', 'skirt', 'sandal'],
    placeholder: 'Shopping now',
};

//
function FashionHC({
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
    return (
        <div className="FashionHC">
            <div className="FashionHC_input">
                <FsSearch
                    value={value}
                    placeholder={placeholder}
                    //
                    use_where_search={use_where_search}
                    where_search_arr={where_search_arr}
                    where_search_ix={where_search_ix}
                    //
                    changeWhereSearch={changeWhereSearch}
                    handleChange={handleChange}
                    handleSearch={handleSearch}
                />
            </div>

            <div className="FashionHC_search">
                <ul className="display-flex list-none">
                    {search_arr.map((search, ix) => (
                        <li key={`${ix}`} className="padding-x-8px">
                            <CustomLink
                                to={`/fashion/search?q=${search}`}
                                className="text-white font-12px font-500"
                            >
                                {search}
                            </CustomLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FashionHC;
