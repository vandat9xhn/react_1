import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
PLDetailInstallment.propTypes = {};

//
function PLDetailInstallment({ installment_arr }) {
    //
    return (
        <div className="PLDetailInstallment">
            <div className="PLDetailInstallment_row flex-between-center">
                {installment_arr.map((item, ix) => (
                    <Link
                        key={ix}
                        className={`PLDetailInstallment_col flex-grow-1 padding-y-5px brs-4px bg-blue text-align-center text-white ${
                            ix == 0 ? '' : 'margin-left-10px'
                        }`}
                        to={item.link_to}
                    >
                        <div className="text-upper font-13px">{item.title}</div>

                        <div className="font-12px">{item.info}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PLDetailInstallment;
