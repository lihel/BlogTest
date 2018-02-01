/**
 * Created by lmy on 18-1-26.
 */
import React from 'react';
import PropTypes from 'prop-types';
export default class Index extends React.Component {
    componentDidMount(){
        this.props.deleteSession();
    }
    render() {
        const {onSignUp,onSignIn,onSetting,enterMyhome} = this.props;
        return <div>
            <button  onClick={onSignUp}>注册</button>
            <button  onClick={onSignIn}>登录</button>
            <button  onClick={onSetting}>修改信息</button>
            <select>
                <option onClick={enterMyhome}>个人主页</option>
                <option >退出</option>
            </select>
        </div>
    }
}
Index.propTypes = {
    onSignUp: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onSetting: PropTypes.func.isRequired,
};