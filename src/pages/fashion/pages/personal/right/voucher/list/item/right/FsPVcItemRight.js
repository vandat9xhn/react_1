import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../../../_icons_svg/icons_arrow/IconsArrow';
import { Link } from 'react-router-dom';

//
FsPVcItemRight.propTypes = {};

//
function FsPVcItemRight({ can_use }) {
    //
    return (
        <div className="FsPVcItemRight display-flex flex-col space-between align-items-end h-100per padding-y-10px padding-right-10px">
            <div className="color-fashion cursor-pointer">
                {can_use ? (
                    <div>
                        <span>Dùng ngay</span>

                        <IconsArrow x={200} size_icon="14px" />
                    </div>
                ) : null}
            </div>

            <Link to={`/fashion/`}>
                <div>Điều kiện</div>
            </Link>
        </div>
    );
}

export default FsPVcItemRight;
