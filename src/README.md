一、初始化项目

 cnpm install webpack --g
 
 cnpm install webpack --save-dev
 
 cnpm install webpack-cli --save-dev
 
 touch webpack.config.dev.js


二、安装react

 cnpm install react react-dom --save

三、暗转babel
cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
 
 // 报错
 Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
 
 // 解决办法
 https://segmentfault.com/a/1190000016458913
 
 //  报错
 Plugin/Preset files are not allowed to export objects, only functions