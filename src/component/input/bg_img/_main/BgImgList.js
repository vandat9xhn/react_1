import React from 'react';
import PropTypes from 'prop-types';
//
import BgImgItem from '../item/BgImgItem';
// 
import './BgImgList.scss';

//
BgImgList.propTypes = {};

//
function BgImgList({ active_ix, bg_img_arr, handleChooseBg }) {
    //
    return (
        <div className="BgImgList">
            <div className="BgImgList_row display-flex flex-wrap justify-content-center">
                {bg_img_arr.map((bg_img, ix) => (
                    <div key={`${ix}`} className="BgImgList_item padding-4px">
                        <BgImgItem
                            ix={ix}
                            is_active={active_ix == ix}
                            bg_img={bg_img}
                            handleChooseBg={handleChooseBg}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BgImgList;
