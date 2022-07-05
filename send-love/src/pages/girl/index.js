import React from 'react';
import defaultImg from '../../assets/image/接收.jpg'
import ReciveImg from '../../assets/image/接收-01.jpeg'
import { connect } from 'react-redux';

class Girl extends React.Component{
    render() {
        console.log("Gril:",this.props);
        return (
            <div>
                <img src={this.props.status ? ReciveImg : defaultImg} alt=""></img>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps,null)(Girl);