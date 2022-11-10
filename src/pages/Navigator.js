import React, {Component} from 'react'
import ReactJson from 'react-json-view'
import {
    List,
    NavBar,
    Space,
    Dialog,
    Divider, NoticeBar
} from 'antd-mobile';
import {
    all_languages,
    all_mimeTypes,
    all_plugins,
    get_deviceMemory, get_doNotTrack, get_hardwareConcurrency, get_javaEnabled, get_language,
    get_navigator_attr, get_pdfViewerEnabled, get_platform, get_userAgent, get_userAgentData, get_vendor,
} from '../util/navigator';

class Basic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navigator_attr: {},
        };
    }

    componentDidMount() {
        this.setState({
            navigator_attr: get_navigator_attr(window.navigator),
        })
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>Navigator 相关</NavBar>
                <NoticeBar content='查看 “机器内存” 属性时，请确保当前在 HTTPS 环境下' color='alert' closeable />
                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item description='点击查看' clickable onClick={() =>
                            Dialog.alert({
                                content: (<ReactJson src={this.state.navigator_attr}/>),
                                closeOnMaskClick: true,
                            })
                        }>
                            获取全部属性
                        </List.Item>

                        <List.Item description={get_userAgent()}>
                            User-Agent

                            <Divider/>

                            <div style={{fontSize: 14, color: "#999"}}>{get_userAgent()}</div>
                        </List.Item>
                        <List.Item>
                            User-Agent Data

                            <Divider/>

                            <ReactJson src={get_userAgentData() ? get_userAgentData().toJSON() : {}}/>
                        </List.Item>
                        <List.Item description={get_platform()}>
                            平台
                        </List.Item>
                        <List.Item description={get_vendor()}>
                            供应商
                        </List.Item>
                        <List.Item description={get_deviceMemory() ? get_deviceMemory() + " G" : '无'}>
                            机器内存（请确保当前在 HTTPS 环境下）
                        </List.Item>
                        <List.Item description={get_hardwareConcurrency() + ' 核'}>
                            处理器数量
                        </List.Item>
                        <List.Item>
                            插件列表
                            <Divider/>

                            <ReactJson src={all_plugins()}/>
                        </List.Item>
                        <List.Item>
                            插件列表
                            <Divider/>

                            <ReactJson src={all_mimeTypes()}/>
                        </List.Item>
                        <List.Item description={all_languages()}>
                            支持的全部语言
                        </List.Item>
                        <List.Item description={get_language()}>
                            用户偏好语言
                        </List.Item>
                        <List.Item description={get_doNotTrack() ? get_doNotTrack() : 'null'}>
                            Do Not Track 设置
                        </List.Item>
                        <List.Item description={get_javaEnabled() ? '是' : '否'}>
                            javaEnabled
                        </List.Item>
                        <List.Item description={get_pdfViewerEnabled() ? '是' : '否'}>
                            pdfViewerEnabled
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default Basic;
