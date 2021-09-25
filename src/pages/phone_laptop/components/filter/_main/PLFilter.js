import React from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';

//
PLFilter.propTypes = {};

//
function PLFilter({ filter_title, has_filer, children, is_show, toggleShow }) {
    //
    return (
        <div className="PLFilter pos-rel">
            <div
                className={`PLFilter_title display-flex align-items-center ${
                    has_filer ? 'PLFilter_title-active' : ''
                }`}
                onClick={toggleShow}
            >
                <div>{filter_title}</div>

                <div className="margin-left-5px">
                    <IconCaret size_icon="10px" />
                </div>
            </div>

            <div
                className={`PLFilter_list pos-abs ${
                    is_show ? '' : 'display-none'
                }`}
            >
                <div className="PLFilter_arrow "></div>

                {children}
            </div>
        </div>
    );
}

export default PLFilter;
