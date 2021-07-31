import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
        <Link to={`/stories?type=all`} title="See all stories">
            <div className="NewFeedStorySeeAllPc padding-8px bg-primary brs-50 box-shadow-fb hv-bg-blur">
                <IconsArrow x={200} y={200} />
            </div>
        </Link>
    );
}

export default NewFeedStorySeeAllPc;
