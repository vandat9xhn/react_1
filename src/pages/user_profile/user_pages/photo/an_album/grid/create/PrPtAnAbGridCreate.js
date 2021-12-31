import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import ProfilePhotoCreateBtnLink from '../../../_component/create/ProfilePhotoCreateBtnLink';
// 
import './PrPtAnAbGridCreate.scss';

//
PrPtAnAbGridCreate.propTypes = {};

//
function PrPtAnAbGridCreate(props) {
    //
    return (
        <ProfilePhotoCreateBtnLink
            title={
                <div className="PrPtAnAbGridCreate_title display-flex-center">
                    <IconPlusSubtract size_icon="17px" stroke_width={25} />

                    <div className="margin-left-5px font-18px font-700 text-secondary">
                        Add to Album
                    </div>
                </div>
            }
            link_to={`/media/set/create`}
        ></ProfilePhotoCreateBtnLink>
    );
}

export default PrPtAnAbGridCreate;
