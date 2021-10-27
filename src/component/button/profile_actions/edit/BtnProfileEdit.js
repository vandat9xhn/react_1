import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconsEdit from '../../../../_icons_svg/icons_edit/IconsEdit';
//
import BtnProfileActions from '../_common/BtnProfileActions';

//
BtnProfileEdit.propTypes = {};

//
function BtnProfileEdit({}) {
    //
    return (
        <Link className="color-inherit" to={`?sk=about_overview`}>
            <BtnProfileActions
                className={'BtnProfileEdit bg-ccc'}
                Icon={<IconsEdit color={'currentColor'} size_icon="16px" />}
                title={'Edit Profile'}
                // handleClick={onEditProfile}
            />
        </Link>
    );
}

export default BtnProfileEdit;
