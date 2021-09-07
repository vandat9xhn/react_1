import React from 'react';
import PropTypes from 'prop-types';

//
FsBtnsConfirm.propTypes = {
    back_title: PropTypes.string,
    confirm_title: PropTypes.string,

    back_class: PropTypes.string,
    confirm_class: PropTypes.string,

    handleBack: PropTypes.func,
    handleConfirm: PropTypes.func,
};

FsBtnsConfirm.defaultProps = {
    back_title: 'Trở lại',
    confirm_title: 'Hoàn thành',

    back_class: '',
    confirm_class: '',
};

//
function FsBtnsConfirm({
    back_title,
    confirm_title,

    back_class,
    confirm_class,

    handleBack,
    handleConfirm,
}) {
    return (
        <React.Fragment>
            <button
                type="button"
                className={`${back_class} margin-right-10px padding-6px brs-3px btn cursor-pointer hv-bg-blur text-upper text-secondary`}
                onClick={handleBack}
            >
                {back_title}
            </button>

            <button
                type="button"
                className={`${confirm_class} padding-6px brs-3px btn btn-hv cursor-pointer bg-fashion-red text-upper text-white`}
                onClick={handleConfirm}
            >
                {confirm_title}
            </button>
        </React.Fragment>
    );
}

export default FsBtnsConfirm;
