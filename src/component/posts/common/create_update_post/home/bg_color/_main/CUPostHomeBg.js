import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../_hooks/useBool';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconsMenu from '../../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import PostBgChoice from '../../../../bg_choice/PostBgChoice';
//
import Aa from '../../../../../../../../image/Aa.png';
//
import './CUPostHomeBg.scss';

//
CUPostHomeBg.propTypes = {};

//
function CUPostHomeBg({ bg_arr, bg_ix, handleChooseBg, openBg }) {
    //
    const { is_true, toggleBool } = useBool();

    //
    return (
        <div className="CUPostHomeBg">
            <button
                className={`CUPostHomeBg_item_size btn ${
                    is_true ? 'display-none' : ''
                } `}
                type="button"
                onClick={toggleBool}
            >
                <img className="wh-100" src={Aa} alt="" />
            </button>

            <div className={`${is_true ? '' : 'display-none'}`}>
                <div className="display-flex">
                    <button
                        className="CUPostHomeBg_item_size btn display-flex-center brs-4px bg-fb text-third"
                        type="button"
                        onClick={toggleBool}
                    >
                        <IconsArrow x={400} size_icon="16px" />
                    </button>

                    <div className="flex-grow-1 display-flex overflow-hidden">
                        {bg_arr.map((item, ix) => (
                            <div
                                key={ix}
                                className="CUPostHomeBg_item_size margin-left-10px"
                            >
                                <PostBgChoice
                                    ix={ix}
                                    is_active={ix == bg_ix}
                                    is_bg_img={item.is_bg_img}
                                    bg={item.bg}
                                    handleChooseBg={handleChooseBg}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        className="CUPostHomeBg_item_size margin-left-10px btn brs-4px"
                        type="button"
                        onClick={openBg}
                    >
                        <IconsMenu />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CUPostHomeBg;
