import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../../../../../component/_screen_blur/_component/foot/ScreenBlurShowMore';
import NoItemHasFetched from '../../../../../../../../../component/some_div/no_item/NoItemHasFetched';
//
import PfRelationOptionItem from '../item/PfRelationOptionItem';
//
import './PfRelationOptionList.scss';

//
PfRelationOptionList.propTypes = {};

//
function PfRelationOptionList({
    option_item_arr,
    value,
    handleSelectOption,

    count,
    has_fetched,
    open_option,
    is_fetching,
    handleShowMore,
}) {

    //
    return (
        <div
            className={`PfRelationOptionList scroll-thin box-shadow-1 bg-primary ${
                value || open_option ? '' : 'display-none'
            }`}
        >
            <div>
                <div>
                    {option_item_arr.map((item, ix) => (
                        <div key={`PfRelationOptionList_item_${ix}`}>
                            <PfRelationOptionItem
                                item={item.friend}
                                ix={ix}
                                handleSelectOption={handleSelectOption}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <NoItemHasFetched
                    has_fetched={has_fetched}
                    arr_length={option_item_arr.length}
                />
            </div>

            <div>
                <ScreenBlurShowMore
                    is_show_more={count > option_item_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default PfRelationOptionList;
