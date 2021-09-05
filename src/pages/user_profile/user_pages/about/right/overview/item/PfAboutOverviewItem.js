import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import FlexDiv from '../../../../../../../component/some_div/flex_div/FlexDiv';
import PermissionDiv from '../../../../../../../component/some_div/permission_div/PermissionDiv';

//
PfAboutOverviewItem.propTypes = {
    link_to: PropTypes.string,
    Icon: PropTypes.element,
    title: PropTypes.string,
    permission: PropTypes.number,
};

//
function PfAboutOverviewItem(props) {
    const { link_to, Icon, title, permission } = props;

    //
    return (
        <div>
            <Link
                to={link_to}
                replace
                className="normal-text font-500 text-secondary"
            >
                <FlexDiv
                    space_between={true}
                    ComponentLeft={
                        <FlexDiv ComponentLeft={Icon} ComponentRight={title} />
                    }
                    ComponentRight={<PermissionDiv permission={permission} />}
                />
            </Link>
        </div>
    );
}

export default PfAboutOverviewItem;
