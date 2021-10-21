import React from 'react';
import PropTypes from 'prop-types';
//
import './ListPeople.scss';

//
ListPeople.propTypes = {
    title: PropTypes.string,
    list_people: PropTypes.array,
    count_people: PropTypes.number,
    max_size: PropTypes.number,

    PeopleComponent: PropTypes.func,
};

ListPeople.defaultProps = {
    title: '',
    list_people: [],
    count_people: 0,
    max_size: 1,

    PeopleComponent: () => <div></div>,
};

//
function ListPeople({
    title,
    list_people,
    count_people,
    max_size,

    PeopleComponent,
}) {
    //
    return (
        <div className="ListPeople bg-shadow-9 brs-5px">
            {title ? <div className="font-600">{title}</div> : null}

            <ul className="list-none">
                {list_people.map((item, ix) => (
                    <li key={ix} className="ListPeople_item">
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
