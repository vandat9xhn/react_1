import React from 'react';
import PropTypes from 'prop-types';
//
import VidPicHisItem from '../item/VidPicHisItem';
//
import './VidPicHistory.scss';

//
VidPicHistory.propTypes = {};

//
function VidPicHistory({ histories }) {
    //
    return (
        <div className="VidPicHistory">
            <ul className="VidPicHistory_row ScreenBlur_list">
                {histories.map((item, ix) => (
                    <li key={`${ix}`} className="VidPicHistory_item">
                        <VidPicHisItem
                            content_obj={item.content_obj}
                            created_time={item.created_time}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VidPicHistory;
