/**
 * Created by lmy on 18-2-1.
 */
import setting from "../components/setting";
import {connect} from "react-redux";
import {FixInfo} from "../action";
const mapStateToProps = (state) => {
    return {
        username: state.setting.oldInfo.username,
        password: state.setting.oldInfo.password,
        realName: state.setting.oldInfo.realName,
        major_class: state.setting.oldInfo.major_class,
        github: state.setting.oldInfo.github,
        blog: state.setting.oldInfo.blog,
        sex: state.setting.oldInfo.sex,
        id: state.setting.oldInfo.id,
        headPath:state.setting.oldInfo.headPath
    };
};
const mapDispatchToProps = (dispatch) => ({
    userINFO: () => {
        dispatch({type:'OLD_INFO'})
    },
    onClickFixInfo: () => {
        const inputArray = document.getElementsByTagName("input");
        const newInfo = {
            name:inputArray[0].value,
            password:inputArray[1].value,
            realName:inputArray[2].value,
            major:inputArray[3].value,
            sex:inputArray[4].value,
            git:inputArray[5].value,
            blog:inputArray[6].value,
            id: inputArray[7].id
        };
        if(newInfo.name === '' || newInfo.password === ''){
            alert("用户名或密码不能为空");
        }else{
            dispatch(FixInfo(newInfo));
        }
    },
    onChange: (e) => {
        const inputArray = document.getElementsByTagName("input");
        if(e.target.id === 'name'){
            const newInfo = {
                name:e.target.value,
                password:inputArray[1].value,
                realName:inputArray[2].value,
                major:inputArray[3].value,
                sex:inputArray[4].value,
                git:inputArray[5].value,
                blog:inputArray[6].value,
                id: inputArray[7].id
            };
            dispatch({type:"USERNAME_CHANGE",data:newInfo});
        }else if(e.target.id === 'password'){
            const newInfo = {
                name:inputArray[0].value,
                password:e.target.value,
                realName:inputArray[2].value,
                major:inputArray[3].value,
                sex:inputArray[4].value,//男为false,女为true
                git:inputArray[5].value,
                blog:inputArray[6].value,
                id: inputArray[7].id
            };
            dispatch({type:"PASSWORD_CHANGE",data:newInfo});
        }else if(e.target.id === 'realName'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:e.target.value,
                major:inputArray[3].value,
                sex:inputArray[4].value,
                git:inputArray[5].value,
                blog:inputArray[6].value,
                id: inputArray[7].id
            };
            dispatch({type:"REALNAME_CHANGE",data:newInfo});
        } else if(e.target.id === 'major'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:inputArray[2].value,
                major:e.target.value,
                sex:inputArray[4].value,
                git:inputArray[5].value,
                blog:inputArray[6].value,
                id: inputArray[7].id
            };
            dispatch({type:"MAJORCLASS_CHANGE",data:newInfo});
        } else if(e.target.id === 'gitAddress'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:inputArray[2].value,
                major:inputArray[3].value,
                sex:inputArray[4].value,
                git:e.target.value,
                blog:inputArray[6].value,
                id: inputArray[7].id
            };
            dispatch({type:"GITHUB_CHANGE",data:newInfo});
        } else if(e.target.id === 'blogAddress'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:inputArray[2].value,
                major:inputArray[3].value,
                sex:inputArray[4].value,//男为false,女为true
                git:inputArray[5].value,
                blog:e.target.value,
                id: inputArray[7].id
            };
            dispatch({type:"BLOG_CHANGE",data:newInfo});
        } else if(e.target.id === 'sex'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:inputArray[2].value,
                major:inputArray[3].value,
                sex:e.target.value,
                git:inputArray[5].value,
                blog:inputArray[6].value,
                id: inputArray[7].id
            };
            dispatch({type:"SEX_CHANGE",data:newInfo});
        }
    },
    onSavePathClick: () => {
        console.log("待定！！！,,,学习文件上传部分后完成");
    }
});
const signUpLog = connect(mapStateToProps, mapDispatchToProps)(setting);
export default　signUpLog;