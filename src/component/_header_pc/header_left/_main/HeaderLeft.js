import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { useFbSearchInput } from '../../../../_hooks/search/useFbSearchInput';
//
import FavWithLetter from '../../../fav_with_letter/FavWithLetter';
import FbSearchInputElm from '../../../fb_search/input/elm/FbSearchInputElm';
//
import './HeaderLeft.scss';
import { ParseLocationSearch } from '../../../../_some_function/ParseLocationSearch';

//
HeaderLeft.propTypes = {};

//
function HeaderLeft(props) {
    //
    const {
        is_open,
        show_contain,

        value,
        setValue,

        handleFocus,
        handleChange,
        handleClose,
        onSearch,
    } = useFbSearchInput({
        initial_value: '',
        initial_open: true,
        always_open: true,
    });

    //
    useEffect(() => {
        handleClose();

        if (location.pathname.startsWith('/fb-search')) {
            const new_value = ParseLocationSearch()['q'];
            setValue(new_value);
        } else {
            setValue('')
        }
    }, [location.href]);

    //
    return (
        <div
            className={`HeaderLeft pos-abs top-0 left-0 h-100per ${
                show_contain ? 'z-index-2' : ''
            }`}
        >
            <div className="display-flex align-items-center h-100per">
                <div
                    className={`margin-right-12px ${
                        show_contain ? 'display-none' : 'padding-left-16px'
                    }`}
                >
                    <Link to="/new-feed">
                        <FavWithLetter
                            size_icon="40px"
                            letter="F"
                            class_letter="font-16px font-600 text-blue"
                        />
                    </Link>
                </div>

                <div
                    className={`HeaderLeft_search h-100per flex-grow-1 ${
                        show_contain
                            ? 'HeaderLeft_search-show_contain'
                            : 'HeaderLeft_search-hide_contain'
                    }`}
                >
                    <FbSearchInputElm
                        value={value}
                        placeholder="Search..."
                        // is_open={is_open}
                        class_input="PostInputSearch_input-40px"
                        show_contain={show_contain}
                        // params_api={params_api}
                        //
                        handleFocus={handleFocus}
                        handleChange={handleChange}
                        onSearch={onSearch}
                        handleClose={handleClose}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderLeft;
