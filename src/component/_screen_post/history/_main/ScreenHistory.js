import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlur from '../../../_screen_blur/_main/ScreenBlur';
import ScreenBlurHead from '../../../_screen_blur/_component/head/ScreenBlurHead';
import ScreenBlurShowMore from '../../../_screen_blur/_component/foot/ScreenBlurShowMore';
//
import './ScreenHistory.scss';

//
class ScreenHistory extends Component {
    state = {
        open_history: false,
        is_fetching: false,
        histories: [],
        count_his: 0,
        has_fetched: false,
        //
        title: '',
        handle_API_History_L: () => new Promise(),
        HisComponent: () => <div></div>,
        data_his: {},
    };

    // common
    getAPI_History = async () => {
        const { histories, count_his, has_fetched, handle_API_History_L } =
            this.state;

        try {
            const [data, new_count] = await handle_API_History_L(
                histories.length
            );

            this.setState({
                is_fetching: false,
                count_his: has_fetched ? count_his : new_count,
                has_fetched: true,
                histories: [...histories, ...data],
            });
        } catch (e) {
            console.log(e);
        }
    };

    //
    openScreenHistory = (
        title,
        handle_API_History_L,
        HisComponent,
        data_his
    ) => {
        this.setState({
            open_history: true,
            is_fetching: true,
            has_fetched: false,

            title: title,
            handle_API_History_L: handle_API_History_L,
            HisComponent: HisComponent,
            data_his: data_his,
        });
        //
        setTimeout(() => {
            this.getAPI_History();
        }, 1);
    };

    //
    showMoreHistory = async () => {
        this.setState({
            is_fetching: true,
        });
        this.getAPI_History();
    };

    //
    closeScreenHistory = () => {
        this.setState({
            open_history: false,
            histories: [],
            count_his: 0,
            has_fetched: false,
            
            title: '',
            handle_API_History_L: () => new Promise(),
            HisComponent: () => <div></div>,
            data_his: {},
        });
    };

    //
    render() {
        //
        const {
            histories,
            count_his,
            title,
            HisComponent,
            data_his,
            //
            open_history,
            is_fetching,
        } = this.state;

        //
        return (
            open_history &&
            <ScreenBlur
                // open_screen={open_history}
                closeScreen={this.closeScreenHistory}
            >
                <div>
                    <ScreenBlurHead
                        title={title}
                        closeScreenBlur={this.closeScreenHistory}
                    />

                    <div className="ScreenBlur_body_contain scroll-thin">
                        <HisComponent histories={histories} {...data_his} />

                        <ScreenBlurShowMore
                            is_show_more={count_his > histories.length}
                            is_fetching={is_fetching}
                            handleShowMore={this.showMoreHistory}
                        />
                    </div>
                </div>
            </ScreenBlur>
        );
    }
}

ScreenHistory.propTypes = {};

export default ScreenHistory;
