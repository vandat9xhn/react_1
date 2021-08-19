import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import FashionH from '../../../components/head/_main/FashionH';
//
import './FashionItem.scss';
//
import FashionItemShop from '../item_shop/_main/FashionItemShop';
import FashionRate from '../rate/_main/FashionRate';
import FashionItemCmt from '../comment/_main/FashionItemCmt';
import FashionRlt from '../relative/FashionRlt';
import FashionOtherItem from '../other_shop_item/FashionOtherItem';
import FashionItemMayLike from '../may_like/FashionItemMayLike';
import VirtualScroll from '../../../../../component/virtual_scroll/VirtualScroll';

//
FashionItem.propTypes = {};

//
function FashionItem(props) {
    //
    const id = +props.match.params.id;

    //
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    //
    return (
        <div className="FashionItem">
            <FashionH />

            <div className="fashion-width">
                <div className="FashionItem_part">
                    <VirtualScroll>
                        <FashionItemShop id={id} />
                    </VirtualScroll>
                </div>

                <div className="FashionItem_part">
                    <VirtualScroll>
                        <FashionRate id={id} />
                    </VirtualScroll>
                </div>

                <div className="FashionItem_part">
                    <VirtualScroll>
                        <FashionItemCmt id={id} />
                    </VirtualScroll>
                </div>

                <div className="FashionItem_part">
                    <VirtualScroll>
                        <FashionOtherItem id={id} />
                    </VirtualScroll>
                </div>

                <div className="FashionItem_part">
                    <VirtualScroll>
                        <FashionRlt id={id} />
                    </VirtualScroll>
                </div>

                <div className="FashionItem_part">
                    <VirtualScroll>
                        <FashionItemMayLike id={id} />
                    </VirtualScroll>
                </div>
            </div>
        </div>
    );
}

export default FashionItem;
