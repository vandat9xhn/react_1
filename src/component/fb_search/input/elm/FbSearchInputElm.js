import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import CloseDiv from '../../../some_div/close_div/CloseDiv';
//
import SearchAnimateDiv from '../../../some_div/search_animate_div/SearchAnimateDiv';
import FbSearchHistory from '../history/_main/FbSearchHistory';
import FbSearchInputList from '../list/_main/FbSearchInputList';
//
import './FbSearchInputElm.scss';

//
FbSearchInputElm.propTypes = {};

//
function FbSearchInputElm({
    value,
    placeholder,
    class_input,

    show_contain,
    use_back,
    params_api,

    handleFocus,
    handleChange,
    onSearch,
    handleClose,
}) {
    //
    const ref_main = useRef(null);

    //
    return (
        <div
            ref={ref_main}
            className={`FbSearchInputElm pos-rel display-flex-center h-100per ${
                show_contain ? 'FbSearchInputElm-open bg-primary' : ''
            }`}
        >
            <div className="w-100per">
                <SearchAnimateDiv
                    value={value}
                    placeholder={placeholder}
                    class_input={class_input}
                    input_props={{
                        onFocus: handleFocus,
                    }}
                    show_contain={show_contain}
                    use_back={use_back}
                    //
                    handleClose={handleClose}
                    handleChange={handleChange}
                    handleSearch={onSearch}
                />
            </div>

            <CloseDiv refs_target={[ref_main]} makeDivHidden={handleClose}>
                <div
                    className={`FbSearchInputElm_list pos-abs top-100per left-0 z-index-lv1 w-100per bg-primary overflow-y-auto scroll-thin ${
                        show_contain ? '' : 'display-none'
                    }`}
                >
                    <div className={`${value.trim() ? 'display-none' : ''}`}>
                        <FbSearchHistory params_api={params_api} />
                    </div>

                    <div className={`${value.trim() ? '' : 'display-none'}`}>
                        <FbSearchInputList value_search={value} />
                    </div>
                </div>
            </CloseDiv>
        </div>
    );
}

export default FbSearchInputElm;
