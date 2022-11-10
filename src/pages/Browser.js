import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {get_webdriver, has_webdriver} from "../util/navigator";
import {has_nightmareJS, has_phantomJS, has_playwright, has_selenium, use_webdriver} from "../util/browser";
import {get_maxTouchPoints, is_support_touch} from "../util/touch";
import {
    is_chrome,
    is_chromium,
    is_chromium86OrNewer,
    is_desksafari,
    is_webkit,
    is_webKit606OrNewer
} from "../util/browser_detect";
import Event from "../components/Event";
class Browser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTrusted_status: '无',
        };

        this.myRef = React.createRef();
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>浏览器检测</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List header='是否由自动化控制'>
                        <List.Item description={has_webdriver() ? '是' : '否'}>
                            是否有 webdriver
                        </List.Item>
                        <List.Item description={JSON.stringify({value: get_webdriver()})}>
                            webdriver 值
                        </List.Item>
                        <List.Item description={use_webdriver() ? '是' : '否'}>
                            是否使用 Chrome Driver
                        </List.Item>
                        <List.Item description={has_selenium() ? '是' : '否'}>
                            是否是 Selenium
                        </List.Item>
                        <List.Item description={has_playwright() ? '是' : '否'}>
                            是否是 Playwright
                        </List.Item>
                        <List.Item description={has_phantomJS() ? '是' : '否'}>
                            是否是 PhantomJS
                        </List.Item>
                        <List.Item description={has_nightmareJS() ? '是' : '否'}>
                            是否是 NightmareJS
                        </List.Item>
                    </List>

                    <List header='Event.isTrusted 属性'>
                        <Event
                            ref={this.myRef}
                            isTrusted_status={this.state.isTrusted_status}
                            onClick={(e) => {
                                this.setState({
                                    isTrusted_status: e.isTrusted === true ? 'true' : 'false',
                                })
                            }
                            }
                        />
                        <List.Item description="点击查看" clickable onClick={(e) => {
                            const node = this.myRef.current;
                            node.click();
                        }
                        }>
                            测试 Event.isTrusted 属性（JS触发）
                        </List.Item>
                    </List>

                    <List header='多点触控'>
                        <List.Item description={is_support_touch() ? '是' : '否'}>
                            是否支持 Touch 事件
                        </List.Item>
                        <List.Item description={get_maxTouchPoints()}>
                            设备能够支持的最大同时触摸的点数
                        </List.Item>
                    </List>


                    <List header='浏览器类型'>
                        <List.Item description={is_chrome() ? '是' : '否'}>
                            是否是 Chrome 浏览器
                        </List.Item>
                        <List.Item description={is_chromium() ? '是' : '否'}>
                            是否是 Chromium 浏览器
                        </List.Item>
                        <List.Item description={is_chromium86OrNewer() ? '是' : '否'}>
                            是否是 Chromium 浏览器（version ≥ 86）
                        </List.Item>
                        <List.Item description={is_desksafari() ? '是' : '否'}>
                            是否是桌面 Safari 浏览器
                        </List.Item>
                        <List.Item description={is_webkit() ? '是' : '否'}>
                            是否是 webkit 内核
                        </List.Item>
                        <List.Item description={is_webKit606OrNewer() ? '是' : '否'}>
                            是否是 webkit 内核（version ≥ 606 (Safari ≥ 12)）
                        </List.Item>
                    </List>

                    <List header='内存相关'>
                        <List.Item
                            description={ window.performance.memory ? window.performance.memory.totalJSHeapSize + "/" + window.console.memory.totalJSHeapSize : '无'}>
                            已分配的堆体积（以字节计算）
                        </List.Item>
                        <List.Item
                            description={window.performance.memory ?window.performance.memory.usedJSHeapSize + "/" + window.console.memory.usedJSHeapSize: '无'}>
                            当前 JS 堆活跃段（segment）的体积（以字节计算）
                        </List.Item>
                        <List.Item
                            description={ window.performance.memory ? window.performance.memory.jsHeapSizeLimit + "/" + window.console.memory.jsHeapSizeLimit: '无'}>
                            上下文内可用堆的最大体积（以字节计算）
                        </List.Item>
                    </List>

                </Space>
            </div>
        );
    }
}

export default Browser;
