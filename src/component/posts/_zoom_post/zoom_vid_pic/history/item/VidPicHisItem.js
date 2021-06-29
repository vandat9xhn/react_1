import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../../_some_function/FormatDate';

//
VidPicHisItem.propTypes = {};

//
function VidPicHisItem({ content_obj, created_time }) {
    //
    return (
        <div>
            <div>
                <div className="ScreenBlurItem_time">
                    Update at{' '}
                    {formatLocalDateTimeString(new Date(created_time))}
                </div>

                <div>
                    <div>{content_obj.content}</div>
                </div>
            </div>
        </div>
    );
}

export default VidPicHisItem;
