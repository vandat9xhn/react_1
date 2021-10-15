import React from 'react';
import PropTypes from 'prop-types';
//
import { useDisplayBlockToNone } from '../../../../../_hooks/useDisplayBlockToNone';
//
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';
//
import CloseDiv from '../../../../../component/some_div/close_div/CloseDiv';
//
import PLSortSelectItem from '../item/PLSortSelectItem';
//
import './PLSortSelect.scss';

//
PLSortSelect.propTypes = {};

//
function PLSortSelect({ sort_arr, sort_ix, selectSort }) {
    //
    const { opacity_0, display_none, toggleBlockNone } = useDisplayBlockToNone({
        trans_time: 260,
    });

    // ----

    //
    function onSelectSort(new_sort_ix = 0) {
        toggleBlockNone();
        selectSort(new_sort_ix);
    }

    //
    function makeDivHidden() {
        if (!opacity_0) {
            toggleBlockNone();
        }
    }

    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div className="PLSortSelect pos-rel">
                <div
                    className="padding-x-10px padding-y-3px brs-4px border-blur font-12px cursor-pointer"
                    onClick={toggleBlockNone}
                >
                    <span className="margin-right-5px">
                        Xếp theo: {sort_arr[sort_ix].title}
                    </span>

                    <IconCaret size_icon="14px" />
                </div>

                <div
                    className={`pos-abs top-100per right-0 z-index-1 transition-all-250ms ${
                        opacity_0 ? 'opacity-0' : ''
                    } ${display_none ? 'display-none' : ''}`}
                >
                    <div className="PLSortSelect_list_contain bg-primary brs-8px box-shadow-fb">
                        {sort_arr.map((item, ix) => (
                            <div key={ix} className="PLSortSelect_item">
                                <PLSortSelectItem
                                    title={item.title}
                                    ix={ix}
                                    is_active={ix == sort_ix}
                                    selectSort={onSelectSort}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default PLSortSelect;
