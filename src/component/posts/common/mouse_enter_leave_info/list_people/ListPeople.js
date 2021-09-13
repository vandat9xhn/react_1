import React from 'react';
import PropTypes from 'prop-types';
//
import './ListPeople.scss';

//
ListPeople.propTypes = {
    list_people: PropTypes.array,
    count_people: PropTypes.number,
    max_size: PropTypes.number,
    PeopleComponent: PropTypes.func,
};

ListPeople.defaultProps = {
    list_people: [],
    count_people: 0,
    max_size: 1,
    PeopleComponent: () => <div></div>,
};

//
function ListPeople({ list_people, count_people, max_size, PeopleComponent }) {
    //
    return (
        <div className="ListPeople bg-shadow-9 brs-5px">
            <ul className="list-none">
                {list_people.map((item, index) => (
                    <li key={`${index}`} className="ListPeople_item">
                        <PeopleComponent item={item} />
                    </li>
                ))}
            </ul>

            {count_people > max_size && (
                <div className="text-white padding-4px">
                    <span className="font-13px font-500">
                        {`And ${count_people - max_size} others...`}
                    </span>
                </div>
            )}
        </div>
    );
}

export default ListPeople;
