import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { toggleAppHiddenTemp } from '../../../../../_some_function/AppHiddenTemp';
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import { usePageNotHeader } from '../../../../../_hooks/usePageNotHeader';
import { useBool } from '../../../../../_hooks/useBool';
import { useMouseMoveX } from '../../../../../_hooks/useMouseMoveX';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconFilter from '../../../../../_icons_svg/_icon_filter/IconFilter';
//
import './FbSearchPageLayoutCommon.scss';
//
import FbSearchPageLeft from '../../left/_main/FbSearchPageLeft';
//
import './FbSearchPageLayout.scss';

//
FbSearchPageLayout.propTypes = {};

//
function FbSearchPageLayout({ right_elm, no_result, title }) {
    //
    const search_value = ParseLocationSearch()['q'];

    //
    const { is_true, setIsTrue } = useBool(!search_value);

    //
    const ref_pos_start = useRef(0);

    //
    IS_MOBILE && usePageNotHeader();

    const { client_x, handleStart, handleEnd } = useMouseMoveX({
        handleMouseDown: handleMouseDown,
        handleMouseEnd: handleMouseEnd,
    });

    //
    useEffect(() => {
        closeLeft();
    }, [location.search]);

    //
    useEffect(() => {
        toggleAppHiddenTemp({ is_hidden: is_true });
    }, [is_true]);

    // ------

    //
    function openLeft() {
        search_value && setIsTrue(true);
    }

    //
    function closeLeft() {
        search_value && setIsTrue(false);
    }

    // ----

    //
    function handleMouseDown() {
        ref_pos_start.current = client_x.current;
    }

    //
    function handleMouseEnd() {
        const pos_end = client_x.current;

        if (pos_end - ref_pos_start.current >= 100 && is_true) {
            closeLeft();
        }

        if (pos_end - ref_pos_start.current <= -100 && !is_true) {
            openLeft();
        }
    }

    //
    function handleBack() {
        history.back();
    }

    //
    return (
        <div
            className="FbSearchPageLayout"
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
        >
            <div className="FbSearchPageLayout_row display-flex">
                <div
                    className={`FbSearchPageLayout_left pos-sticky flex-shrink-0 w-360px bg-primary ${
                        is_true ? 'FbSearchPageLayout_left-open' : ''
                    }`}
                >
                    <FbSearchPageLeft />
                </div>

                <div className="FbSearchPageLayout_right flex-grow-1 overflow-hidden">
                    {IS_MOBILE ? (
                        <div className="FbSearchPageLayout_right_head pos-fixed left-0 top-0 z-index-lv1 w-100per flex-between-center padding-8px bg-primary box-shadow-1">
                            <div className="display-flex align-items-center">
                                <div
                                    className="display-flex-center"
                                    onClick={handleBack}
                                >
                                    <IconsArrow x={200} y={200} />
                                </div>

                                <div className="margin-left-8px font-600 font-16px">
                                    {title}
                                </div>
                            </div>

                            <div onClick={openLeft}>
                                <IconFilter
                                    size_icon="20px"
                                    stroke="var(--blue)"
                                />
                            </div>
                        </div>
                    ) : null}

                    <div className={`${no_result ? 'display-none' : ''}`}>
                        {search_value ? right_elm : null}
                    </div>

                    {no_result && search_value ? (
                        <div className="FbSearchPageLayout_no_results display-flex-center">
                            <div className="w-500px text-align-center text-555">
                                <div className="font-20px font-700">
                                    We didn't find any results
                                </div>

                                <div className="font-17px">
                                    Make sure that everything is spelt correctly
                                    or try different keywords.
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default FbSearchPageLayout;
