import React from 'react';
import PropTypes from 'prop-types';
//
import ContentMore from '../../../../../content_more/Content_more';

//
CmtText.propTypes = {};

//
function CmtText({ content_obj, seeMoreContent }) {
    //
    return (
        <div className="CmtText">
            <div className="line-20px">
                <ContentMore
                    content_obj={content_obj}
                    seeMoreContent={seeMoreContent}
                />
            </div>
        </div>
    );
}

export default CmtText;
