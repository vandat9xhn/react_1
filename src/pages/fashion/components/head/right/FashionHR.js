import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// 
import { requestFashionGetCountCart } from '../../../../../redux/action/action_count_cart';
// 
import IconsMenu  from '../../../../../_icons_svg/icons_menu/IconsMenu';
import IconsAction from '../../../../../_icons_svg/icons_action/IconsAction';
// 
import './FashionHR.scss';

//
FashionHR.propTypes = {
    
};

//
function FashionHR(props) {
    // redux
    const {count_cart, has_fetched} = useSelector((state) => state.count_cart_obj);
    const dispatch = useDispatch();

    // effect
    useEffect(() => {
        if (!has_fetched) {
            dispatch(requestFashionGetCountCart());
        }

    }, []);

    // 
    return (
        <div className="FashionHR">
            <div className="FashionHR_contain">
                <div className="FashionHR_row">
                    {/* cart */}
                    <div className="FashionHR_cart">
                        <Link to="/fashion/cart">
                            <div className="FashionHR_cart-icon FashionHR_item">
                                <IconsMenu x={400} size_icon="2rem"/>
                            </div>

                            <div className="FashionHR_cart-count">
                                {count_cart}
                            </div>
                        </Link>
                    </div>

                    {/* personal */}
                    <div className="FashionHR_personal">
                        <Link to="/fashion/personal/user/info" replace={location.pathname.search('/personal/') > 0}>
                            <div className="FashionHR_personal-icon FashionHR_item">
                                <IconsAction y={200} size_icon="1.5rem" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionHR;