
const initState = {
    count: 0
}
// 接收action 进行逻辑处理
// 判断发送过来的action是不是我们需要的
// 如果是我们要的 就return一个新的state
const reducer = (state = initState,action) => {
    console.log("reducer:",action);
    switch(action.type){
        case "add_action":
            return {
                count: state.count + 1
            };
        default :
            return state;
    }
}

export default reducer;