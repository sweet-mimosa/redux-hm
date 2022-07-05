import React from 'react';
import defaultImg from '../../assets/image/发射.jpeg'
import sendImg from '../../assets/image/发射.gif'
import { connect } from 'react-redux';

class Boy extends React.Component{
    // 定义 UI 级别的state
    state = {
        isSend: false
    }
    handleClick = () => {
        let { isSend } = this.state;
        // if(!isSend){
        //     this.props.sendLove();
        // }else{
        //     this.props.stopLove();
        // }
        isSend ? this.props.stopLove() : this.props.sendLove();
        this.setState({
            isSend: !isSend
        });
    }
    render() {
        return (
            <div>
                <img src={this.state.isSend ? sendImg : defaultImg} alt=""></img>
                <div>
                    <button onClick={this.handleClick}>
                        {this.state.isSend ? "停止发射" : "发射爱心"}
                    </button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendLove: () => {
            dispatch({
                type: "send_love"
            })
        },
        stopLove: () => {
            dispatch({
                type: "stop_love"
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Boy);