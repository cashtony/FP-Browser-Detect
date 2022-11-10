import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
    NoticeBar
} from 'antd-mobile';

class DeviceMotion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            interval: '无', // 获得重力感应的时间间隔
            lastX: '无', // X 加速度
            lastY: '无', // Y 加速度
            lastZ: '无', // Z 加速度
            lastXG: '无', // X 加速度（包括重力的影响）
            lastYG: '无', // Y 加速度（包括重力的影响）
            lastZG: '无', // Z 加速度（包括重力的影响）
            lastA: '无', // alpha 旋转速度
            lastB: '无', // beta 旋转速度
            lastG: '无', // gamma 旋转速度
        };
    }

    /**
     * 重力感应
     * @param e
     */
    handleDeviceMotion(e) {
        let acceleration = e.accelerationIncludingGravity;

        this.setState({
            interval: e.interval
        })

        if (acceleration) {
            this.setState({
                lastXG: acceleration.x || 0,
                lastYG: acceleration.y || 0,
                lastZG: acceleration.z || 0,
            });
        }

        acceleration = e.acceleration;

        if (acceleration) {
            this.setState({
                lastX: acceleration.x || 0,
                lastY: acceleration.y || 0,
                lastZ: acceleration.z || 0,
            });
        }

        const rotate = e.rotationRate;

        if (rotate) {
            this.setState({
                lastA: rotate.alpha || 0,
                lastB: rotate.beta || 0,
                lastG: rotate.gamma || 0,
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('devicemotion', this.handleDeviceMotion.bind(this))
    }

    componentDidMount() {
        window.addEventListener('devicemotion', this.handleDeviceMotion.bind(this))
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>重力感应</NavBar>
                <NoticeBar content='请确保当前在 HTTPS 环境下' color='alert' closeable />
                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>

                    <List>
                        <List.Item description={this.state.interval}>
                            从底层硬件获取数据的时间间隔（以毫秒为单位）
                        </List.Item>
                        <List.Item description={this.state.lastX}>
                            X 加速度
                        </List.Item>
                        <List.Item description={this.state.lastY}>
                            Y 加速度
                        </List.Item>
                        <List.Item description={this.state.lastZ}>
                            Z 加速度
                        </List.Item>
                        <List.Item description={this.state.lastXG}>
                            X 加速度（包括重力的影响）
                        </List.Item>
                        <List.Item extra={this.state.lastYG}>
                            Y 加速度（包括重力的影响）
                        </List.Item>
                        <List.Item description={this.state.lastZG}>
                            Z 加速度（包括重力的影响）
                        </List.Item>
                        <List.Item description={this.state.lastA}>
                            alpha 旋转速度
                        </List.Item>
                        <List.Item description={this.state.lastB}>
                            beta 旋转速度
                        </List.Item>
                        <List.Item description={this.state.lastG}>
                            gamma 旋转速度
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default DeviceMotion;
