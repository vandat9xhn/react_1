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
function PfAboutOverviewItem({ link_to, Icon, title, permission }) {
    //
    return (
        <Link
            className="display-block color-inherit font-500 text-secondary"
            to={link_to}
            replace
        >
            <FlexDiv
                space_between={true}
                ComponentLeft={
                    <FlexDiv ComponentLeft={Icon} ComponentRight={title} />
                }
                ComponentRight={<PermissionDiv permission={permission} />}
            />
        </Link>
    );
}

export default PfAboutOverviewItem;
