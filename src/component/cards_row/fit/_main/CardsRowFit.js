import React from 'react';
import PropTypes from 'prop-types';
//
import { useCardsRowFit } from '../../../../_hooks/useCardsRowFit';
//
import CardsRowFitContain from '../contain/CardsRowFitContain';
//
import './CardsRowFit.scss';

//
CardsRowFit.propTypes = {};

//
function CardsRowFit({
    ItemComponent,
    item_props,

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
    } = useCardsRowFit({
        getItemElm: getItemElm,
        handle_API_L: handle_API_L,
        handleFetched: handleFetched,
    });

    // -----

    
    //
    function getItemElm() {
        return ref_scroll_elm.current.getElementsByTagName('li')[0];
    }

    //
    return (
        <CardsRowFitContain
            ItemComponent={ItemComponent}
            item_props={item_props}
            ref_scroll_elm={ref_scroll_elm}
            data_arr={data_state.data_arr}
            is_has_next={is_has_next}
            is_has_prev={is_has_prev}
            handleNext={handleNext}
            handlePrev={handlePrev}
        />
    );
}

export default CardsRowFit;
