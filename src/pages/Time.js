import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {get_current_date, get_timezone, get_timezone_offset} from "../util/date";

class Time extends Component {

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>时间相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item description={get_timezone()}>
                            时区
                        </List.Item>
                        <List.Item description={get_timezone_offset()}>
                            UTC 相对于当前时区的时间差值（单位为分钟）
                        </List.Item>
                        <List.Item description={get_current_date()}>
                            当前时间
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default Time;
