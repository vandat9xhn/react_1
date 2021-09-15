import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
// 
import IconsInput from '../../../../../_icons_svg/Icons_input/IconsInput';
//
import FsSearchIn from '../search_in/_main/FsSearchIn';
//
import './FsSearch.scss';
import './FsSearchMb.scss';

//
FsSearch.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,

    use_where_search: PropTypes.bool,
    where_search_arr: PropTypes.arrayOf(PropTypes.string),
    where_search_ix: PropTypes.number,

    changeWhereSearch: PropTypes.func,
    handleChange: PropTypes.func,
    handleSearch: PropTypes.func,
};

FsSearch.defaultProps = {
    value: '',
    placeholder: '',
};

//
function FsSearch({
    value,
    placeholder,

    use_where_search,
    where_search_arr,
    where_search_ix,

    changeWhereSearch,
    handleChange,
    handleSearch,
}) {
    //
    function onKeyupInput(event) {
        if (event.keyCode == 13) {
            handleSearch();
        }
    }

    //
    return (
        <div
            className={`FsSearch bg-primary padding-4px brs-3px ${
                IS_MOBILE ? 'FsSearch-mobile' : ''
            }`}
        >
            <div className="FsSearch_row display-flex align-items-center">
                <div className="flex-grow-1 display-flex align-items-center">
                    <input
                        className="FsSearch_input flex-grow-1 padding-4px"
                        type="text"
                        placeholder={placeholder}
                        onKeyUp={onKeyupInput}
                        value={value}
                        onChange={handleChange}
                    />

                    {use_where_search ? (
                        <div className="FsSearch_in padding-x-8px">
                            <FsSearchIn
                                where_search_arr={where_search_arr}
                                where_search_ix={where_search_ix}
                                changeWhereSearch={changeWhereSearch}
                            />
                        </div>
                    ) : null}
                </div>

                <button
                    className="FsSearch_key btn btn-hv btn-active display-flex-center brs-3px cursor-pointer"
                    onClick={handleSearch}
                    title="Search"
                >
                    <IconsInput y={200} size_icon="1rem" />
                </button>
            </div>
        </div>
    );
}

export default FsSearch;
