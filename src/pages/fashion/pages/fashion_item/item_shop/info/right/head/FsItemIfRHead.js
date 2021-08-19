import React from 'react';
import PropTypes from 'prop-types';
//
import FashionIsLike from '../../../../../../components/is_like/FashionIsLike';
//
import './FsItemIfRHead.scss';

//
FsItemIfRHead.propTypes = {};

//
function FsItemIfRHead({ name, is_like }) {
    //
    return (
        <div className="FsItemIfRHead">
            <FashionIsLike is_like={is_like} className="FsItemIfRHead_like" />

            <h1 className="margin-0 font-20px">{name}</h1>
        </div>
    );
}

export default FsItemIfRHead;
