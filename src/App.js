import React, { Component, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
//
import './_style/root.scss';
import './_style/App.scss';
import './_style/display.scss';
import './_style/position.scss';
import './_style/properties.scss';
import './_style/classes.scss';
import './_style/form.scss';
import './_style/post.scss';
import './_style/vid_pics.scss';
import './_style/device.scss';
//
import { Routes } from './__routes/__main';
//
import ContextAPI from './_context/ContextAPIProvider';
//
import Auth from './_auth/Auth';
//
import WaitingBall from './component/waiting/waiting_ball/WaitingBall';
//
import Chat from './component/_chat/_main/Chat';
import Contact from './component/_contact/Contact';
import BackTop from './component/_back_to_top/BackTop';

import Header from './component/_header/_main_header/Header';
import Footer from './component/_footer/_main/Footer';

import NatureDropMain from './component/_snow_drop/_main/NatureDropMain';

import DivFixLike from './component/_div_fix/like/DivFixLike';
import DivFixPeople from './component/_div_fix/people/DivFixPeople';
import DivFixAction from './component/_div_fix/action/DivFixAction';

import AppScreen from './component/_screen/_main/AppScreen';
import ScreenOnce from './component/_screen_once/_main/ScreenOnce';
import CustomSwitch from './__routes/__switch';

// App
class App extends Component {
    /* --------------- REF ---------------- */

    //
    refChat = (elm) => {
        if (elm !== null) {
            this.openRoomChat = elm.openRoomChat;
            this.hideRoomChat = elm.hideRoomChat;
            this.hideAllRoomChat = elm.hideAllRoomChat;
            this.closeRoomChat = elm.closeRoomChat;
            this.closeAllRoomChat = elm.closeAllRoomChat;
        }
    };

    //
    refFixLike = (elm) => {
        if (elm !== null) {
            this.openDivFixLike = elm.openDivFixLike;
            this.closeDivFixLike = elm.closeDivFixLike;
        }
    };

    refFixPeople = (elm) => {
        if (elm !== null) {
            this.openDivFixPeople = elm.openDivFixPeople;
            this.closeDivFixPeople = elm.closeDivFixPeople;
        }
    };

    refFixAction = (elm) => {
        if (elm !== null) {
            this.openDivFixAction = elm.openDivFixAction;
            this.closeDivFixAction = elm.closeDivFixAction;
        }
    };

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
                        openDivFixLike={this.openDivFixLike}
                        closeDivFixLike={this.closeDivFixLike}
                        openDivFixPeople={this.openDivFixPeople}
                        closeDivFixPeople={this.closeDivFixPeople}
                        openDivFixAction={this.openDivFixAction}
                        closeDivFixAction={this.closeDivFixAction}
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
                                <Header />
                            </header>

                            <div className="App_contain">
                                <main className="AppContent">
                                    {/* <Switch location={location}>
                                        {Routes.map((route, index) => (
                                            <Route
                                                key={`App_route_${index}`}
                                                path={route.path}
                                                render={(props) => (
                                                    <Auth
                                                        route={route}
                                                        {...props}
                                                    />
                                                )}
                                                exact={route.exact}
                                            />
                                        ))}

                                        <Redirect from="" to="/home" />
                                    </Switch> */}
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

                            <Chat ref={this.refChat} />
                        </div>

                        <div>
                            <DivFixLike ref={this.refFixLike} />

                            <DivFixPeople ref={this.refFixPeople} />

                            <DivFixAction ref={this.refFixAction} />
                        </div>

                        <div>
                            <AppScreen ref={this.refAppScreen} />

                            <ScreenOnce ref={this.refScreenOnce} />
                        </div>

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
