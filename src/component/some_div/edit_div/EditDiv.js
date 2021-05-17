import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconsEdit from '../../../_icons_svg/icons_edit/IconsEdit';

import './EditDiv.scss';
import IconDiv from '../icon_div/IconDiv';
import IconsProfile from '../../../_icons_svg/icons_profile/IconsProfile';

// class
class EditDiv extends Component {
    state = {
        value: '',
    };


// toggle edit div
toggleEditing = (name) => {
    this.props.toggleEditing(name)
    setTimeout(() => {
        if (this.props.is_editing) {
            this.input.focus()
        }
    }, 100);
};


/* ------------------- INPUT ----------------------- */

    // ref
    inputEditDiv = elm => {
        if(elm !== null){
            this.input = elm
        }
    }

    // on change value
    onChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    // on change permission
    onPermissionChange = (event) => {
        this.props.onPermissionChange(event.target.value)
    }

    // render
    render() {
        const {x, y, icon_w, icon_h, name, value, permission, is_editing, onValueChange} = this.props;
        return (
            <div className="EditDiv">

                {/* name value */}
                <div className="EditDiv_name-value">


                    {/* name + permission */}
                    <div className="EditDiv__name">

                        {/* name */}
                        <div>
                            <IconDiv x={x} y={y} Icon={IconsProfile}>
                                {name}:
                            </IconDiv>               
                        </div>

                        {/* permission */}
                        <div>
                            {permission &&
                                <div className="EditDiv__value-permission">
                                    <select disabled={!is_editing} onChange={this.onPermissionChange} defaultValue={permission} title="Choose privacy">
                                        <option>Public</option>
                                        <option>Friends</option>
                                        <option>Private</option>
                                    </select>
                                </div>
                            }
                        </div>
                        
                    </div>
                    
                    
                    {/* value */}
                    <div className="EditDiv__value">
                        <div className="EditDiv__value-about">
                            <input
                                ref={this.inputEditDiv}
                                type="text"
                                onChange={this.onChange}
                                onBlur={() =>
                                    onValueChange(this.state.value)
                                }
                                defaultValue={value}
                                readOnly={!is_editing}
                                style={{backgroundColor: is_editing ? 'white' : ''}}
                                placeholder='Not thing'
                            />
                        </div>
                    </div>

                </div>


                {/* icon pen */}
                <div
                    className="EditDiv_icon"
                    title="Edit"
                    onClick={() => this.toggleEditing(name)}
                >
                    <IconsEdit
                        width={icon_w}
                        height={icon_h}
                        is_editing={is_editing}
                    />
                </div>
            </div>
        );
    }
}

EditDiv.propTypes = {
    // use icon for name?
    x: PropTypes.number,
    y: PropTypes.number,
    // icon pen
    icon_h: PropTypes.string,
    icon_w: PropTypes.string,
    // class
    name: PropTypes.string,
    value: PropTypes.string,
    is_editing: PropTypes.bool,
    // func
    onValueChange: PropTypes.func,
    onPermissionChange: PropTypes.func,
    toggleEditing: PropTypes.func,
};

EditDiv.defaultProps = {
    
}

export default EditDiv;
