import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';

// 
PfAboutFavourite.propTypes = {
    
};

// 
function PfAboutFavourite(props) {
    return (
        <div>
            <h3 className="PfAbout_title">Favourite Quotes</h3>

            <div className="PfAbout_add">
                <AddDiv>Add your favourite quotations</AddDiv>
            </div>
        </div>
    );
}

export default PfAboutFavourite;