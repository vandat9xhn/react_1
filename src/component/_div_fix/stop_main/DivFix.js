import React, { Component } from 'react';
// 
import DivFixItem from '../item/DivFixItem';

// 
class DivFix extends Component {
    state = {
        fix_arr: [] || [
            {
                type: '',
                FixComponent: <div></div>,
            }
        ]
    }

    // 
    openDivFix = () => {

    }

    // 
    closeDivFix = () => {

    }

    // 
    render() {
        // 
        const {fix_arr} = this.state

        // 
        return (
            <div>
                <div>
                    {fix_arr.map((item) => (
                        <div key={`${item.type}`}>
                            <DivFixItem  {...item}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default DivFix;