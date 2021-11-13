import React from 'react';
import PropTypes from 'prop-types';

//
SelectOneSearchOption.propTypes = {};

//
function SelectOneSearchOption({ ix, img, title, choseOption }) {
    //
    function handleClick() {
        choseOption(ix);
    }

    //
    return (
        <div
            className="SelectOneSearchOption padding-8px brs-6px line-20px cursor-pointer hv-bg-fb"
            onClick={handleClick}
        >
            <div className="display-flex align-items-center">
                {img ? (
                    <img
                        className="margin-right-12px brs-6px object-fit-cover"
                        src={img}
                        alt=""
                        width="36"
                        height="36"
                    />
                ) : null}

                <div className="font-600">{title}</div>
            </div>
        </div>
    );
}

export default SelectOneSearchOption;
