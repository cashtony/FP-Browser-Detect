import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {
    get_downlink,
    get_downlinkMax,
    get_effectiveType,
    get_rtt,
    get_saveData,
    get_type,
    is_support_network
} from "../util/network";
class Network extends Component {

    constructor(props) {
        super(props);

        this.state = {
            support_network: is_support_network(),
        };
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>网络相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item description={this.state.support_network ? get_effectiveType() : '不支持'}>
                            网络有效类型
                        </List.Item>
                        <List.Item description={this.state.support_network ? get_type() : '不支持'}>
                            网络类型
                        </List.Item>
                        <List.Item description={this.state.support_network ? get_downlink() : '不支持'}>
                            网络下行速度
                        </List.Item>
                        <List.Item description={this.state.support_network ? get_downlinkMax() : '不支持'}>
                            最大网络下行速度
                        </List.Item>
                        <List.Item description={this.state.support_network ? get_rtt() : '不支持'}>
                            估算的往返时间
                        </List.Item>
                        <List.Item description={this.state.support_network ? (get_saveData() ? '是' : '否') : '不支持'}>
                            打开/请求数据保护模式
                        </List.Item>
                        {/*<List.Item description={this.state.support_network ? (get_onchange() > 0 ? '是' : '否') : '不支持'}>*/}
                        {/*    网络状态是否变更*/}
                        {/*</List.Item>*/}
                    </List>
                </Space>
            </div>
        );
    }
}

export default Network;
