import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
import { context_fashion_item } from '../../../../../../../../_context/fashion/item/context_fashion_item';
//
import { openScreenVidPic } from '../../../../../../../../component/_screen/type/vid_pics/_main/ZoomVidPics';
//
import FashionIIfLFootItem from '../item/FashionIIfLFootItem';

//
FashionIIfLFoot.propTypes = {};

//
function FashionIIfLFoot({ handleZoom }) {
    //
    const { item_info, vid_pic_ix, changeVidPicIx } =
        useContext(context_fashion_item);

    //
    return (
        <div className="FashionIIfLFoot">
            <div className="FashionIIfLFoot_row display-flex">
                {item_info.vid_pics.map((vid_pic, ix) => (
                    <div key={`${ix}`} className="FashionIIfLFoot_item">
                        <FashionIIfLFootItem
                            ix={ix}
                            is_active={ix == vid_pic_ix}
                            vid_pic={vid_pic}
                            //
                            changeVidPicIx={changeVidPicIx}
                            handleZoom={handleZoom}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FashionIIfLFoot;
