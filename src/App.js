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
import Header from './component/_header/_main_header/Header';
import BackTop from './component/_back_to_top/BackTop';
import Footer from './component/_footer/_main/Footer';

import Chat from './component/_chat/_main/ChatRealtime';
import ZoomVidPics from './component/_zoom_vid_pics/_main/ZoomVidPics';
import CanvasFixed from './component/canvas_draw/_main/CanvasFixed';
import NatureDropMain from './component/_snow_drop/_main/NatureDropMain';

import DivFixLike from './component/_div_fix/like/DivFixLike';
import DivFixPeople from './component/_div_fix/people/DivFixPeople';
import DivFixAction from './component/_div_fix/action/DivFixAction';

import ScreenConfirm from './component/_screen_blur/confirm/ScreenConfirm';
import ScreenHistory from './component/_screen_post/history/_main/ScreenHistory';
import ScreenShare from './component/_screen_post/share/_main/ScreenShare';
import ScreenUpdate from './component/_screen_post/update/_main/ScreenUpdate';
import ScreenLike from './component/_screen_post/like/_main/ScreenLike';
import ScreenPermission from './component/_screen_post/permission/_main/ScreenPermission';
import ScreenBlurFetching from './component/_screen_blur/fetching/_main/ScreenBlurFetching';
import ScreenNotice from './component/_screen_blur/notice/ScreenNotice';

// App
class App extends Component {
    /* --------------- REF ---------------- */

    //
    refChat = (elm) => {
        if (elm !== null) {
            this.openMessage = elm.openMessage;
            this.resetChat = elm.resetChat;
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
    refZoom = (elm) => {
        if (elm !== null) {
            this.openZoomVidPics = elm.openZoomVidPics;
        }
    };

    //
    refCanvas = (elm) => {
        if (elm !== null) {
            this.toggleCanvasFixed = elm.toggleCanvasFixed;
        }
    };

    // p
    refNatureDropMain = (elm) => {
        if (elm !== null) {
            this.toggleSnowFlower = elm.toggleSnowFlower;
        }
    };

    //
    refScreenConfirm = (elm) => {
        if (elm !== null) {
            this.openScreenConfirm = elm.openScreenConfirm;
        }
    };

    //
    refScreenNotice = (elm) => {
        if (elm !== null) {
            this.openScreenNotice = elm.openScreenNotice;
            this.closeScreenNotice = elm.closeScreenNotice;
        }
    };

    //
    refScreenHistory = (elm) => {
        if (elm !== null) {
            this.openScreenHistory = elm.openScreenHistory;
        }
    };

    //
    refScreenShare = (elm) => {
        if (elm !== null) {
            this.openScreenShare = elm.openScreenShare;
        }
    };

    //
    refScreenUpdate = (elm) => {
        if (elm !== null) {
            this.openScreenUpdate = elm.openScreenUpdate;
            this.closeScreenUpdate = elm.closeScreenUpdate;
            this.hasChangeScreenUpdate = elm.hasChangeScreenUpdate;
        }
    };

    //
    refScreenLike = (elm) => {
        if (elm !== null) {
            this.openScreenLike = elm.openScreenLike;
        }
    };

    //
    refScreenPermission = (elm) => {
        if (elm !== null) {
            this.openScreenPermission = elm.openScreenPermission;
        }
    };

    //
    refScreenFetching = (elm) => {
        if (elm != null) {
            this.openScreenFetching = elm.openScreenFetching;
            this.closeScreenFetching = elm.closeScreenFetching;
        }
    };

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
                        openMessage={this.openMessage}
                        resetChat={this.resetChat}
                        openDivFixLike={this.openDivFixLike}
                        closeDivFixLike={this.closeDivFixLike}
                        openDivFixPeople={this.openDivFixPeople}
                        closeDivFixPeople={this.closeDivFixPeople}
                        openDivFixAction={this.openDivFixAction}
                        closeDivFixAction={this.closeDivFixAction}
                        openZoomVidPics={this.openZoomVidPics}
                        toggleCanvasFixed={this.toggleCanvasFixed}
                        toggleSnowFlower={this.toggleSnowFlower}
                        //
                        openScreenConfirm={this.openScreenConfirm}
                        openScreenNotice={this.openScreenNotice}
                        openScreenHistory={this.openScreenHistory}
                        openScreenShare={this.openScreenShare}
                        openScreenUpdate={this.openScreenUpdate}
                        openScreenLike={this.openScreenLike}
                        openScreenPermission={this.openScreenPermission}
                        openScreenFetching={this.openScreenFetching}
                        //
                        hasChangeScreenUpdate={this.hasChangeScreenUpdate}
                        //
                        closeScreenUpdate={this.closeScreenUpdate}
                        closeScreenNotice={this.closeScreenNotice}
                        closeScreenFetching={this.closeScreenFetching}
                    >
                        <div className="App">
                            <div className="App_contain">
                                <header className="AppHeader">
                                    <Header />
                                </header>

                                <main className="AppContent">
                                    <Switch>
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
                                    </Switch>
                                </main>

                                <footer>
                                    <Footer />
                                </footer>
                            </div>
                        </div>

                        <BackTop />

                        <Chat ref={this.refChat} />

                        <DivFixLike ref={this.refFixLike} />

                        <DivFixPeople ref={this.refFixPeople} />

                        <DivFixAction ref={this.refFixAction} />

                        <div>
                            <CanvasFixed ref={this.refCanvas} />

                            {/* screen */}
                            <ScreenHistory ref={this.refScreenHistory} />

                            <ScreenShare ref={this.refScreenShare} />

                            <ScreenUpdate ref={this.refScreenUpdate} />

                            <ScreenLike ref={this.refScreenLike} />

                            <ScreenPermission ref={this.refScreenPermission} />

                            <ScreenConfirm ref={this.refScreenConfirm} />

                            <ScreenNotice ref={this.refScreenNotice} />

                            <ScreenBlurFetching ref={this.refScreenFetching} />

                            {/* fix */}

                            <ZoomVidPics ref={this.refZoom} />

                            <div className="AppNatureDrop">
                                <NatureDropMain ref={this.refNatureDropMain} />
                            </div>
                        </div>
                    </ContextAPI>
                </BrowserRouter>
            </Suspense>
        );
    }
}

export default App;
