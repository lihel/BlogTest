/**
 * Created by ubuntu on 17-12-29.
 */
//文章列表的管理
export default (state = {aList:[]}, action) => {
    if(action.type === 'ALL_LIST') {
        const aList = state.aList;
        return {aList:action.data};
    }
    return state;
}