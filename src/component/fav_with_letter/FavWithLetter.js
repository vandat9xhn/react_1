import React from 'react';
import PropTypes from 'prop-types';
//
import IconFav from '../../_icons_svg/_icon_fav/IconFav';
// 
import './FavWithLetter.scss';

//
FavWithLetter.propTypes = {
    size_icon: PropTypes.string,
    letter: PropTypes.string,
    class_letter: PropTypes.string,
};

FavWithLetter.defaultProps = {
    size_icon: '3rem',
    class_letter: '',
};

//
function FavWithLetter({ size_icon, letter, class_letter }) {
    //
    return (
        <div className="FavWithLetter pos-rel">
            <div>
                <IconFav size_icon={size_icon} />
            </div>

            <div
                className={`pos-abs-center font-16px font-600 ${class_letter}`}
            >
                <div className="FavWithLetter_letter_contain display-flex-center brs-50 bg-shadow-6">
                    {letter}
                </div>
            </div>
        </div>
    );
}

export default FavWithLetter;
