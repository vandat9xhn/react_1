import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsInput from '../../../_icons_svg/Icons_input/IconsInput';
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
            <div className="FbMenu_head pos-sticky top-header z-index-1 padding-8px bg-primary">
                <div className="flex-between-center">
                    <h1 className="font-20px font-700">Menu</h1>

                    <Link className="btn-icon-36px bg-ccc text-secondary" to="/fb-search">
                        <IconsInput y={200} size_icon="18px" />
                    </Link>
                </div>
            </div>

            <div>
                <HeaderMenuContain />
            </div>
        </div>
    );
}

export default FbMenu;
