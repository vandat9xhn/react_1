import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Profile from '../../_main/Profile';
import img from '../../../../../image/my_image.png';
import './ProfilePicture.scss';
// class
class ProfilePicture extends Component {
    state = {
        titles_pic: ['common', 'profile picture', 'cover picture'],
        pictures: {},
        current_title: 'common',
    };

    componentDidMount() {
        this.setState({
            titles_pic: [...this.state.titles_pic, 'Da Nang'],
        });
        this.getPictures('common');
    }

    getPictures = (title) => {
        if (!this.state.pictures[title]) {
            if (title === 'Da Nang') {
                this.setState({
                    pictures: {
                        ...this.state.pictures,
                        [title]: [{ picture: img }],
                    },
                });
            } else {
                this.setState({
                    pictures: {
                        ...this.state.pictures,
                        [title]: [{ picture: img }, { picture: img }],
                    },
                });
            }
        }
    };

    changeCurrentTitle = (title) => {
        this.getPictures(title);
        this.setState({current_title: title})
    };

    render() {
        return (
            // <Profile>
                <div className="ProfilePicture">

                    {/* titles */}
                    <div className="ProfilePicture_titles">
                        {this.state.titles_pic.map((item, index) => (
                            <div
                                key={`profile_title_pic_${index}`}
                                className={`ProfilePicture_title ${this.state.current_title == item ? 'active-color' : ''}`}
                                onClick={() => this.changeCurrentTitle(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <br />

                    {/* pictures */}
                    <div className="ProfilePicture_pictures">
                        {this.state.pictures[this.state.current_title] &&
                            this.state.pictures[this.state.current_title].map(
                                (item, index) => (
                                    <div
                                        key={`profile_pic_${index}`}
                                        className="ProfilePicture_pic"
                                    >
                                        <img src={item.picture} alt="" />
                                    </div>
                                )
                            )}
                    </div>
                </div>

            // </Profile>
        );
    }
}

ProfilePicture.propTypes = {};

export default ProfilePicture;
