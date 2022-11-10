import React, {Component} from 'react'
import ReactJson from 'react-json-view'
import {
    List,
    NavBar,
    Space,
    Dialog,
    Button
} from 'antd-mobile';
import {
    get_history_length,
    get_performance_type,
} from '../util/browser';
import {
    get_window_attr,
} from '../util/window';

class Basic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            confirm_status: '无',
            window_attr: {},
        };
    }

    componentDidMount() {
        this.setState({
            window_attr: get_window_attr(window),
        })
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>Window 相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item description='点击查看' clickable onClick={(e) => {
                            console.log(e.pageX);
                            console.log(e.pageY);
                            console.log(e.clientX);
                            console.log(e.clientY);
                            Dialog.alert({
                                content: (<ReactJson src={this.state.window_attr}/>),
                                closeOnMaskClick: true,
                            })
                        }
                        }>
                            获取全部 Window 属性
                        </List.Item>
                        <List.Item description={get_performance_type()}>
                            打开类型
                        </List.Item>
                        <List.Item description={get_history_length()}>
                            历史记录个数
                        </List.Item>
                        <List.Item extra={<Button size='small' color='warning'
                                                  onClick={() => alert("Alert 弹出信息")}>点击</Button>}>
                            点击验证 Alert 是否能正常弹出
                        </List.Item>
                        <List.Item extra={<Button size='small' color='warning' onClick={() => {
                            const status = window.confirm("Confirm 弹出信息");
                            this.setState({
                                confirm_status: status === true ? 'true' : 'false',
                            })
                        }}>点击</Button>} description={`confirm状态：${this.state.confirm_status}`}>
                            点击验证 Confirm 是否能正常弹出
                        </List.Item>
                        <List.Item description='点击查看' clickable onClick={() => {
                            window.open('https://myip.ipip.net')
                        }}>
                            点击验证 window.open 是否能正常弹出
                        </List.Item>
                    </List>

                </Space>
            </div>
        );
    }
}

export default Basic;
