import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
//
import { FsCountCartThunk } from '../../../../../redux/slice/FsCountCartSlice';
//
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';
import IconFriend from '../../../../../_icons_svg/icon_friend/IconFriend';
//
import BadgeDiv from '../../../../../component/some_div/badge_div/BadgeDiv';
//
import './FashionHR.scss';

//
FashionHR.propTypes = {};

//
function FashionHR(props) {
    //
    const { count_cart, has_fetched } = useSelector(
        (state) => state.count_cart_slice_obj
    );
    const dispatch = useDispatch();

    //
    useEffect(() => {
        if (!has_fetched) {
            dispatch(FsCountCartThunk());
        }
    }, []);

    //
    return (
        <div className="FashionHR">
            <div className="FashionHR_row display-flex-center">
                <div className="FashionHR_cart pos-rel">
                    <Link to="/fashion/cart">
                        <div className="FashionHR_cart-icon margin-left-8px margin-right-8px">
                            <IconsMenu x={400} size_icon="2rem" />
                        </div>

                        <div className="FashionHR_cart-count">
                            <BadgeDiv num={count_cart} />
                        </div>
                    </Link>
                </div>

                <div className="FashionHR_personal">
                    <Link to="/fashion/user/account/profile">
                        <div className="FashionHR_personal-icon margin-left-8px margin-right-8px">
                            <IconFriend
                                size_icon="1.5rem"
                                stroke="var(--white)"
                                fill="var(--white)"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FashionHR;
