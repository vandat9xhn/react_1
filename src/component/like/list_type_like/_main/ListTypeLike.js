import React from 'react';
import PropTypes from 'prop-types';
//
import { type_likes } from '../type_likes/TypeLikes';
//
import './ListTypeLike.scss';
//
import TypeLikeItem from '../item/TypeLikeItem';

//
ListTypeLike.propTypes = {
    open_type_like: PropTypes.bool,
    chooseListTypeLike: PropTypes.func,
};

//
function ListTypeLike({ chooseListTypeLike, open_type_like }) {
    //
    return (
        <div className="ListTypeLike position-rel">
            <div className={open_type_like ? 'open_type-like' : 'display-none'}>
                <div className="ListTypeLike_contain bg-primary box-shadow-1 brs-8px">
                    <div className="ListTypeLike_row display-flex">
                        {type_likes.map((item, index) => (
                            <div key={`ListTypeLike_${index}`}>
                                <TypeLikeItem
                                    index={index}
                                    title={item.title}
                                    component={item.component}
                                    chooseListTypeLike={chooseListTypeLike}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListTypeLike;
