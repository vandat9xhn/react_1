import React from 'react';
import PropTypes from 'prop-types';
//
import BtnNexPrev from '../../../../../../../component/button/next_prev/BtnNexPrev';
//
import './FsSCSortPage.scss';

//
FsSCSortPage.propTypes = {};

//
function FsSCSortPage({
    page,
    pages,

    is_fetching,

    handleNext,
    handlePrev,
}) {
    //
    return (
        <div className="FsSCSortPage">
            <div className="FsSCSortPage_row display-flex align-items-center">
                <div className="margin-right-20px">
                    <span className="color-fashion">{page}</span>

                    <span>/{pages}</span>
                </div>

                <div className="display-flex">
                    <BtnNexPrev
                        is_next={false}
                        btn_class={`FsSCSortPage_btn margin-right-1px padding-10px ${
                            page == 1 || is_fetching ? 'opacity-05' : ''
                        }`}
                        size_icon="10px"
                        disabled={page == 1}
                        handleClick={handlePrev}
                    />

                    <BtnNexPrev
                        is_next={true}
                        btn_class={`FsSCSortPage_btn margin-right-1px padding-10px ${
                            page == pages || is_fetching ? 'opacity-05' : ''
                        }`}
                        size_icon="10px"
                        disabled={page == pages}
                        handleClick={handleNext}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsSCSortPage;
