/**
 * Created by lmy on 18-2-1.
 */

export default (state ={oldInfo:{id: '',username:'',sex: '女',realName:'',github:'',blog:'',major_class:'',password:'',headPath:''}}, action) => {
    switch(action.type){
        case 'GET_OLD_INFO':
        case 'USERNAME_CHANGE'://用户名改变
        case 'PASSWORD_CHANGE'://依次类推
        case 'REALNAME_CHANGE':
        case 'MAJORCLASS_CHANGE':
        case 'GITHUB_CHANGE':
        case 'BLOG_CHANGE':
        case 'HEADPATH_CHANGE'://头像路径（待修复）
        case 'SEX_CHANGE':
            return {oldInfo:action.data};
    }
    return state;
}