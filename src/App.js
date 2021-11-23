import React, { Component, Suspense } from 'react';
import {
    BrowserRouter,
    // Redirect, Route, Switch
} from 'react-router-dom';
//
import './_style/root.scss';
import './_style/App.scss';

import './_style/display.scss';
import './_style/position.scss';
import './_style/transition.scss';
import './_style/properties.scss';

import './_style/classes.scss';
import './_style/bg.scss';
import './_style/border.scss';
import './_style/box_shadow.scss';
import './_style/button.scss';
import './_style/form.scss';
import './_style/hover.scss';
import './_style/icon.scss';
import './_style/input.scss';
import './_style/margin_padding.scss';
import './_style/screen.scss';
import './_style/scroll.scss';
import './_style/text.scss';
import './_style/width_height.scss';

import './_style/story.scss';
import './_style/post.scss';
import './_style/vid_pic_max_3.scss';
import './_style/vid_pics.scss';

import './_style/fashion.scss';
import './_style/fb.scss';
import './_style/phone.scss';

import './_style/device.scss';
//
// import { Routes } from './__routes/__main';
//
import ContextAPI from './_context/ContextAPIProvider';
//
import { IS_MOBILE } from './_constant/Constant';
//
// import Auth from './_auth/Auth';
import CustomSwitch from './__Switch/__switch';
//
import WaitingBall from './component/waiting/waiting_ball/WaitingBall';
//
import Header from './component/_header_pc/_main/Header';
import HeaderMobile from './component/_header_mobile/_main/HeaderMobile';
import PLHead from './pages/phone_laptop/components/head/_main/PLHead';
import Footer from './component/_footer/_main/Footer';
//
import AppScreen from './component/_screen/_main/AppScreen';
import ScreenOnce from './component/_screen_once/_main/ScreenOnce';
import NatureDropMain from './component/_snow_drop/_main/NatureDropMain';
//
import Chat from './component/_chat/_main/Chat';
import Contact from './component/_contact/Contact';
import BackTop from './component/_back_to_top/BackTop';
import PLCompare from './component/pl_compare/_main/PLCompare';
import SomeLinks from './component/some_links/SomeLinks';
//
import './component/_header_pc/_main/HeaderCommon.scss';

// App
class App extends Component {
    // ------
    componentDidMount() {
        if (IS_MOBILE) {
            document
                .getElementsByTagName('body')[0]
                .classList.add('device-mobile');
        }
    }

    // --------- REF

    //
    refChat = IS_MOBILE
        ? () => {}
        : (elm) => {
              if (elm !== null) {
                  this.openRoomChat = elm.openRoomChat;
                  this.hideRoomChat = elm.hideRoomChat;
                  this.hideAllRoomChat = elm.hideAllRoomChat;
                  this.closeRoomChat = elm.closeRoomChat;
                  this.closeAllRoomChat = elm.closeAllRoomChat;
              }
          };

    //
    refLinks = IS_MOBILE
        ? (elm) => {
              if (elm !== null) {
                  this.openRoomChat = elm.openRoomChat;
                  this.hideRoomChat = () => {};
                  this.hideAllRoomChat = () => {};
                  this.closeRoomChat = () => {};
                  this.closeAllRoomChat = () => {};
              }
          }
        : () => {};

    //
    refAppScreen = (elm) => {
        if (elm != null) {
            this.openScreenFloor = elm.openScreenFloor;
            this.closeScreenFloor = elm.closeScreenFloor;
            this.detectScreenHasChange = elm.detectScreenHasChange;
        }
    };

    //
    refScreenOnce = (elm) => {
        if (elm != null) {
            this.openScreenOnce = elm.openScreenOnce;
            this.closeScreenOnce = elm.closeScreenOnce;
        }
    };

    //
    refNatureDropMain = (elm) => {
        if (elm !== null) {
            this.toggleSnowFlower = elm.toggleSnowFlower;
        }
    };

    // ---------

    //
    handleRefresh = () => {
        this.setState({});
    };

    //
    render() {
        return (
            <Suspense fallback={<WaitingBall waitingBall_center={true} />}>
                <BrowserRouter>
                    <ContextAPI
                        handleRefresh={this.handleRefresh}
                        //
                        openRoomChat={this.openRoomChat}
                        hideRoomChat={this.hideRoomChat}
                        hideAllRoomChat={this.hideAllRoomChat}
                        closeRoomChat={this.closeRoomChat}
                        closeAllRoomChat={this.closeAllRoomChat}
                        //
                        toggleSnowFlower={this.toggleSnowFlower}
                        //
                        openScreenOnce={this.openScreenOnce}
                        closeScreenOnce={this.closeScreenOnce}
                        //
                        openScreenFloor={this.openScreenFloor}
                        closeScreenFloor={this.closeScreenFloor}
                        detectScreenHasChange={this.detectScreenHasChange}
                    >
                        <div className="App">
                            <header className="AppHeader">
                                {IS_MOBILE ? <HeaderMobile /> : <Header />}

                                <PLHead />
                            </header>

                            <div className="App_contain">
                                <main className="AppContent">
                                    <CustomSwitch />
                                </main>

                                <footer>
                                    <Footer />
                                </footer>
                            </div>
                        </div>

                        <div className="AppFixed">
                            <BackTop />

                            <Contact />

                            <PLCompare />

                            {IS_MOBILE ? (
                                <SomeLinks ref={this.refLinks} />
                            ) : (
                                <Chat ref={this.refChat} />
                            )}
                        </div>

                        <AppScreen ref={this.refAppScreen} />

                        <ScreenOnce ref={this.refScreenOnce} />

                        <div className="AppNatureDrop">
                            <NatureDropMain ref={this.refNatureDropMain} />
                        </div>
                    </ContextAPI>
                </BrowserRouter>
            </Suspense>
        );
    }
}

export default App;
