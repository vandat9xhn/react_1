import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../_hooks/useBool';
//
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';
//
import CloseDiv from '../../../../../component/some_div/close_div/CloseDiv';
//
import PLFilterPosition from '../position/PLFilterPosition';
//
import './PLFilter.scss';

//
PLFilter.propTypes = {};

//
function PLFilter({ filter_title, has_filter, children }) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    //
    const ref_btn_filter = useRef(null);

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
                    ref={ref_btn_filter}
                    className={`PLFilter_title display-flex align-items-center padding-x-8px padding-y-5px brs-4px cursor-pointer ${
                        has_filter
                            ? 'PLFilter_title-active border-blue'
                            : 'border-blur'
                    }`}
                    onClick={toggleBool}
                >
                    <div>{filter_title}</div>

                    <div className="margin-left-5px">
                        <IconCaret size_icon="14px" />
                    </div>
                </div>

                {is_true ? (
                    <PLFilterPosition
                        pos_left={
                            ref_btn_filter.current &&
                            ref_btn_filter.current.getBoundingClientRect().x <=
                                innerWidth / 2
                        }
                    >
                        {children}
                    </PLFilterPosition>
                ) : null}
            </div>
        </CloseDiv>
    );
}

export default PLFilter;
