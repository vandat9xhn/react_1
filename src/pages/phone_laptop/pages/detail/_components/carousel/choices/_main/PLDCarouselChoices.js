import React from 'react';
import PropTypes from 'prop-types';
//
import PLCarouselChoice from '../item/PLDCarouselChoice';
//
import './PLDCarouselChoices.scss';

//
PLDCarouselChoices.propTypes = {};

//
function PLDCarouselChoices({ choice_arr, choice_ix, handleChoose }) {
    //
    return (
        <div className="PLDCarouselChoices font-12px">
            <ul className="PLDCarouselChoices_row display-flex margin-auto width-fit-content list-none">
                {choice_arr.map((item, ix) => (
                    <li
                        key={ix}
                        className={`PLDCarouselChoices_item text-align-center ${
                            ix == 0 ? '' : 'margin-left-10px'
                        }`}
                    >
                        <PLCarouselChoice
                            ix={ix}
                            img={item.img}
                            title={item.title}
                            is_active={ix == choice_ix}
                            handleChoose={handleChoose}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLDCarouselChoices;
