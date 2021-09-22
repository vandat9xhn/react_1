import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import getWidthTransform from '../../../../../_some_function/getWidthTransform';
import observerAppearance from '../../../../../_some_function/observerAppearance';
//
import NextPrevDiv from '../../../../../component/some_div/next_prev_div/NextPrevDiv';
//
import './ProductsAnimate.scss';
//
import ProductItem from '../../../../../component/products/product_item/ProductItem';
//
import './ProductsAnimateRes.scss';

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

    /* ---------------- COMMON ------------------ */

    //
    makeBtnDisabled = () => {
        this.stop_auto = true;
        this.just_click = true;

        setTimeout(() => {
            this.just_click = false;
        }, 1000);
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

    /* ---------------- NEXT PREV ------------------ */

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
            }, 1000);
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
                            }}
                        >
                            {products.map((item, index) => (
                                <div
                                    key={index}
                                    className={`ProductsAnimate_item flex-shrink-0 ProductsAnimate_item_${index}`}
                                >
                                    <ProductItem
                                        link={'/phone-laptop:' + item.id}
                                        img={item.url}
                                        name={item.name}
                                        in_stock={item.in_stock}
                                        new_price={item.new_price}
                                        old_price={item.old_price}
                                        discount={item.discount}
                                        installment={item.installment}
                                        img_or_dataset={index < 6}
                                    />
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
