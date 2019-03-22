import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root'
ReactDom.render(
    <Root />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept("./components/Root", () => {
        const NewApp = require("./components/Root").default;
        ReactDOM.render(<NewApp />, document.getElementById("root"));
    });
}