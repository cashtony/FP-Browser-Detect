import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {get_colorDepth, get_devicePixelRatio, get_orientation, get_pixelDepth} from "../util/screen";
class Screen extends Component {

    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>屏幕相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List header='Screen'>
                        <List.Item description={get_colorDepth()}>
                            colorDepth
                        </List.Item>
                        <List.Item description={get_pixelDepth()}>
                            屏幕的像素点
                        </List.Item>
                        <List.Item description={get_orientation()}>
                            屏幕方向
                        </List.Item>
                        <List.Item description={get_devicePixelRatio()}>
                            设备像素比
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default Screen;
