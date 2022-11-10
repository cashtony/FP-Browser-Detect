import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {
    get_browser_inner_size,
    get_browser_size, get_browser_tool_size,
    get_client_size,
    get_documentElement_client_size,
    get_offset_size,
    get_scroll_position_size,
    get_scroll_size
} from "../util/document";
import {get_availscreen_position, get_availscreen_size, get_screen_size} from "../util/screen";
class DocSize extends Component {

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>窗口大小相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item description={get_client_size()}>
                            「client_size」网页可见区域大小
                        </List.Item>
                        <List.Item description={get_documentElement_client_size()}>
                            「documentElement client_size」网页可见区域大小
                        </List.Item>
                        <List.Item description={get_offset_size()}>
                            「offset_size」网页可见区域大小 (包括 边线/滚动条 的宽)
                        </List.Item>
                        <List.Item description={get_scroll_size()}>
                            「scroll_size」网页正文全文大小（包含滚动内容大小）
                        </List.Item>
                        <List.Item description={get_scroll_position_size()}>
                            「scroll_position_size」网页正文全文位置
                        </List.Item>
                        <List.Item description={get_browser_size()}>
                            「outer_size」浏览器大小
                        </List.Item>
                        <List.Item description={get_browser_inner_size()}>
                            「inner_size」浏览器大小(真实可用)
                        </List.Item>
                        <List.Item description={get_browser_tool_size()}>
                            浏览器工具栏大小(真实可用)
                        </List.Item>
                        <List.Item description={get_screen_size()}>
                            「screen_size」屏幕大小（单位：px）
                        </List.Item>
                        <List.Item description={get_availscreen_size()}>
                            「availscreen_size」可用空间的屏幕大小（单位：px）
                        </List.Item>
                        <List.Item description={get_availscreen_position()}>
                            「availscreen_position」可用空间的边界（单位：px）
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default DocSize;
