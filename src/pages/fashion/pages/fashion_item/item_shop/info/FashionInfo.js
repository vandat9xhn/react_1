import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import { formatNum } from '../../../../../../_some_function/FormatNum';
// 
import IconsMenu from '../../../../../../_icons_svg/icons_menu/IconsMenu';
// 
import SkeletonDiv from '../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
import IconDiv from '../../../../../../component/some_div/icon_div/IconDiv';
// 
import image_loading from '../../../../../../../image/image_loading.svg';
import './FashionInfo.scss';

//
FashionInfo.propTypes = {
    item: PropTypes.object,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    addToCart: PropTypes.func,
    wait_add_cart: PropTypes.bool,
    // 
    onCountNum: PropTypes.func,
    onCountNumDone: PropTypes.func,
    onCountDown: PropTypes.func,
    onCountUp: PropTypes.func,
};

FashionInfo.defaultProps = {};

//
function FashionInfo(props) {
    //
    const {
        item,
        count,
        wait_add_cart,
        addToCart,
        // 
        onCountDown,
        onCountUp,
        // 
        onBeforeCountNum,
        onCountNum,
        onCountNumDone,
    } = props;
    //
    const [img_ix, setImgIx] = useState(0);
    //
    const {
        total,
        total_add_cart,
        //
        vid_pics,
        description,
        name,
        new_price,
        old_price,
    } = item;
    //
    const max = total - total_add_cart

    //
    const handleChangeImage = (ix) => {
        setImgIx(ix);
    };

    return (
        <div>
            <div className="FashionInfo_container">
                <div className="FashionInfo_row">
                    <div className="FashionInfo_col">
                        {/* current image */}
                        <div className="FashionInfo_img brs-5px">
                            <img
                                src={
                                    name
                                        ? vid_pics[img_ix].vid_pic
                                        : image_loading
                                }
                                alt=""
                            />
                        </div>

                        {/* all vid_pics */}
                        <div className="FashionInfo_images">
                            {(name ? vid_pics : [1, 2, 3, 4, 5]).map((img, ix) => (
                                <div
                                    className={
                                        img_ix == ix ? 'border-active' : ''
                                    }
                                    key={`FashionInfo_img_${ix}`}
                                    onClick={() => handleChangeImage(ix)}
                                >
                                    <img
                                        src={
                                            name
                                                ? img.vid_pic
                                                : image_loading
                                        }
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* some info about item */}
                    {name ? (
                        <div className="FashionInfo_col">
                            <div className="FashionInfo__name">{name}</div>

                            <div>
                                <span className="label-field">
                                    Description:
                                </span>{' '}
                                {description}
                            </div>

                            <div>
                                <span className="label-field">Sale Price:</span>{' '}
                                {formatNum(new_price)} VND{' '}
                                <del>{formatNum(old_price)}</del>
                            </div>

                            <div>
                                <span className="label-field">
                                    Total Price:
                                </span>{' '}
                                {formatNum(new_price * count)} VND
                            </div>

                            <div className="FashionInfo_amount display-flex align-items-center">
                                <div className="label-field">Amount:</div>

                                <div
                                    className={`FashionInfo__num ${
                                        max == 0 || wait_add_cart
                                            ? 'pointer-events-none opacity-5'
                                            : ''
                                    }`}
                                >
                                    <div onClick={onCountDown}>-</div>
                                    <div>
                                        <input
                                            type="number"
                                            value={count}
                                            onFocus={onBeforeCountNum}
                                            onChange={onCountNum}
                                            onBlur={onCountNumDone}
                                        />
                                    </div>
                                    <div onClick={onCountUp}>+</div>
                                </div>
                            </div>

                            <div>
                                <span>{max} products available</span>
                                <span className="FashionInfo__cart text-red">
                                    ({total_add_cart} in cart)
                                </span>
                            </div>

                            <div
                                className={`FashionInfo_add-cart ${
                                    wait_add_cart
                                        ? 'cursor-wait'
                                        : 'cursor-pointer'
                                } ${
                                    max == 0 || wait_add_cart
                                        ? 'pointer-events-none opacity-5'
                                        : ''
                                }`}
                                onClick={addToCart}
                            >
                                <IconDiv Icon={IconsMenu} x={400}>
                                    Add to cart
                                </IconDiv>
                            </div>
                        </div>
                    ) : (
                        <div className="FashionInfo_col">
                            <SkeletonDiv num={4} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FashionInfo;
