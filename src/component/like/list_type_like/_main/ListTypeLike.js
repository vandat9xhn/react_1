import React from 'react';
import PropTypes from 'prop-types';
//
import TypeLikeItem from '../item/TypeLikeItem';
import { type_likes } from '../type_likes/TypeLikes';
//
import './ListTypeLike.scss';

//
ListTypeLike.propTypes = {
    open_type_like: PropTypes.bool,
    chooseListTypeLike: PropTypes.func,
};

//
function ListTypeLike(props) {
    const { chooseListTypeLike, open_type_like } = props;

    //
    return (
        <div className="ListTypeLike">
            <div className={open_type_like ? 'open_type-like' : 'display-none'}>
                <div className="ListTypeLike_contain App_box_shadow">
                    <div className="ListTypeLike_row">
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
