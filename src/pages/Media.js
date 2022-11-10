import React, {Component} from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {
    get_color_gamut,
    get_colors_inverted,
    get_contrast_preference,
    get_forced_color,
    get_hdr_mode
} from "../util/media";
class Media extends Component {
    back() {
        window.history.go(-1)
    }

    render() {
        return (
            <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
                <NavBar back='返回' onBack={this.back} style={{background: "white"}}>媒体查询相关</NavBar>

                <Space direction='vertical' style={{width: "100%", margin: "30px 0"}}>
                    <List>
                        <List.Item description={get_color_gamut()}>
                            色域查询
                        </List.Item>
                        <List.Item description={get_forced_color()}>
                            forced-colors
                        </List.Item>
                        <List.Item description={get_hdr_mode()}>
                            hdr Mode
                        </List.Item>
                        <List.Item description={get_contrast_preference()}>
                            用来检测用户是否要求将网页内容呈现更高（或更低）的对比
                        </List.Item>
                        <List.Item description={get_colors_inverted()}>
                            倒置颜色的CSS媒体特性可以用来测试用户代理或底层操作系统是否在倒置颜色。
                        </List.Item>
                    </List>
                </Space>
            </div>
        );
    }
}

export default Media;
