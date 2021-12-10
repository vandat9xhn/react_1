import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import ComponentSkeleton from '../../skeleton/component_skeleton/ComponentSkeleton';
//
import './ProfileLayoutHomePreview.scss';

//
ProfileLayoutHomePreview.propTypes = {
    title: PropTypes.string,
    sk: PropTypes.string,
    is_fetching: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

    ProfilePrSkeleton: PropTypes.func,
};

ProfileLayoutHomePreview.defaultProps = {
    ProfilePrSkeleton: () => <div></div>,
};

//
function ProfileLayoutHomePreview({
    title,
    link_to,
    is_fetching,
    children,

    ProfilePrSkeleton,
}) {
    //
    return (
        <div className="ProfileLayoutHomePreview padding-16px bg-primary box-shadow-1 brs-5px">
            <div className={is_fetching ? 'display-none' : ''}>
                <div className="flex-between-center padding-bottom-16px">
                    <h2 className="ProfileLayoutHomePreview_title font-20px">
                        {title}
                    </h2>

                    <Link to={link_to} className="hv-underline">
                        See all
                    </Link>
                </div>

                <div>{children}</div>
            </div>

            <ComponentSkeleton
                component={<ProfilePrSkeleton />}
                has_fetched={!is_fetching}
            />
        </div>
    );
}

export default ProfileLayoutHomePreview;
