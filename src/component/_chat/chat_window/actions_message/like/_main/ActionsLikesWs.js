import React from 'react';
import PropTypes from 'prop-types';
//
import { type_likes } from '../../../../../like/list_type_like/type_likes/TypeLikes';
import TypesLike from '../types_like/TypesLike';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ActionsLike.scss';

//
ActionsLike.propTypes = {};

//
function ActionsLike({ is_active, chat_ix, chooseBdTypeLike, user_like }) {
    //
    function onChooseBdTypeLike(type_like) {
        chooseBdTypeLike(type_like, chat_ix);
    }

    //
    function onDelBdTypeLike() {
        chooseBdTypeLike(-1, chat_ix);
    }

    //
    return (
        <div className="ActionsLike">
            <div
                className={`ActionsLike_contain  ${
                    is_active ? 'open_type-like' : ''
                }`}
            >
                <div className={`ActionsLike_row display-flex`}>
                    {type_likes.map((item, index) => (
                        <TypesLike
                            key={`ActionsLike_${index}`}
                            item_ix={index}
                            component={item.component}
                            chooseBdTypeLike={onChooseBdTypeLike}
                        />
                    ))}
                    <div
                        className={`ActionsLike_del display-flex align-items-center ${
                            user_like == undefined || user_like == -1
                                ? 'pointer-events-none opacity-5'
                                : 'cursor-pointer'
                        }`}
                    >
                        <div
                            className="close-icon-small brs-50"
                            onClick={onDelBdTypeLike}
                        >
                            <IconsArrow y={400} size_icon="1rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionsLike;
