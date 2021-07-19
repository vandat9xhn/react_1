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

// 
FashionItem.propTypes = {
    
};

// 
function FashionItem(props) {
    // 
    const id = + props.match.params.id

    // 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    // 
    return (
        <div className="FashionItem">
            <div>
                <FashionH />
            </div>

            <div className="fashion-width">
                <div className="FashionItem_part">
                    <FashionItemShop id={id}/>
                </div>
                
                <div className="FashionItem_part">
                    <FashionRate id={id}/>
                </div>

                <div className="FashionItem_part">
                    <FashionItemCmt id={id}/>
                </div>

                <div className="FashionItem_part">
                    <FashionOtherItem id={id}/>
                </div>

                <div className="FashionItem_part">
                    <FashionRlt id={id}/>
                </div>
            </div>
        </div>
    );
}

export default FashionItem;