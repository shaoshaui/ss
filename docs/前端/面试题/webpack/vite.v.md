# Vite

Vite 是 前端开发构建工具(非构建式原生 ESM 开发服务器)，它不需要打包编译，所以非常快；利用现代浏览器对 ESModule 的支持，通过 koa 启动一个本地服务，分析 html 中入口 js，将文件中全局包添加 @module, 通过拦截 module 从而读取真正的 node_modules 下的文件，把 .vue 结尾的文件编译成一个对象，实现功能。

## 支持 ESModule
`<script type="module" src="/src/main.js"></script>`

## ./ ../ 路径查找
`@modules/ 向 node_modules 下去`


## 处理 .vue 文件
vite 本地服务，判断当前请求文件是 .vue 文件，
被文件内容解析成 render 函数返回给浏览器渲染页面;