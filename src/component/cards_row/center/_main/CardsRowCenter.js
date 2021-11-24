import React from 'react';
import PropTypes from 'prop-types';
//
import { useCardsRowCenter } from '../../../../_hooks/useCardsRowCenter';
//
import CardsRowCenterContain from '../contain/CardsRowCenterContain';
//
// import './CardsRowCenter.scss';

//
CardsRowCenter.propTypes = {};

//
function CardsRowCenter({
    ItemComponent,
    item_props,

    has_blur_side,

    handle_API_L,
    handleFetched,
}) {
    //
    const {
        ref_scroll_elm,

        is_has_next,
        is_has_prev,

        data_state,

        handleNext,
        handlePrev,
    } = useCardsRowCenter({
        handle_API_L: handle_API_L,
        getItemElm: getItemElm,
        handleFetched: handleFetched,
    });

    // -----

    
    //
    function getItemElm() {
        return ref_scroll_elm.current.getElementsByTagName('li')[0];
    }

    // -----

    

    //
    return (
        <CardsRowCenterContain
            ItemComponent={ItemComponent}
            item_props={item_props}
            ref_scroll_elm={ref_scroll_elm}
            data_arr={data_state.data_arr}
            // 
            has_blur_side={has_blur_side}
            is_has_next={is_has_next}
            is_has_prev={is_has_prev}
            handleNext={handleNext}
            handlePrev={handlePrev}
        />
    );
}

export default CardsRowCenter;
