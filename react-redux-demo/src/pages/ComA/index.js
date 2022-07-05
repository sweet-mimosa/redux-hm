import React from "react";
import { connect } from "react-redux";

class ComA extends React.Component{
    handleClick = () => {
        console.log("ComA:",this.props);
        // 发送一个action
        this.props.sentAction();
    }
    render(){
        return (
            <button onClick={this.handleClick}> + </button>
        )
    }
}
/**
 * 这个函数有一个返回值 返回值是对象
 * @param {*} dispatch 
 */
const  mapDispatchToProps = (dispatch) => {
    return {
        sentAction: () => {
            // 利用dispatch 发送一个action
            dispatch({
                type: "add_action"
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(ComA)