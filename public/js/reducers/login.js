/**
 * Created by lmy on 18-1-20.
 */

export default (state = {logSuccess: "", logInfo: ""}, action) => {

    if (action.type === 'LOGIN_SUCCESS') {

        state.logSuccess = action.isSuccess;
        console.log(action.isSuccess)
        state.logInfo = action.logInfo;
        console.log(action.logInfo)
        // console.log(action.logInfo);
        return Object.assign({}, state); //创建对象拷贝 返回新的state对象
    }

    return state;
}