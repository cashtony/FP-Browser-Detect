import React, {Component} from 'react'
import {
    List,
    NavBar, NoticeBar,
    Space,
} from 'antd-mobile';

class DeviceOrientationData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beta: '无', // beta
            gamma: '无', // gamma
            alpha: '无', // alpha
            absolute: '无', // absolute
        };
    }

    deviceorientation(event) {
        this.setState({
            beta: event.beta || 0,
            gamma: event.gamma || 0,
            alpha: event.alpha || 0,
            absolute: event.absolute,
        });
    }

    componentWillUnmount() {
        if (window.DeviceOrientationEvent) {
            window.removeEventListener('deviceorientation', this.deviceorientation.bind(this))
        }
    }

    componentDidMount() {
        const that = this;

        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', this.deviceorientation.bind(this))
        }
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>设备屏幕方向与运动</NavBar>
                <NoticeBar content='请确保当前在 HTTPS 环境下' color='alert' closeable />
                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List header='设备屏幕方向与运动（请确保当前在 HTTPS 环境下）'>
                        <List.Item description={this.state.alpha}>
                            alpha
                        </List.Item>
                        <List.Item description={this.state.beta}>
                            beta
                        </List.Item>
                        <List.Item description={this.state.gamma}>
                            gamma
                        </List.Item>
                        <List.Item description={JSON.stringify({value: this.state.absolute})}>
                            absolute
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default DeviceOrientationData;
