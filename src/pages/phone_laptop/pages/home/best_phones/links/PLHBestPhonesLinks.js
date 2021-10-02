import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import PLLinks from '../../../../components/links/PLLinks';
//
import './PLHBestPhonesLinks.scss';

//
PLHBestPhonesLinks.propTypes = {};

//
function PLHBestPhonesLinks({ link_arr, count }) {
    //
    return (
        <div className="PLHBestPhonesLinks">
            <PLLinks
                link_arr={
                    IS_MOBILE
                        ? link_arr
                        : [
                              ...link_arr,
                              {
                                  link_to: '/phone-laptop-phones',
                                  name: (
                                      <span>
                                          Xem tất cả <b>{count}</b> điện thoại
                                      </span>
                                  ),
                              },
                          ]
                }
                class_item="PLHBestPhonesLinks_item margin-left-10px"
            />
        </div>
    );
}

export default PLHBestPhonesLinks;
