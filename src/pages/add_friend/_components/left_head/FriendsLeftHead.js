import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FriendsLeftHead.scss';

//
FriendsLeftHead.propTypes = {};

//
function FriendsLeftHead({ title }) {
    //
    return (
        <div className="FriendsLeftHead padding-x-8px padding-top-15px padding-bottom-8px">
            <div className="FriendsLeftHead_row display-flex align-items-center">
                <Link className="color-inherit" to={`/friends`}>
                    <div className="FriendsLeftHead_back btn-icon-36px margin-right-12px cursor-pointer hv-bg-hv">
                        <IconsArrow x={200} y={200} size_icon="20px" />
                    </div>
                </Link>

                <div>
                    <div>
                        <Link
                            className="font-13px text-third hv-underline"
                            to={`/friends`}
                        >
                            Friends
                        </Link>
                    </div>

                    <h1 className="FriendsLeftHead_title font-24px font-700">{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default FriendsLeftHead;
