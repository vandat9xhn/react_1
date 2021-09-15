import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../_hooks/useBool';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CloseDiv from '../../../../../../component/some_div/close_div/CloseDiv';
//
import FsSearchInItem from '../item/FsSearchInItem';
//
import './FsSearchIn.scss';

//
FsSearchIn.propTypes = {};

//
function FsSearchIn({ where_search_arr, where_search_ix, changeWhereSearch }) {
    //
    const { is_true, toggleBool } = useBool();

    //
    function makeDivHidden() {
        is_true && toggleBool();
    }

    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div className="FsSearchIn pos-rel" onClick={toggleBool}>
                <div className="display-flex align-items-center cursor-pointer">
                    <div className="margin-right-10px">
                        {where_search_arr[where_search_ix]}
                    </div>

                    <div className="rotate-90">
                        <IconsArrow x={200} size_icon="10px" />
                    </div>
                </div>

                <div
                    className={`pos-abs right-0 top-100per z-index-lv1 ${
                        is_true ? '' : 'display-none'
                    }`}
                >
                    <div className="FsSearchIn_list_contain brs-4px bg-primary box-shadow-1">
                        {where_search_arr.map((item, ix) => (
                            <div key={ix} className="FsSearchIn_item">
                                <FsSearchInItem
                                    where_search={item}
                                    ix={ix}
                                    is_active={ix == where_search_ix}
                                    changeWhereSearch={changeWhereSearch}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default FsSearchIn;
