import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../_hooks/useBool';
//
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';
//
import CloseDiv from '../../../../../component/some_div/close_div/CloseDiv';
//
import './PLFilter.scss';

//
PLFilter.propTypes = {};

//
function PLFilter({ filter_title, has_filter, children }) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    //
    useEffect(() => {
        setIsTrue(false);
    }, [location.search]);

    // ----

    //
    function makeDivHidden() {
        is_true && toggleBool();
    }

    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div className="PLFilter pos-rel">
                <div
                    className={`PLFilter_title display-flex align-items-center padding-x-8px padding-y-5px brs-4px cursor-pointer ${
                        has_filter ? 'PLFilter_title-active' : 'border-blur'
                    }`}
                    onClick={toggleBool}
                >
                    <div>{filter_title}</div>

                    <div className="margin-left-5px">
                        <IconCaret size_icon="10px" />
                    </div>
                </div>

                <div
                    className={`PLFilter_list pos-abs z-index-lv1 padding-top-10px ${
                        is_true ? '' : 'display-none'
                    }`}
                >
                    <div className="PLFilter_list_contain pos-rel">
                        {children}
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default PLFilter;
