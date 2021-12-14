import React from 'react';
import PropTypes from 'prop-types';
//
import HasLinkOrNot from '../../../../../component/link/has_link_or_not/HasLinkOrNot';
// 
import './FbPageInfoExtra.scss';

//
function FbPageInfoExtraItem({ title, has_link, link_to }) {
    //
    return (
        <HasLinkOrNot
            class_link={`${has_link ? 'font-500' : ''}`}
            has_link={has_link}
            link_to={link_to}
        >
            {title}
        </HasLinkOrNot>
    );
}

//
FbPageInfoExtra.propTypes = {};

//
function FbPageInfoExtra({ info_extra_1, info_extra_2 }) {
    //
    return (
        <div className="FbPageInfoExtra text-secondary font-17px">
            <FbPageInfoExtraItem {...info_extra_1} />
            {' · '}
            <FbPageInfoExtraItem {...info_extra_2} />
        </div>
    );
}

export default FbPageInfoExtra;
