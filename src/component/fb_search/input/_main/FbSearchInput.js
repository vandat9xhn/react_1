import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../_hooks/useBool';
//
import CloseDiv from '../../../some_div/close_div/CloseDiv';
import SearchAnimateDiv from '../../../some_div/search_animate_div/SearchAnimateDiv';
import FbSearchHistory from '../history/_main/FbSearchHistory';
//
import './FbSearchInput.scss';
import FbSearchInputList from '../list/_main/FbSearchInputList';

//
FbSearchInput.propTypes = {};

//
function FbSearchInput({}) {
    //
    const use_history = useHistory();

    //
    const [value, setValue] = useState('');

    //
    const ref_main = useRef(null);

    //
    const { is_true, setIsTrue } = useBool();
    const { is_true: is_open, setIsTrue: setIsOpen } = useBool(false);

    // -----

    //
    function handleOpen(new_is_open = false) {
        setIsOpen(new_is_open);

        !new_is_open && setIsTrue(false);
    }

    //
    function handleFocus() {
        setIsTrue(true);
    }

    //
    function handleClose() {
        if (!is_open) {
            return;
        }

        setIsTrue(false);
        setIsOpen(false);
    }

    //
    function handleChange(new_value) {
        setValue(new_value);
    }

    //
    function onSearch() {
        use_history.push(`/search/${value}`);
    }

    //
    return (
        <div
            ref={ref_main}
            className={`FbSearchInput pos-rel ${
                is_true ? 'FbSearchInput-open bg-primary' : ''
            }`}
        >
            <div>
                <SearchAnimateDiv
                    value={value}
                    placeholder="Click to search..."
                    input_props={{
                        onFocus: handleFocus,
                    }}
                    is_open={is_open}
                    //
                    handleOpen={handleOpen}
                    handleChange={handleChange}
                    handleSearch={onSearch}
                />
            </div>

            {is_true ? (
                <CloseDiv refs_target={[ref_main]} makeDivHidden={handleClose}>
                    <div className="FbSearchInput_list pos-abs top-100per left-0 w-100per bg-primary overflow-y-auto scroll-thin">
                        <div
                            className={`${value.trim() ? 'display-none' : ''}`}
                        >
                            <FbSearchHistory />
                        </div>

                        <div
                            className={`${value.trim() ? '' : 'display-none'}`}
                        >
                            <FbSearchInputList value_search={value} />
                        </div>
                    </div>
                </CloseDiv>
            ) : null}
        </div>
    );
}

export default FbSearchInput;
