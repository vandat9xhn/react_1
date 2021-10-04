import React from 'react';
import PropTypes from 'prop-types';
//
import PLHeadList from '../../../../_components/list/PLHeadList';
// 
import './PLHMGroupsMb.scss';

//
const NEW_LINK_ARR = [
    {
        name: 'Phụ kiện ô tô',
        link_to: '',
    },
    {
        name: 'Thiết bị nhà thông minh',
        link_to: '',
    },
    {
        name: 'Màn hình máy tính',
        link_to: '',
    },
    {
        name: 'Thẻ cào giảm đến 5%',
        link_to: '',
    },
];

//
const TECH_LINK_ARR = [
    {
        name: '24h Công nghệ',
        link_to: '',
    },
    {
        name: 'Game App',
        link_to: '',
    },
    {
        name: 'Hỏi đáp',
        link_to: '',
    },
];

//
PLHMGroupsMb.propTypes = {};

//
function PLHMGroupsMb(props) {
    //
    return (
        <div className="PLHMGroupsMb padding-x-10px">
            <div className="PLHMGroupsMb_row display-flex">
                <div className="w-50per padding-right-5px">
                    <PLHeadList title="Nhóm hàng mới" link_arr={NEW_LINK_ARR} />
                </div>

                <div className="w-50per padding-left-5px">
                    <PLHeadList
                        title="Thế giới công nghệ"
                        link_arr={TECH_LINK_ARR}
                    />
                </div>
            </div>
        </div>
    );
}

export default PLHMGroupsMb;
