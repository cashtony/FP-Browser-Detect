import React, {Component} from 'react'
import ReactJson from 'react-json-view'
import {
    List,
    NavBar,
    Space,
    Dialog,
    Button, Divider
} from 'antd-mobile';
import {get_compatMode, get_domain, get_referrer, get_title, get_url} from "../util/document";
class Document extends Component {

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>Document 相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List header='Document'>
                        <List.Item description={get_title()}>
                            标题
                        </List.Item>
                        <List.Item>
                            当前链接
                            <Divider/>

                            <ReactJson src={get_url()}/>
                        </List.Item>
                        <List.Item description={get_domain()}>
                            当前域名
                        </List.Item>
                        <List.Item description={get_referrer() ? get_referrer() : '无'}>
                            来源
                        </List.Item>
                        <List.Item description={get_compatMode()}>
                            渲染模式
                        </List.Item>
                        <List.Item description={document.cookie}>
                            Cookie
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default Document;
