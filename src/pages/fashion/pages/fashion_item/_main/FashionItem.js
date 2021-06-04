import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// 
import FashionH from '../../../components/head/_main/FashionH';

import FashionItemShop from '../item_shop/_main/FashionItemShop';
import FashionRate from '../rate/_main/FashionRate';
import FashionRlt from '../relative/FashionRlt';
import FashionItemCmt from '../comment/_main/FashionItemCmt';
// 
import './FashionItem.scss';

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
        <div>
            <div>
                <FashionH />
            </div>

            <div className="bg-primary">
                <div>
                    <FashionItemShop id={id}/>
                </div>
                
                <div>
                    <FashionRate id={id}/>
                </div>

                <div>
                    <FashionItemCmt id={id}/>
                </div>

                <div>
                    <FashionRlt id={id}/>
                </div>
            </div>
        </div>
    );
}

export default FashionItem;