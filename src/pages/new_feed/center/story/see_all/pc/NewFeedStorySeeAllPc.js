import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './NewFeedStorySeeAllPc.scss';

//
NewFeedStorySeeAllPc.propTypes = {};

//
function NewFeedStorySeeAllPc(props) {
    //
    return (
        <div className="NewFeedStorySeeAllPc padding-8px bg-primary brs-50 box-shadow-fb hv-bg-blur">
            <IconsArrow x={200} y={200} size_icon="2rem" />
        </div>
    );
}

export default NewFeedStorySeeAllPc;
