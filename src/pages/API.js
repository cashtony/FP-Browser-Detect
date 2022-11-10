import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {is_support_cookie, is_support_indexdb, is_support_localStorage, is_support_session} from "../util/browser";

class API extends Component {
    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>API 检测</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item description={is_support_cookie() ? '是' : '否'}>
                            是否支持 Cookie
                        </List.Item>
                        <List.Item description={is_support_session() ? '是' : '否'}>
                            是否支持 Session
                        </List.Item>
                        <List.Item description={is_support_indexdb() ? '是' : '否'}>
                            是否支持 IndexDB
                        </List.Item>
                        <List.Item description={is_support_localStorage() ? '是' : '否'}>
                            是否支持 LocalStorage
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default API;
