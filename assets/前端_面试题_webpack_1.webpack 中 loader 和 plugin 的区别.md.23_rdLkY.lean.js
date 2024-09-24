import{_ as i,a,aQ as n,o as l}from"./chunks/framework.CqV2UAXh.js";const E=JSON.parse('{"title":"webpack 中 loader 和 plugin 的区别","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/webpack/1.webpack 中 loader 和 plugin 的区别.md","filePath":"前端/面试题/webpack/1.webpack 中 loader 和 plugin 的区别.md","lastUpdated":1727172427000}'),e={name:"前端/面试题/webpack/1.webpack 中 loader 和 plugin 的区别.md"};function p(t,s,h,k,r,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="webpack-中-loader-和-plugin-的区别" tabindex="-1">webpack 中 loader 和 plugin 的区别 <a class="header-anchor" href="#webpack-中-loader-和-plugin-的区别" aria-label="Permalink to &quot;webpack 中 loader 和 plugin 的区别&quot;">​</a></h1><h2 id="loader" tabindex="-1">loader <a class="header-anchor" href="#loader" aria-label="Permalink to &quot;loader&quot;">​</a></h2><p>loader 加载器，webpack 原生只解析 js 文件，通过 loader 解析不同格式文件。 它作用是让 webpack 拥有解析加载非 js 文件的能力, 诸如编译、压缩等，最终一起打包到指定的文件中。</p><ul><li><p>常见的 loader 有 babel-loader ES6 转化成 ES5 eslint-loader 通过 ESlint 检查 js tslint-loader 通过 TSLint 检查 js vue-loader 单文件方式窜写 Vue .vue sass-loader 解析 sass file-loader 文件解析成 url 路径是相对于原始文件资源，而非入口文件，根据配置将图片资源 copy 响应路径 url-loader 基于 file-loader 开发， 文件小的用 base64 替换 css-loader 解析 压缩 模块化 导入@imprt background(url) 语法 style-loader 把 css 注入到 js 中，通过 dom 操作 去加载 cache-loader 性能开销较大的 Loader 之前添加、目的是将结果缓存到磁盘里</p></li><li><p><a href="https://webpack.docschina.org/loaders/" target="_blank" rel="noreferrer">loaders</a></p></li></ul><h2 id="plugin" tabindex="-1">plugin <a class="header-anchor" href="#plugin" aria-label="Permalink to &quot;plugin&quot;">​</a></h2><p>plugin 是插件, 基于事件流框架 Tapable, 扩展 Webpack 功能。在 Webpack 运行的生命周期中会广播出许多事件, Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果</p><p>例如：打包之前删除原文件，打包结束后统计时长，打包后创建到到固定目录</p><p>add-asset-html-webpack-plugin 添加资源到 html compression-webpack-plugin gzip clean-webpack-plugin 删除文件 html-webpack-plugin：自动生成带入口的 index.html hard-source-webpack-plugin 二次缓存 speed-measure-webpack-plugin loader 速度分析, plugin loader 耗时 terser-webpack-plugin 压缩 js 支持压缩 ES6 webpack-bundle-analyzer 可视化输出文件体积</p><h2 id="loader-实现" tabindex="-1">loader 实现 <a class="header-anchor" href="#loader-实现" aria-label="Permalink to &quot;loader 实现&quot;">​</a></h2><h3 id="less-loader" tabindex="-1">less-loader <a class="header-anchor" href="#less-loader" aria-label="Permalink to &quot;less-loader&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// less-loader实现（经简化）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> less</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;less&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> callback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 转译比较耗时，采用异步方式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取配置文件中less-loader的options</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  less.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    content,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    createOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// less转译的配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">output</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err, output.css); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将生成的css代码传递给下一个loader</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="css-loader" tabindex="-1">css-loader <a class="header-anchor" href="#css-loader" aria-label="Permalink to &quot;css-loader&quot;">​</a></h3><ul><li>Css-loader 的作用主要是解析 css 文件中的@import 和 url 语句，处理 css-modules，并将结果作为一个 js 模块返回。</li></ul><h3 id="style-loader" tabindex="-1">style-loader <a class="header-anchor" href="#style-loader" aria-label="Permalink to &quot;style-loader&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// style-loader</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> loaderUtils </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;loader-utils&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // do nothing</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pitch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">remainingRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 用require语句获取css-loader返回的js模块的导出</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 用&#39;!!&#39;前缀跳过配置中的loader，避免重复执行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 用remainingRequest参数获取loader链的剩余部分，在本例中是css-loader、less-loader</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 用loaderUtils的stringifyRequest方法将request语句中的绝对路径转为相对路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> requestPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> loaderUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringifyRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;!!&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> remainingRequest</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 本例中requestPath为:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // &#39;!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!src/styles/index.less&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    const content = require(\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">requestPath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    const style = document.createElement(&#39;style&#39;);</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    style.innerHTML = content;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    document.head.appendChild(style);</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://juejin.cn/post/6944668149849522213" target="_blank" rel="noreferrer">less-loader、css-loader、style-loader 实现原理</a></p>`,17)]))}const c=i(e,[["render",p]]);export{E as __pageData,c as default};
