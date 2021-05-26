import React from 'react';
import PropTypes from 'prop-types';
//
import EditDiv from '../../../../../../../../component/some_div/edit_div/EditDiv';
import FlexDiv from '../../../../../../../../component/some_div/flex_div/FlexDiv';

//
AboutRowItem.propTypes = {};

//
function AboutRowItem(props) {
    const {
        Icon,
        title,

        permission,
        is_editing,
        handleChoosePermission,
        toggleEdit,
    } = props;

    //
    return (
        <div>
            <div className="display-flex-center">
                <div>
                    <FlexDiv ComponentLeft={Icon} ComponentRight={title} />
                </div>

                <div>
                    <EditDiv
                        permission={permission}
                        is_editing={is_editing}
                        handleChoosePermission={handleChoosePermission}
                        toggleEdit={toggleEdit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutRowItem;
