import React, { Component, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
//
import "./_css_common/mode+root.scss";
import "./_css_common/some_properties.scss";
import "./_css_common/App_Form.scss";
import "./_css_common/display.scss";
import "./_css_common/position.scss";
import "./_css_common/vid_pics.scss";
import "./_css_common/some_classes.scss";
import "./_css_common/post_cmt_sub.scss";
import "./App.scss";
//
import { RoutesExact, RoutesNotExact } from "./_all_routes/AllRoutes";
import ContextAPI from "./_context/ContextAPI";
//
import Header from "./component/_header/_main_header/Header";
import WaitingBall from "./component/waiting/waiting_ball/WaitingBall";
import BackTop from "./component/_back_to_top/BackTop";
import MainFooter from "./component/_footer/_main_footer/MainFooter";
import Contact from "./component/_contact/Contact";
// import Chat from './component/_chat/_main/ChatRealtime';
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

// App
class App extends Component {
  /* --------------- REF ---------------- */

  // chat
  refChat = (elm) => {
    if (elm !== null) {
      this.openMessage = elm.openMessage;
    }
  };

  // zoom vid pics
  refZoom = (elm) => {
    if (elm !== null) {
      this.openZoomVidPics = elm.openZoomVidPics;
    }
  };

  // zoom vid pics
  refCanvas = (elm) => {
    if (elm !== null) {
      this.toggleCanvasFixed = elm.toggleCanvasFixed;
    }
  };

  // snow drop
  refSnowDrop = (elm) => {
    if (elm !== null) {
      this.toggleSnowFlower = elm.toggleSnowFlower;
    }
  };

  // screen confirm
  refScreenConfirm = (elm) => {
    if (elm !== null) {
      this.openScreenConfirm = elm.openScreenConfirm;
    }
  };

  // screen history
  refScreenHistory = (elm) => {
    if (elm !== null) {
      this.openScreenHistory = elm.openScreenHistory;
    }
  };

  // screen share
  refScreenShare = (elm) => {
    if (elm !== null) {
      this.openScreenShare = elm.openScreenShare;
    }
  };

  // screen update
  refScreenUpdate = (elm) => {
    if (elm !== null) {
      this.openScreenUpdate = elm.openScreenUpdate;
      this.closeScreenUpdate = elm.closeScreenUpdate;
    }
  };

  // screen update
  refScreenLike = (elm) => {
    if (elm !== null) {
      this.openScreenLike = elm.openScreenLike;
    }
  };

  // screen permission
  refScreenPermission = (elm) => {
    if (elm !== null) {
      this.openScreenPermission = elm.openScreenPermission;
    }
  };

  // screen fetching
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
            openScreenHistory={this.openScreenHistory}
            openScreenShare={this.openScreenShare}
            openScreenUpdate={this.openScreenUpdate}
            openScreenLike={this.openScreenLike}
            openScreenPermission={this.openScreenPermission}
            openScreenFetching={this.openScreenFetching}
            //
            closeScreenUpdate={this.closeScreenUpdate}
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
                <MainFooter />
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
