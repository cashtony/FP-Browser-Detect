import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space, Divider, Ellipsis, Grid, NoticeBar
} from 'antd-mobile';
class MediaDevices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mediaDevices: [],
        };

        this.myRef = React.createRef();
    }

    componentDidMount() {
        const that = this;
        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            try {
                navigator.mediaDevices.enumerateDevices().then(function (e) {
                    that.setState({
                        mediaDevices: e
                    })
                }).catch(function () {

                })
            } catch (e) {

            }
        } else if (window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
            try {
                MediaStreamTrack.getSources(function (e) {

                })
            } catch (e) {

            }
        }
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>媒体设备信息</NavBar>
                <NoticeBar content='请确保当前在 HTTPS 环境下' color='alert' closeable />
                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List style={{display: this.state.mediaDevices.length > 0 ? 'block' : 'none'}}>
                        {this.state.mediaDevices.map(item => {
                            return (<List.Item key={item.groupId + item.kind}>
                                {item.kind === 'videoinput' ? '网络摄像头' : (item.kind === 'audioinput' ? '麦克风' : '扬声器')}
                                <Divider/>

                                <div style={{fontSize: 14, color: "#999", overflow: "hidden", width: "auto"}}>
                                    <Grid columns={1} gap={8}>
                                        <Grid.Item>
                                            <Ellipsis direction='end' rows={3} content={`label:${item.label}`}/>
                                        </Grid.Item>
                                        <Grid.Item>
                                            <Ellipsis direction='end' rows={3} content={`groupId:${item.groupId}`}/>
                                        </Grid.Item>
                                        <Grid.Item>
                                            <Ellipsis direction='end' rows={3} content={`deviceId:${item.deviceId}`}/>
                                        </Grid.Item>
                                    </Grid>

                                </div>
                            </List.Item>)
                        })}
                    </List>
                </Space>
            </div>
        );
    }
}

export default MediaDevices;
