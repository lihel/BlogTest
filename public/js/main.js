import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import reducer from './reducers/index';

import middleHello from './middlewares/hello';
import middleEdit from './middlewares/edit';
import middleDeleteEdit from './middlewares/deleteEdit';
import middleLogin from './middlewares/login';

//hello的demo,可将容器组件再次封装（可使用ownProps属性传递参数），将组件页面引入显示
import Change from './components/helloChange';
//直接将容器组件引入，通过与组件之间的相互关联，引入页面
import Edit from './containers/editChange';
import Login from './containers/login';

const createMiddlewareStore = applyMiddleware(middleHello,middleEdit,middleLogin,middleDeleteEdit)(createStore);

const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Change} />
        <Route path='/edit' component={Edit}/>
        <Route path='/login' component={Login}/>
    </Router>
</Provider>, document.getElementById("content"));
