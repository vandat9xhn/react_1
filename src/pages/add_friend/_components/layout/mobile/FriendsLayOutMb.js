import React from 'react';
import PropTypes from 'prop-types';
//
import { usePageNotHeader } from '../../../../../_hooks/usePageNotHeader';
//
import './FriendsLayOutMb.scss';

//
FriendsLayOutMb.propTypes = {};

//
function FriendsLayOutMb({ ComponentLeftHead, ComponentLeftContain }) {
    //
    // usePageNotHeader();

    //
    return (
        <div className="FriendsLayOutMb bg-primary">
            <div className="pos-sticky top-header bg-primary z-index-1">
                {ComponentLeftHead}
            </div>

            <div>{ComponentLeftContain}</div>
        </div>
    );
}

export default FriendsLayOutMb;
