import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import PLHomeBannerHot from '../banner_hot/_main/PLHomeBannerHot';
import PLHomeOnlineSale from '../online_sale/_main/PLHomeOnlineSale';
import PLHomeSeen from '../seen/_main/PLHomeSeen';
import PLHomeBestPhones from '../best_phones/_main/PLHomeBestPhones';
import PLHomeBestLaptops from '../best_laptops/_main/PLHomeBestLaptops';
import PLHomeBrands from '../brands/_main/PLHomeBrands';
import PLHomeNew from '../new/_main/PLHomeNew';
import PLHomeTech from '../tech/_main/PLHomeTech';
import PLHomeNav from '../nav/_main/PLHomeNav';
//
import './PLHome.scss';
import './PLHomeCommon.scss';
//
import '../_mobile_css/PLHomeMb.scss';
import '../_mobile_css/PLHomeBannerHotMb.scss';
import '../_mobile_css/PLHomeBestLaptopsMb.scss';
import '../_mobile_css/PLHomeBestPhonesMb.scss';
import '../_mobile_css/PLHomeBrandsMb.scss';
import '../_mobile_css/PLHomeNewMb.scss';
import '../_mobile_css/PLHomeOnlineSaleMb.scss';
import '../_mobile_css/PLHomeTechMb.scss';

//
PLHome.propTypes = {};

//
function PLHome(props) {
    //
    return (
        <div
            className={`PLHome bg-primary ${IS_MOBILE ? 'PLHome-mobile' : ''}`}
        >
            <div className="fashion-width">
                <div className="PLHome_part PLHome_banner padding-top-20px">
                    <PLHomeBannerHot />
                </div>

                {IS_MOBILE ? (
                    <div className="PLHome_part">
                        <PLHomeNav />
                    </div>
                ) : null}

                <div className="PLHome_part">
                    <PLHomeOnlineSale />
                </div>

                <div className="PLHome_part">
                    <PLHomeSeen />
                </div>

                <div className="PLHome_part">
                    <PLHomeBestPhones />
                </div>

                <div className="PLHome_part">
                    <PLHomeBestLaptops />
                </div>

                <div className="PLHome_part">
                    <PLHomeBrands />
                </div>

                <div className="PLHome_part">
                    <PLHomeNew />
                </div>

                <div className="PLHome_part">
                    <div className="PLHome_tech_app display-flex">
                        <div className="PLHome_tech">
                            <PLHomeTech />
                        </div>

                        <div className="PLHome_app"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PLHome;
