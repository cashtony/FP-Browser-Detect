import React from "react";
import {List} from "antd-mobile";

const EventList = React.forwardRef((props, myRef) => {
    return (
        <div ref={myRef}  onClick={props.onClick}>
            <List.Item  description={`isTrusted状态：${props.isTrusted_status}`} clickable>
                测试 Event.isTrusted 属性（实际点击触发）
            </List.Item>
        </div>
    );
});
export default EventList;
