import React from "react";
// 导入store
import store from "../../store";
// 导入action构造函数
import { sendAction } from "../../action";

export default class Home extends React.Component{
    handleClick = () => {
        const action = sendAction();
        // 利用store 发送一个action
        store.dispatch(action);
    }
    // 当组件加载完毕来监听
    componentDidMount() {
        store.subscribe(() => {
            console.log("subscribe",store.getState());
            this.setState({});
        })
    }
    render(){
        return(
            <>
                <button onClick={ this.handleClick }>点我发送一个action</button>
                <div>{store.getState().value}</div>
            </>
        )
    }
}