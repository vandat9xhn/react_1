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
function BtnProfileEdit({ user_id, use_title }) {
    //
    return (
        <Link
            className="color-inherit"
            to={`${user_id ? `/profile/${user_id}` : ''}?sk=about_overview`}
        >
            <BtnProfileActions
                className={'BtnProfileEdit bg-ccc'}
                Icon={<IconsEdit color={'currentColor'} size_icon="16px" />}
                use_title={use_title}
                title={'Edit Profile'}
                // handleClick={onEditProfile}
            />
        </Link>
    );
}

export default BtnProfileEdit;
