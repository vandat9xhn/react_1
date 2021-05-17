import React from 'react';
import PropTypes from 'prop-types';
// 
import PictureName from '../../../picture_name/pic_name/PictureName';
import { type_likes } from '../../list_type_like/type_likes/TypeLikes';
// 
import './PeopleUniqueLike.scss';

// 
PeopleUniqueLike.propTypes = {
    item: PropTypes.object,
};

// 
function PeopleUniqueLike(props) {
    const {item} = props;

    // 
    return (
        <div className="PeopleUniqueLike display-flex align-items-center">
            <PictureName user={item.user} />

            {type_likes[item.type_like].component}
        </div>
    );
}

export default PeopleUniqueLike;