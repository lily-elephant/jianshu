import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList'
// import TodoList from './thunk/TodoList'
// import TodoList from './saga/TodoList'
import TodoList from './reactredux/TodoList'
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; // provider连接store，内部元素都可以获取store了
import store from './reactreduxStore';

const App = (
  <Provider store={store}>
    <TodoList></TodoList>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
