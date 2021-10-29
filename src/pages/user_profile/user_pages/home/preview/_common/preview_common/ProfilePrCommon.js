import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import ComponentSkeleton from '../../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
//
import './ProfilePrCommon.scss';

//
ProfilePrCommon.propTypes = {
    title: PropTypes.string,
    sk: PropTypes.string,
    is_fetching: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

    ProfilePrSkeleton: PropTypes.func,
};

ProfilePrCommon.defaultProps = {
    ProfilePrSkeleton: () => <div></div>,
};

//
function ProfilePrCommon({
    children,
    title,
    sk,
    is_fetching,
    ProfilePrSkeleton,
}) {
    //
    return (
        <div className="ProfilePrCommon bg-primary box-shadow-1 brs-5px">
            <div className={is_fetching ? 'display-none' : ''}>
                <h2 className="ProfilePrCommon_title">
                    <Link
                        to={location.pathname + '?sk=' + sk}
                        className="normal-text hv-cl-blue"
                        replace={!IS_MOBILE}
                    >
                        {title}
                    </Link>
                </h2>

                <div>{children}</div>
            </div>

            <ComponentSkeleton
                component={<ProfilePrSkeleton />}
                has_fetched={!is_fetching}
            />
        </div>
    );
}

export default ProfilePrCommon;
