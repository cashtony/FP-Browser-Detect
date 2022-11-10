import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';

class Battery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_charging: false,
            level: 0,
            support_battery: !!navigator.getBattery,
        };
    }

    componentDidMount() {
        let is_charging, charging_time, discharging_time, level;
        const that = this;

        // 获得点亮信息
        if (this.state.support_battery) {
            navigator.getBattery().then(function (battery) {
                // 是否正在充电
                is_charging = battery.charging;
                // 距离充电完毕还需多少秒，如果为0则充电完毕
                charging_time = battery.chargingTime;
                // 距离电池耗电至空且挂起需要多少秒
                discharging_time = battery.dischargingTime;
                // 电量
                level = battery.level * 100;

                that.setState({
                    is_charging,
                    level
                })
            });
        }
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>电量相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item
                            description={this.state.support_battery ? (this.state.is_charging ? '是' : '否') : '不支持'}>
                            是否正在充电
                        </List.Item>
                        <List.Item description={this.state.support_battery ? this.state.level : '不支持'}>
                            电量
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default Battery;
