import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../../../_icons_svg/icons_action/IconsAction';
import IconsEdit from '../../../../../../_icons_svg/icons_edit/IconsEdit';
//
import CUPostBtnPreviewMb from '../btn_preview/CUPostBtnPreviewMb';

//
CUPostPhotoPreviewMb.propTypes = {};

//
function CUPostPhotoPreviewMb({ img, handleEdit, handleDel }) {
    //
    return (
        <div className="CUPostPhotoPreviewMb pos-rel wh-100 brs-6px overflow-hidden">
            <img className="wh-100 object-fit-cover" src={img} alt="" />

            <div className="pos-abs-100 bg-shadow-2" onClick={handleEdit}></div>

            <div className="pos-abs top-0 right-0 padding-5px display-flex">
                <div className="margin-right-10px">
                    <CUPostBtnPreviewMb handleClick={handleEdit}>
                        <IconsEdit size_icon="14px" />
                    </CUPostBtnPreviewMb>
                </div>

                <CUPostBtnPreviewMb handleClick={handleDel}>
                    <IconsAction size_icon="14px" />
                </CUPostBtnPreviewMb>
            </div>
        </div>
    );
}

export default CUPostPhotoPreviewMb;
