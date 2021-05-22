import React from 'react';
import PropTypes from 'prop-types';
// 
import AboutRightItem from '../../_component/about_right_item/AboutRightItem';

import AddNewWork from '../new_work/_main/AddNewWork';

// 
AboutWork.propTypes = {
    
};

// 
function AboutWork(props) {
    return (
        <div>
            <div>
                <div>
                    <AboutRightItem
                        title="Work"
                        add_title="a work"
                        AddNewComponent={<AddNewWork />}
                        AboutListComponent={}
                    />
                </div>

                <div>
                <AboutRightItem
                        title="University"
                        add_title="a university"
                        AddNewComponent={<AddNewWork />}
                        AboutListComponent={}
                    />
                </div>

                <div>
                <AboutRightItem
                        title="High School"
                        add_title="a high school"
                        AddNewComponent={<AddNewWork />}
                        AboutListComponent={}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutWork;