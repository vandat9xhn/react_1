import React from 'react';
import PropTypes from 'prop-types';
//
import { type_likes } from '../../list_type_like/type_likes/TypeLikes';
//
import './PeopleUniqueLike.scss';

//
PeopleUniqueLike.propTypes = {
    item: PropTypes.object,
};

//
function PeopleUniqueLike({ item }) {
    //
    return (
        <div className="PeopleUniqueLike font-13px text-white">
            <div className="flex-between-center text-nowrap">
                <div className="PeopleUniqueLike_left flex-grow-1 text-nowrap">
                    {item.user.first_name} {item.user.last_name}
                </div>

                <div className="PeopleUniqueLike_right margin-left-5px">
                    {type_likes[item.type_like].component}
                </div>
            </div>
        </div>
    );
}

export default PeopleUniqueLike;
