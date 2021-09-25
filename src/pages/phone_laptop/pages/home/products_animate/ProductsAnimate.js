import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
// 
import getWidthTransform from '../../../../../_some_function/getWidthTransform';
import observerAppearance from '../../../../../_some_function/observerAppearance';
//
import NextPrevDiv from '../../../../../component/some_div/next_prev_div/NextPrevDiv';
//
import ProductItem from '../../../../../component/pl_product/_main/PLProduct';
//
import './ProductsAnimate.scss';
import './ProductsAnimateRes.scss';

//
const TIME_TRANS = IS_MOBILE ? 500 : 750;

//
class ProductsAnimate extends Component {
    state = {
        translateX: 0,
    };

    //
    refProductAnimate = (elm) => {
        if (elm != null) {
            this.ref_product_animate = elm;
        }
    };

    //
    componentDidMount() {
        this.mounted = true;
        this.just_click = false;
        this.stop_auto = true;

        this.autoNext();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    // --------- COMMON

    //
    makeBtnDisabled = () => {
        this.stop_auto = true;
        this.just_click = true;

        setTimeout(() => {
            this.just_click = false;
        }, TIME_TRANS);
    };

    //
    handleNextPrev = (callback) => {
        if (this.just_click) {
            return;
        }

        const [width_transform, max_width_transform] = getWidthTransform(
            'ProductsAnimate_row',
            'ProductsAnimate_item_0',
            this.props.products.length
        );

        callback(this.state.translateX, width_transform, max_width_transform);

        this.makeBtnDisabled();
    };

    // --------- NEXT PREV

    //
    nextPhones = () => {
        this.handleNextPrev(
            (translateX, width_transform, max_width_transform) => {
                this.setState({
                    translateX:
                        translateX >= max_width_transform
                            ? 0
                            : translateX + width_transform < max_width_transform
                            ? translateX + width_transform
                            : max_width_transform,
                });
            }
        );
    };

    //
    prevPhones = () => {
        this.handleNextPrev(
            (translateX, width_transform, max_width_transform) => {
                this.setState({
                    translateX:
                        translateX == 0
                            ? max_width_transform
                            : translateX - width_transform < 0
                            ? 0
                            : translateX - width_transform,
                });
            }
        );
    };

    //
    autoNext = () => {
        if (!this.mounted) {
            return;
        }

        if (this.ref_product_animate.dataset.appearance != 'false') {
            if (!this.stop_auto) {
                this.nextPhones();
                this.stop_auto = false;
            } else {
                this.stop_auto = false;
            }
        }

        setTimeout(() => {
            observerAppearance(this.ref_product_animate);
            setTimeout(() => {
                this.autoNext();
            }, TIME_TRANS);
        }, 7000);
    };

    //
    render() {
        const { translateX } = this.state;
        const { products } = this.props;

        //
        return (
            <div className="ProductsAnimate">
                <h2 className="ProductsAnimate_title padding-y-10px text-align-center text-white font-16px font-500 text-upper">
                    Sản phẩm nổi bật
                </h2>

                <div className="padding-y-20px">
                    <div
                        ref={this.refProductAnimate}
                        className="ProductsAnimate_contain brs-5px box-shadow-1"
                        data-appearance="false"
                    >
                        <div
                            className="ProductsAnimate_row display-flex"
                            style={{
                                transform: `translateX(${-translateX}px)`,
                                transition: `transform ${TIME_TRANS}ms`,
                            }}
                        >
                            {products.map((product_obj, index) => (
                                <div
                                    key={product_obj.id || index}
                                    className={`ProductsAnimate_item flex-shrink-0 ProductsAnimate_item_${index}`}
                                >
                                    <ProductItem product_obj={product_obj} />
                                </div>
                            ))}
                        </div>

                        <div className="text-light">
                            <NextPrevDiv
                                handleNext={this.nextPhones}
                                handlePrev={this.prevPhones}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductsAnimate.propTypes = {
    products: PropTypes.array,
};

export default ProductsAnimate;
