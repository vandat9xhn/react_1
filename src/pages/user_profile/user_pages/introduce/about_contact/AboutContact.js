import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import EditDiv from '../../../../../component/some_div/edit_div/EditDiv';
import SuccessDiv from '../../../../../component/some_div/success_div/SuccessDiv';
//
import './AboutContact.scss';
//
class AboutContact extends Component {
    state = {
        contacts: [],
        current_edit: '',
        is_success: false,
        shouldUpdate: false,
    };

    componentDidMount() {
        this.getContactList();
    }

    /****** API ******/
    // get API about contact
    getContactList = () => {
        // get data work
        const data = {
            phone: '',
            permission_phone: 'Public',
            email: '',
            permission_email: 'Public',
            address: '',
            permission_address: 'Public',
        };
        const contacts = [
            {
                name: 'Phone',
                value: data.phone,
                permission: data.permission_phone,
                x: 0,
                y: 200,
            },
            {
                name: 'Email',
                value: data.email,
                permission: data.permission_email,
                x: 200,
                y: 0,
            },
            {
                name: 'Address',
                value: data.address,
                permission: data.permission_address,
                x: 0,
                y: 0,
            },
        ];
        this.setState({
            contacts: contacts,
        });
    };

    /******* Edit ******/
    // Toggle edit
    toggleEditing = (name) => {
        this.setState({
            current_edit: this.state.current_edit == name ? '' : name,
        });
    };

    // CONTACT
    // When change
    onValueChange = (value, index) => {
        const { contacts } = this.state;
        contacts[index].value = value;
        this.setState({
            contacts: contacts,
            shouldUpdate: true,
        });
    };
    onPermissionChange = (permission, index) => {
        const { contacts } = this.state;
        contacts[index].permission = permission;
        this.setState({
            contacts: contacts,
            shouldUpdate: true,
        });
    };
    // Update
    updateWork = () => {
        this.setState({
            current_edit: '',
        });
        const contacts = this.state.contacts;

        if (this.state.shouldUpdate) {
            const data = {
                phone: contacts[0].value,
                permission_phone: contacts[0].permission,
                email: contacts[1].value,
                permission_email: contacts[1].permission,
                address: contacts[2].value,
                permission_address: contacts[2].permission,
            };
            this.setState({
                is_success: true,
                shouldUpdate: false,
            });
            setTimeout(() => {
                this.setState({ is_success: false });
                console.log(data);
            }, 1500);
        }
    };

    // 
    render() {
        const { contacts, current_edit, shouldUpdate, is_success } = this.state;
        return (
            <div className="AboutContact">
                <div className="App_title">Contact</div>
                <div className="AboutContact_detail">
                    {contacts.map((item, index) => (
                        <div key={`AboutContact${index}`}>
                            <EditDiv
                                x={item.x}
                                y={item.y}
                                name={item.name}
                                value={item.value}
                                permission={item.permission}
                                is_editing={current_edit === item.name}
                                onValueChange={(value) =>
                                    this.onValueChange(value, index)
                                }
                                onPermissionChange={(permission) =>
                                    this.onPermissionChange(permission, index)
                                }
                                toggleEditing={this.toggleEditing}
                            />
                        </div>
                    ))}
                    <br />

                    <div className="AboutContact_update">
                        <button
                            className="brs-5px"
                            onClick={this.updateWork}
                            title="Update your work and study"
                            disabled={!shouldUpdate}
                        >
                            Update
                        </button>
                    </div>
                </div>
                <SuccessDiv is_show={is_success}>
                    Updating Successfully
                </SuccessDiv>
            </div>
        );
    }
}

AboutContact.propTypes = {};

export default AboutContact;
