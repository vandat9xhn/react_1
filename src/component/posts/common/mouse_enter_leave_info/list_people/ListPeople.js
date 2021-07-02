import React from 'react';
import PropTypes from 'prop-types';
//
import PictureName from '../../../../picture_name/pic_name/PictureName';
//
import './ListPeople.scss';

//
ListPeople.propTypes = {
    list_people: PropTypes.array,
    count_people: PropTypes.number,
    max_size: PropTypes.number,

    PeopleComponent: PropTypes.func,
    is_pic_name: PropTypes.bool,
};

ListPeople.defaultProps = {
    list_people: [],
    count_people: 0,
    max_size: 1,
    
    PeopleComponent: () => <div></div>,
    is_pic_name: true,
};

//
function ListPeople({
    list_people,
    count_people,
    max_size,

    is_pic_name,
    PeopleComponent,
}) {
    //
    return (
        <div className="ListPeople bg-loader brs-5px">
            <div>
                {list_people.map((item, index) => (
                    <div
                        key={`ListPeople_${index}`}
                        className="ListPeople_item"
                    >
                        {is_pic_name ? (
                            <PictureName user={item.user} />
                        ) : (
                            <PeopleComponent item={item} />
                        )}
                    </div>
                ))}

                {count_people > max_size && (
                    <div className="ListPeople_item">
                        {`And ${count_people - max_size} others...`}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListPeople;
