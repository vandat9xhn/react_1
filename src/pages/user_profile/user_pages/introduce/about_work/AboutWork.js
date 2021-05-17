import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditDiv from '../../../../../component/some_div/edit_div/EditDiv';
import SuccessDiv from '../../../../../component/some_div/success_div/SuccessDiv';
import './AboutWork.scss';
//
class AboutWork extends Component {
    state = {
        works: [],
        current_edit: '',
        is_success: false,
        shouldUpdate: false,
    };

    componentDidMount() {
        this.getWorkList();
    }
    
    /****** API ******/
     // get API about work
     getWorkList = () => {
        // get data work
        const data = {work: '', university: '', high_school: ''}
        const works = [
            {name: 'Work', value: data.work},
            {name: 'University', value: data.university},
            {name: 'High school', value: data.high_school}
        ]
        this.setState({
            works: works
        })
    };

    /******* Edit ******/
    // Toggle edit
    toggleEditing = (name) => {
        this.setState({
            current_edit: this.state.current_edit == name ? '' : name,
        })
    }
    
    // WORK
    // When change
    onValueChange = (value, index) => {
        const {works} = this.state;
        works[index].value = value
        this.setState({
            works: works,
            shouldUpdate: true,
        })
    }
    
    // Update
    updateWork = () => {
        this.setState({
            current_edit: '',
        })
        const works = this.state.works;

        if (this.state.shouldUpdate) {
            const data = {
                job: works[0].value,
                university: works[1].value,
                high_school: works[2].value,
            }
            this.setState({
                is_success: true,
                shouldUpdate: false,
            })
            setTimeout(() => {
                this.setState({is_success: false})
                console.log(data);
            }, 1500);
        }
    }
    render() {
        return (
            <div className="AboutWork">
                <div className="App_title">
                    Work and study
                </div>
                <div className="AboutWork_detail">
                    {
                        this.state.works.map((item, index) => (
                            <div key={`AboutWork${index}`}>
                                <EditDiv
                                    name={item.name}
                                    value={item.value}
                                    is_editing={this.state.current_edit === item.name}
                                    onValueChange={(value) => this.onValueChange(value, index)}
                                    toggleEditing={this.toggleEditing}
                                />
                            </div>
                        ))
                    }
                    <br/>
                    
                    <div className="AboutWork_update">
                        <button
                            className="brs-5px" 
                            onClick={this.updateWork}
                            title="Update your work and study"
                            disabled={!this.state.shouldUpdate}
                        >
                            Update
                        </button>                                                
                    </div>
                </div>
                <SuccessDiv is_show={this.state.is_success}>
                    Updating Successfully    
                </SuccessDiv>                    
            </div>          
        );
    }
}

AboutWork.propTypes = {
    
};

export default AboutWork;