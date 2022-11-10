import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space, Ellipsis, Card, Grid, AutoCenter
} from 'antd-mobile';
import {canvas_fingerprint, is_support_canvas} from "../util/canvas";
import {get_audio_fingerprint, is_support_audio} from "../util/audio";
import {get_webgl_fingerprint, get_webgl_info} from "../util/webgl";
class Fingerprint extends Component {
    constructor(props) {
        super(props);
        const [webgl_vendor, webgl_renderer] = get_webgl_info();

        this.state = {
            webgl_vendor,
            webgl_renderer,
            audio_fingerprint: '无',
            ja3: '无',
        };
    }

    componentDidMount() {
        const that = this;
        // 获得音频指纹
        get_audio_fingerprint((hash) => {
            if (hash !== false) {
                that.setState({
                    audio_fingerprint: hash
                })
            }
        })
    }

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>指纹相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List header='SSL'>
                        <List.Item description={this.state.ja3}>
                            ja3 hash
                        </List.Item>
                    </List>

                    <List header='Canavs'>
                        <List.Item description={is_support_canvas() ? '是' : '否'}>
                            是否支持 Canvas
                        </List.Item>
                        <List.Item description={<Ellipsis direction='end' content={canvas_fingerprint()}/>}>
                            指纹
                        </List.Item>
                    </List>

                    <List header='音频'>
                        <List.Item description={is_support_audio() ? '是' : '否'}>
                            是否支持音频
                        </List.Item>
                        <List.Item description={<Ellipsis direction='end' content={this.state.audio_fingerprint}/>}>
                            指纹
                        </List.Item>
                    </List>

                    <List header='Webgl'>
                        <List.Item>
                            <Card title=''>
                                <Grid columns={2} gap={4}>
                                    <Grid.Item>
                                        <Space direction='vertical' block style={{'--gap': '16px'}}>
                                            <AutoCenter>供应商</AutoCenter>
                                            <AutoCenter
                                                style={{fontSize: '14px'}}>{this.state.webgl_vendor}</AutoCenter>
                                        </Space>
                                    </Grid.Item>
                                    <Grid.Item>
                                        <Space direction='vertical' block style={{'--gap': '16px'}}>
                                            <AutoCenter>型号</AutoCenter>
                                            <AutoCenter
                                                style={{fontSize: '14px'}}>{this.state.webgl_renderer}</AutoCenter>
                                        </Space>
                                    </Grid.Item>
                                </Grid>
                            </Card>
                        </List.Item>
                        <List.Item description={<Ellipsis direction='end' content={get_webgl_fingerprint()}/>}>
                            指纹
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default Fingerprint;
