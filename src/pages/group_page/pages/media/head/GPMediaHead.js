import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconPlusSubtract from '../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import BtnActions from '../../../../../component/button/actions/BtnActions';
//
import './GPMediaHead.scss';

//
GPMediaHead.propTypes = {};

//
function GPMediaHead({ group_id, openAddMedia }) {
    //
    return (
        <div className="GPMediaHead">
            <div className="GPMediaHead_row flex-between-center">
                <h2 className="GPMediaHead_title font-20px font-700">Media</h2>

                <div className="display-flex align-items-center">
                    <Link
                        className="GPMediaHead_btn display-flex-center h-36px"
                        to={`/group/${group_id}/media/album/create`}
                    >
                        <IconPlusSubtract
                            size_icon="16px"
                            stroke="currentColor"
                        />

                        <div className="margin-left-8px">Create Album</div>
                    </Link>

                    <div className="margin-left-10px">
                        <BtnActions
                            className="GPMediaHead_btn"
                            title="Add Photos/Videos"
                            use_icon={false}
                            handleClick={openAddMedia}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GPMediaHead;
