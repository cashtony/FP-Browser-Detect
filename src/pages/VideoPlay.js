import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {can_play} from "../util/document";
class VideoPlay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            support_video_mime_types: [
                'video/test',
                'video/ogg; codecs="theora"',
                'video/mp4; codecs="avc1.42E01E"',
                'video/webm; codecs="vp9"',
                'application/x-mpegURL; codecs="avc1.42E01E"'
            ]
        };
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>视频支持</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        {this.state.support_video_mime_types.map(item => {
                            return (
                                <List.Item key={item} description={can_play(item) ? "支持" : "不支持"}> {item}</List.Item>)
                        })}
                    </List>
                </Space>
            </div>
        );
    }
}

export default VideoPlay;
