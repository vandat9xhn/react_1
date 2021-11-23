import React from 'react';
import PropTypes from 'prop-types';
//
import HeaderMenuContain from '../../../component/_header_menu/contain/_main/HeaderMenuContain';
// 
import './FbMenu.scss';

//
FbMenu.propTypes = {};

//
function FbMenu(props) {
    //
    return (
        <div className="FbMenu bg-primary">
            <HeaderMenuContain />
        </div>
    );
}

export default FbMenu;
