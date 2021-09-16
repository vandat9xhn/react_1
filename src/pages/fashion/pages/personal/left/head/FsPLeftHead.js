import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import IconsEdit from '../../../../../../_icons_svg/icons_edit/IconsEdit';
//
import './FsPLeftHead.scss';

//
FsPLeftHead.propTypes = {};

//
function FsPLeftHead(props) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div className="FsPLeftHead padding-y-15px">
            <div className="FsPLeftHead_row display-flex">
                <img
                    className="brs-50 object-fit-cover"
                    src={user.picture}
                    alt=""
                    width="48"
                    height="48"
                />

                <div className="margin-left-15px">
                    <div className="font-600">
                        {user.first_name} {user.last_name}
                    </div>

                    <div className="text-third text-cap">
                        <div className="inline-flex align-items-center">
                            <IconsEdit size_icon="14px" />

                            <span className="margin-left-5px">Sửa hồ sơ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsPLeftHead;
