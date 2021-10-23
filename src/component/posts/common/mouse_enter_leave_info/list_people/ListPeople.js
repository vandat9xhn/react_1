import React from 'react';
import PropTypes from 'prop-types';
//
import './ListPeople.scss';

//
ListPeople.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
        <div className="ListPeople padding-10px bg-shadow-8 brs-8px">
            {title ? (
                <div className="padding-bottom-5px font-400 text-white text-cap">
                    {title}
                </div>
            ) : null}

            <ul className="list-none">
                {list_people.map((item, ix) => (
                    <li key={ix} className="ListPeople_item">
                        <PeopleComponent item={item} />
                    </li>
                ))}
            </ul>

            {count_people > max_size && (
                <div className="padding-top-5px font-13px font-500 text-white">
                    {`And ${count_people - max_size} others...`}
                </div>
            )}
        </div>
    );
}

export default ListPeople;
