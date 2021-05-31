import React, { Component, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
//
import "./App.scss";
import "./_style/root.scss";
import "./_style/display.scss";
import "./_style/position.scss";
import "./_style/properties.scss";
import "./_style/classes.scss";
import "./_style/form.scss";
import "./_style/post.scss";
import "./_style/vid_pics.scss";
//
import { RoutesExact, RoutesNotExact } from "./_all_routes/AllRoutes";
import ContextAPI from "./_context/ContextAPI";
//
import WaitingBall from "./component/waiting/waiting_ball/WaitingBall";
// 
import Header from "./component/_header/_main_header/Header";
import BackTop from "./component/_back_to_top/BackTop";
import Footer from "./component/_footer/_main/Footer";
import Contact from "./component/_contact/Contact";

import Chat from "./component/_chat/_main/ChatRealtime";
import ChatU from "./component/_chat/chat_user/ChatU";
import ZoomVidPics from "./component/_zoom_vid_pics/_main/ZoomVidPics";
import CanvasFixed from "./component/canvas_draw/_main/CanvasFixed";
import SnowDrop from "./component/_snow_drop/SnowDrop";

import ScreenConfirm from "./component/_screen_blur/confirm/ScreenConfirm";
import ScreenHistory from "./component/_screen_post/history/_main/ScreenHistory";
import ScreenShare from "./component/_screen_post/share/_main/ScreenShare";
import ScreenUpdate from "./component/_screen_post/update/_main/ScreenUpdate";
import ScreenLike from "./component/_screen_post/like/_main/ScreenLike";
import ScreenPermission from "./component/_screen_post/permission/_main/ScreenPermission";
import ScreenBlurFetching from "./component/_screen_blur/fetching/_main/ScreenBlurFetching";
import ScreenNotice from "./component/_screen_blur/notice/ScreenNotice";

// App
class App extends Component {
  /* --------------- REF ---------------- */

  // chat
  refChat = (elm) => {
    if (elm !== null) {
      this.openMessage = elm.openMessage;
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
  refSnowDrop = (elm) => {
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

  componentDidMount() {
    this.setState({});
  }

  //
  render() {
    return (
      <Suspense fallback={<WaitingBall waitingBall_center={true} />}>
        <BrowserRouter>
          <ContextAPI
            openMessage={this.openMessage}
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
            closeScreenUpdate={this.closeScreenUpdate}
            closeScreenNotice={this.closeScreenNotice}
            closeScreenFetching={this.closeScreenFetching}
          >
            <div className="App">
              {/* Header */}
              <header className="AppHeader">
                <Header />
              </header>

              {/* main */}
              <main className="AppContent">
                <Switch>
                  {RoutesExact.map((item, index) => (
                    <Route
                      key={`App_exact_${index}`}
                      path={item.path}
                      // render={(props) => (
                      //     <item.component
                      //         key={props.match.params.id}
                      //         {...props}
                      //     />
                      // )}
                      component={item.component}
                      exact
                    />
                  ))}

                  {RoutesNotExact.map((item, index) => (
                    <Route
                      key={`App_not_exact_${index}`}
                      path={item.path}
                      // render={(props) => (
                      //     <item.component
                      //         key={props.match.params.id}
                      //         {...props}
                      //     />
                      // )}
                      component={item.component}
                    />
                  ))}

                  <Redirect from="" to="/home" />
                </Switch>
              </main>

              {/* Footer */}
              <footer className="AppFooter">
                <Footer />
              </footer>

              {/* Back to top */}
              <div className="AppBackTop">
                <BackTop />
              </div>

              {/* Contact */}
              <div className="AppContact">
                <Contact />
              </div>

              {/* Chat */}
              <div className="AppChat">
                <Chat ref={this.refChat} />
              </div>

              {/* Chat User */}
              <div className="AppChatUser">
                <ChatU />
              </div>

              {/* zoom */}
              <div className="AppZoomVidPic">
                <ZoomVidPics ref={this.refZoom} />
              </div>

              {/* canvas */}
              <div className="AppCanvas">
                <CanvasFixed ref={this.refCanvas} />
              </div>

              {/* snow flake + flower */}
              <div className="AppNatureDrop">
                <SnowDrop ref={this.refSnowDrop} />
              </div>

              {/* screen */}
              <div>
                <ScreenHistory ref={this.refScreenHistory} />
              </div>

              <div>
                <ScreenShare ref={this.refScreenShare} />
              </div>

              <div>
                <ScreenUpdate ref={this.refScreenUpdate} />
              </div>

              <div>
                <ScreenLike ref={this.refScreenLike} />
              </div>

              <div>
                <ScreenPermission ref={this.refScreenPermission} />
              </div>

              <div>
                <ScreenConfirm ref={this.refScreenConfirm} />
              </div>

              <div>
                <ScreenNotice ref={this.refScreenNotice} />
              </div>

              <div>
                <ScreenBlurFetching ref={this.refScreenFetching} />
              </div>
            </div>
          </ContextAPI>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
