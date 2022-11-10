import React from 'react'
import {
    List,
    NavBar,
    Space,
} from 'antd-mobile';
import {useNavigate} from "react-router-dom";


function Home() {
    let navigate = useNavigate();
    return (
        <div style={{background: "#EFF3F8", overflowX: "hidden"}}>
            <NavBar back={null} style={{background: "white"}}>浏览器检测</NavBar>

            <Space direction='vertical' style={{width: "100%"}}>
                <List header='基础'>
                    <List.Item arrow onClick={() => navigate("/basic")}>
                        Window 相关
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/navigator")}>
                        Navigator 相关
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/document")}>
                        Document 相关
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/time")}>
                        时间相关
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/font")}>
                        字体相关
                    </List.Item>
                </List>

                <List header='显示'>
                    <List.Item arrow onClick={() => navigate("/screen")}>
                        屏幕相关
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/doc_size")}>
                        窗口大小相关
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/media")}>
                        媒体查询相关
                    </List.Item>
                </List>

                <List header='浏览器'>
                    <List.Item arrow onClick={() => navigate("/browser")}>
                        浏览器检测
                    </List.Item>
                </List>

                <List header='API'>
                    <List.Item arrow onClick={() => navigate("/api")}>
                        API 检测
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/network")}>
                        网络相关
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/battery")}>
                        电量相关
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/video_play")}>
                        视频支持
                    </List.Item>
                </List>

                <List header='设备'>
                    <List.Item arrow onClick={() => navigate("/fingerprint")}>
                        指纹相关
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/media_devices")}>
                        媒体设备
                    </List.Item>
                </List>

                <List header='隐私'>
                    <List.Item arrow onClick={() => navigate("/webrtc")}>
                        WebRTC检测
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/geolocation")}>
                        地理位置
                    </List.Item>
                </List>

                <List header='重力感应'>
                    <List.Item arrow onClick={() => navigate("/device_motion")}>
                        重力感应
                    </List.Item>
                    <List.Item arrow onClick={() => navigate("/device_orientation_data")}>
                        设备屏幕方向与运动
                    </List.Item>
                </List>
            </Space>
        </div>
    );
}

export default Home;
