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
        <div className="PeopleUniqueLike display-flex align-items-center">
            <PicNameContent user={item.user} />

            {type_likes[item.type_like].component}
        </div>
    );
}

export default PeopleUniqueLike;
