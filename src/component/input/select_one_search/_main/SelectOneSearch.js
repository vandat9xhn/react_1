import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import SelectOneSearchChosen from '../chosen/SelectOneSearchChosen';
import SelectOneSearchInput from '../input/SelectOneSearchInput';
import SelectOneSearchOptions from '../options/_main/SelectOneSearchOptions';
import CloseDiv from '../../../some_div/close_div/CloseDiv';

//
SelectOneSearch.propTypes = {};

//
function SelectOneSearch({
    title,
    is_active,
    title_choice,

    use_input,
    value_search,
    placeholder,

    option_arr,
    ItemComponent,

    showOptions,
    changeSearch,
    choseOption,
    clearChoice,
}) {
    //
    const ref_input = useRef(null);

    //
    function makeDivHidden() {
        is_active && showOptions();
    }

    //
    return (
        <div className="SelectOneSearch">
            {title_choice ? (
                <div>
                    <SelectOneSearchChosen
                        title_choice={title_choice}
                        clearChoice={clearChoice}
                    />
                </div>
            ) : (
                <div className="pos-rel">
                    <div ref={ref_input}>
                        <SelectOneSearchInput
                            title={title}
                            is_active={is_active}
                            use_input={use_input}
                            value_search={value_search}
                            placeholder={placeholder}
                            //
                            showOptions={showOptions}
                            changeSearch={changeSearch}
                        />
                    </div>

                    {is_active ? (
                        <CloseDiv
                            refs_target={[ref_input]}
                            makeDivHidden={makeDivHidden}
                        >
                            <div className="pos-abs top-100per left-0 z-index-1 w-100per">
                                <SelectOneSearchOptions
                                    option_arr={option_arr}
                                    ItemComponent={ItemComponent}
                                    choseOption={choseOption}
                                />
                            </div>
                        </CloseDiv>
                    ) : null}
                </div>
            )}
        </div>
    );
}

export default SelectOneSearch;
