import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import './PLHeadSearch.scss';

//
PLHeadSearch.propTypes = {};

//
function PLHeadSearch({ input_props }) {
    //
    const use_history = useHistory();

    //
    const ref_input = useRef(null);

    // ----

    //
    function handleSearch(e) {
        e.preventDefault();

        use_history.push(`/phone-laptop/fb-search?q=${ref_input.current.value}`);
    }

    //
    function handleKeyDown(e) {
        if (e.keyCode == 13) {
            handleSearch(e);
        }
    }

    //
    return (
        <form className="PLHeadSearch pos-rel" onSubmit={handleSearch}>
            <input
                ref={ref_input}
                className="PLHeadSearch_input w-100per brs-4px border-none outline-none"
                type="text"
                placeholder="Bạn tìm gì..."
                onKeyDown={handleKeyDown}
                {...input_props}
            />

            <button
                className="PLHeadSearch_btn pos-abs btn cursor-pointer"
                type="submit"
            >
                <IconsInput y={200} size_icon="15px" />
            </button>
        </form>
    );
}

export default PLHeadSearch;
