import React, {Component} from 'react'
import ReactJson from 'react-json-view'
import {
    List,
    NavBar,
    Space,
    Divider
} from 'antd-mobile';
import {get_support_font} from '../util/font';
class Basic extends Component {
    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>字体相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item>
                            内置字体列表

                            <Divider/>

                            <ReactJson src={get_support_font()}/>
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default Basic;
