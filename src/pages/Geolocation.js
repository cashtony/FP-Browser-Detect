import React, {Component} from 'react'
import {
    List,
    NavBar, NoticeBar,
    Space,
} from 'antd-mobile';
class Geolocation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accuracy: '无',
            altitude: '无',
            altitudeAccuracy: '无',
            heading: '无',
            latitude: '无',
            longitude: '无',
            speed: '无',
            geolocation_timestamp: '无',
        };
    }

    componentDidMount() {
        const that = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    that.setState({
                        accuracy: position.coords.accuracy,
                        altitude: position.coords.altitude,
                        altitudeAccuracy: position.coords.altitudeAccuracy,
                        heading: position.coords.heading,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        speed: position.coords.speed,
                        geolocation_timestamp: position.timestamp
                    })
                },
                error => {

                }
            );
        }

    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>位置相关</NavBar>
                <NoticeBar content='请确保当前在 HTTPS 环境下' color='alert' closeable />
                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item description={this.state.geolocation_timestamp}>
                            获取时间
                        </List.Item>
                        <List.Item description={this.state.longitude}>
                            经度
                        </List.Item>
                        <List.Item description={this.state.latitude}>
                            纬度
                        </List.Item>
                        <List.Item description={this.state.accuracy}>
                            经度精确值
                        </List.Item>
                        <List.Item description={this.state.altitud ? this.state.altitud : 'null'}>
                            海平面高度（无法提供时为 null）
                        </List.Item>
                        <List.Item description={this.state.altitudeAccuracy ? this.state.altitudeAccuracy : 'null'}>
                            高度精确值（无法提供时为 null）
                        </List.Item>
                        <List.Item description={this.state.heading ? this.state.heading : 'null'}>
                            前进方向（无法提供时为 null）
                        </List.Item>
                        <List.Item description={this.state.speed ? this.state.speed : 'null'}>
                            速度（无法提供时为 null）
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default Geolocation;
