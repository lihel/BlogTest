/**
 * Created by lmy on 18-1-26.
 */
import signup from "../components/signup";
import {connect} from "react-redux";
import {signUp} from "../action";
const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => ({
    onClickSignUp: () => {
        const inputArray = document.getElementsByTagName("input");
        const signUpInfo = {
            name:inputArray[0].value,
            password:inputArray[1].value,
            realName:inputArray[2].value,
            major:inputArray[3].value,
            sex:inputArray[5].checked,//男为false,女为true
            git:inputArray[6].value,
            blog:inputArray[7].value
        };
        console.log(signUpInfo.sex);
        if(signUpInfo.name === ''){
            alert("用户名不能为空");
        }else{
            dispatch(signUp(signUpInfo));
        }
    },
    onSavePathClick: () => {
        console.log("待定！！！,,,学习文件上传部分后完成");
    }
});
const signUpLog = connect(mapStateToProps, mapDispatchToProps)(signup);
export default　signUpLog;