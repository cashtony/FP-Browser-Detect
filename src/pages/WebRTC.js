import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {get_ips} from "../util/webrtc";
class WebRTC extends Component {
    constructor(props) {
        super(props);

        this.state = {
            privite_ip_addr: '无',
            public_ip_addr: '无',
        };
    }

    componentDidMount() {
        const that = this;
        get_ips((res) => {
            if (res) {
                if ('privite_ip_addr' in res) {
                    that.setState({
                        privite_ip_addr: res.privite_ip_addr,
                    })
                }

                if ('public_ip_addr' in res) {
                    that.setState({
                        public_ip_addr: res.public_ip_addr,
                    })
                }
            }
        });
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>WebRTC</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item description={<a href="https://myip.ipip.net">点击查看</a>}>
                            真实 IP
                        </List.Item>
                        <List.Item description={this.state.public_ip_addr}>
                            公网 IP
                        </List.Item>
                        <List.Item description={this.state.privite_ip_addr}>
                            局域网 IP
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default WebRTC;
