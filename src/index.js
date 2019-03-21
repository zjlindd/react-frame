import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/hello/Hello'
if (module.hot) {
    module.hot.accept();
}
ReactDom.render(
    <Hello />, document.getElementById('app'));