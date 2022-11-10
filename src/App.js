import React, {Component} from 'react'
import {Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Basic from './pages/Basic';
import Navigator from './pages/Navigator';
import Font from './pages/Font';
import DeviceOrientationData from './pages/DeviceOrientationData';
import DeviceMotion from "./pages/DeviceMotion";
import Screen from "./pages/Screen";
import DocSize from "./pages/DocSize";
import Document from "./pages/Document";
import Fingerprint from "./pages/Fingerprint";
import Time from "./pages/Time";
import Network from "./pages/Network";
import API from "./pages/API";
import VideoPlay from "./pages/VideoPlay";
import Battery from "./pages/Battery";
import MediaDevices from "./pages/MediaDevices";
import WebRTC from "./pages/WebRTC";
import Geolocation from "./pages/Geolocation";
import Media from "./pages/Media";
import Browser from "./pages/Browser";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/basic" element={<Basic />}/>
                    <Route path="/navigator" element={<Navigator />}/>
                    <Route path="/document" element={<Document />}/>
                    <Route path="/font" element={<Font />}/>
                    <Route path="/time" element={<Time />}/>
                    <Route path="/device_orientation_data" element={<DeviceOrientationData />}/>
                    <Route path="/device_motion" element={<DeviceMotion />}/>
                    <Route path="/screen" element={<Screen />}/>
                    <Route path="/doc_size" element={<DocSize />}/>
                    <Route path="/fingerprint" element={<Fingerprint />}/>
                    <Route path="/network" element={<Network />}/>
                    <Route path="/api" element={<API />}/>
                    <Route path="/video_play" element={<VideoPlay />}/>
                    <Route path="/battery" element={<Battery />}/>
                    <Route path="/media_devices" element={<MediaDevices />}/>
                    <Route path="/webrtc" element={<WebRTC />}/>
                    <Route path="/geolocation" element={<Geolocation />}/>
                    <Route path="/media" element={<Media />}/>
                    <Route path="/browser" element={<Browser />}/>
                </Routes>
            </div>
        );
    }
}

export default App;
