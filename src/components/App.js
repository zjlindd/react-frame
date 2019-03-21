import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom"

// Book页
import Book from "../page/book/Book"
// Count页
import Count from "../page/count/Count"
// Mine页
import Mine from "../page/mine/Mine"
// Video页
import Video from "../page/video/Video"

// 引入一些基础的样式文件
import "../assets/scss/mix.scss"
import "../assets/scss/reset.scss"
import "./App.scss"

import Header from "../components/header/Header"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // 每个组件都有一个 render 函数 return 一个 (<div></div>) 外层容器
  render() {
    return (
      //   router 容器 包含页面要显示的内容
      <Router>
          {/* 外层容器 */}
        <div className="app">
          {/*部分公共显示*/}
           <Header />
            {/* nav 导航 */}
          <div className="tab-wrap">
            <div className="tab-item">
                {/*使用 NavLink 当与当前URL匹配时，将向渲染元素添加样式属性 active */}
              <NavLink to="/book"  className="nav-link">
                <span>图书</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/count" className="nav-link">
                <span>数量</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/mine" className="nav-link">
                <span>我的</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/music" className="nav-link">
                <span>音乐</span>
              </NavLink>
            </div>
          </div>
            {/*页面显示的容器-匹配后显示的区域*/}
          <div className="view-wrap">
            {/*
                Switch组件用来选择最近的一个路由，否则最后一个没有指定path的路由也会显示
                Redirect重定向到列表页
              */}
            <Switch>
              <Route path="/book" component={Book} />
              <Route path="/count" component={Count} />
              <Route path="/mine" component={Mine} />
              <Route path="/music" component={Video} />
                {/* 都不匹配 时会重定向到 recommend*/}
              <Redirect from="/" to="/Book" />
                {/* 默认的 展示组件*/}
              <Route component={Book} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App
