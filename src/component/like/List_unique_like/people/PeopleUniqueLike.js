import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../picture_name/pic_name_content/PicNameContent';
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
        <div className="PeopleUniqueLike">
            <div className="flex-between-center">
                <div className="PeopleUniqueLike_left flex-grow-1 text-nowrap">
                    <span className="font-13px text-white">
                        {item.user.first_name} {item.user.last_name}
                    </span>
                </div>

                <div className="PeopleUniqueLike_right">
                    {type_likes[item.type_like].component}
                </div>
            </div>
        </div>
    );
}

export default PeopleUniqueLike;
