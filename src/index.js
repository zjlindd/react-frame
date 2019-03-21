import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root'
if (module.hot) {
    module.hot.accept();
}
ReactDom.render(
    <Root />, document.getElementById('root'));