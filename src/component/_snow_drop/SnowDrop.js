import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 
import IconsFlower from '../../_icons_svg/icons_flower/IconsFlower';
import IconsNature from '../../_icons_svg/icons_nature/IconsNature';
// 
import './SnowDrop.scss';

//
const count_nature = [1, 2, 3, 4, 5, 6];

//
class SnowDrop extends Component {
    state = {
        num_arr: [],
        which_nature: '',
    };

    componentDidMount() {
        this.intervals = [];
    }

    // clear intervals
    clearIntervalNature = () => {
        for (const interval of this.intervals) {
            clearInterval(interval);
        }
    };

    // reset
    resetNature = () => {
        this.intervals = [];
        this.setState({
            num_arr: [],
            which_nature: '',
        });
    };

    // make random snow ball
    makeSnowBall = (ix) => {
        for (let i = 0; i < count_nature.length; i++) {
            if (this.state.which_nature == '') {
                return;
            }
            if (this.state.num_arr.length == 0) {
                return;
            }

            // random left positions}
            const left_1 = Math.random() * 100;
            const left_2 = left_1 + (Math.random() * 2 - 1) * 10;
            const left_3 = left_2 + (Math.random() * 2 - 1) * 10;
            const left_4 = left_3 + (Math.random() * 2 - 1) * 10;

            // set animation
            const elm_ball = document.getElementsByClassName(
                'SnowDrop_ball' + ix
            )[i];
            setTimeout(() => {
                elm_ball.animate(
                    [
                        {
                            left: left_1 + '%',
                            top: '-5%',
                            opacity: 1,
                            transform: 'rotate(0deg)',
                        },
                        {
                            left: left_2 + '%',
                            top: '38%',
                            opacity: 0.8,
                            transform: 'rotate(360deg)',
                        },
                        {
                            left: left_3 + '%',
                            top: '71%',
                            opacity: 0.6,
                            transform: 'rotate(720deg)',
                        },
                        {
                            left: left_4 + '%',
                            top: '104%',
                            opacity: 0.4,
                            transform: 'rotate(1080deg)',
                        },
                    ],
                    {
                        duration: (Math.random() * 17 + 3) * 1000,
                        easing: 'linear',
                        delay: (Math.random() * 3 + i) * 1000,
                    }
                );
                // set snow flake
                const is_snow = this.state.which_nature == 'snow';
                if ((is_snow && i == 3) || !is_snow) {
                    elm_ball.children[0].style.width =
                        Math.random() * 0.5 + 1 + 'rem';
                    elm_ball.children[0].style.height =
                        Math.random() * 0.5 + 1 + 'rem';
                } else {
                    elm_ball.style.padding = Math.random() * 8 + 1 + 'px';
                    elm_ball.style.backgroundColor = '#f0e9e9';
                    elm_ball.style.boxShadow = '0 0 0.6rem 0.05rem #f0ebeb';
                }
            }, 50);
        }
    };

    /*-------------------------------------------*/

    // toggle nature
    toggleSnowFlower = (new_which_nature) => {
        this.clearIntervalNature();
        setTimeout(() => {
            this.resetNature();
        }, 10);

        if (new_which_nature !== '') {
            setTimeout(() => {
                this.startNewNature(new_which_nature);
            }, 100);
        }
    };

    // start new nature
    startNewNature = (new_which_nature) => {
        this.setState({
            num_arr: [1, 2, 3, 4],
            which_nature: new_which_nature,
        });
        //
        setTimeout(() => {
            this.makeSnowBall(1);
        }, 100);
        setTimeout(() => {
            this.makeSnowBall(2);
        }, 5000);
        //
        setTimeout(() => {
            const { num_arr } = this.state;
            for (const i of num_arr) {
                const interval = setInterval(() => {

                    this.makeSnowBall(i);
                    
                    this.intervals.push(interval);
                }, 15000 + (i - 1) * 10000);
            }
        }, 100);
    };

    // render
    render() {
        const { which_nature, num_arr } = this.state;

        //
        return (
            <div className="SnowDrop">
                {which_nature == 'snow' &&
                    num_arr.map((arr) => (
                        <div key={`SnowBall_arr_${arr}`}>
                            {count_nature.map((item) => (
                                <div
                                    key={`SnowBall_item_${item}`}
                                    className={`SnowDrop_ball SnowDrop_ball${arr}`}
                                >
                                    {item == 4 ? <IconsNature /> : ''}
                                </div>
                            ))}
                        </div>
                    ))}

                {which_nature == 'flower' &&
                    num_arr.map((arr) => (
                        <div key={`SnowBall_arr_${arr}`}>
                            {count_nature.map((item) => (
                                <div
                                    key={`SnowBall_item_${item}`}
                                    className={`SnowDrop_ball SnowDrop_ball${arr}`}
                                >
                                    <IconsFlower />
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        );
    }
}

SnowDrop.propTypes = {};

export default SnowDrop;
