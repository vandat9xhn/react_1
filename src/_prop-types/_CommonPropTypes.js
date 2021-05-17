import PropTypes from 'prop-types';

// user
export const user_propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        picture: PropTypes.string,
    }),
};
export const user_default = {
    user: {
        id: 0,
        first_name: '',
        last_name: '',
        picture: '',
    },
};

// content for PictureName
export const content_pic_name_props = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
]);
