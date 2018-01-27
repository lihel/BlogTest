/**
 * Created by lmy on 18-1-26.
 */
import React from 'react';
import PropTypes from 'prop-types';
export default class Index extends React.Component {
    render() {
        const {onSignUp,onSignIn} = this.props;
        return <div>
            <button  onClick={onSignUp}>注册</button>
            <button  onClick={onSignIn}>登录</button>
        </div>
    }
}
Index.propTypes = {
    onSignUp: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired
};
