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
        <div className="ListTypeLike pos-rel user-select-none">
            <div className={open_type_like ? 'open-type-like' : 'display-none'}>
                <div className="ListTypeLike_contain padding-5px bg-primary">
                    <div className="ListTypeLike_row display-flex">
                        {type_likes.map((item, index) => (
                            <div
                                key={index}
                                className="ListTypeLike_item margin-x-5px flex-shrink-0"
                            >
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
