import{_ as i,a as l,o as e,aR as s}from"./chunks/framework.Dl98zJwX.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/题目.md","filePath":"前端/面试题/题目.md","lastUpdated":1720603948000}'),a={name:"前端/面试题/题目.md"},t=s(`<h2 id="js" tabindex="-1">js <a class="header-anchor" href="#js" aria-label="Permalink to &quot;js&quot;">​</a></h2><ul><li><p>基础</p><ul><li>28.[]+{}</li><li>34.a===1&amp;&amp;a===2&amp;&amp;a===3 为 true</li><li>35.isNaN 和 Number.isNaN 区别</li><li>32.0.1 + 0.2 !== 0.3，如何解决上面说的精确度丢失问题，number 最大数 大数、小数 为什么在2^53范围内是安全的？</li><li>38.位运算</li><li>40.&#39;use strict&#39; 的作用是什么</li><li>9.typeof、数据类型、instanceof、手写 instanceof</li><li>12.事件机制捕获、冒泡</li><li>5.引用类型怎么存储，js 中的堆和栈有什么区别</li><li>2.<code>for...in</code> 和 <code>for...of</code> 的区别</li></ul></li><li><p>数组</p><ul><li>3.map，forEach 的区别</li><li>6.slice，splice，区别，是否改变数组</li><li>11.ES6 上数组上扩展了哪些方法</li><li>15.实现 reduce foreach, forEach 与 for 循环，谁的性能更好</li></ul></li><li><p>作用域</p><ul><li>19.JS 垃圾回收和 v8 的垃圾回收机制有什么区别</li><li>27.什么是作用域链、执行上下文、词法环境</li></ul></li><li><p>对象</p><ul><li>7.Object.prototype.toString 返回什么</li><li>10.什么是面向对象</li><li>16.ES6 中 Reflect 对象，它什么优点</li><li>17.JS 中有哪些方法可以实现继承</li><li>26.new 操作符, 构造函数和普通函数区别, 函数有 return 返回什么</li><li>37.正则</li><li>18.深拷贝和浅拷贝</li><li>4.symbol 是否可以遍历，symbol 怎么用？是否可以为空</li></ul></li><li><p>函数</p><ul><li>1.<code>[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt)</code> 返回值是</li><li>8.闭包，场景</li><li>13.JS 中通过 <code>bind</code> 绑定的方法，再使用 <code>apply</code> 或 <code>call</code> 会改变它的 <code>this</code> 吗，几个原理</li><li>30.箭头函数于普通函数区别</li><li>31.柯里化</li><li>36.随机数</li><li>41.如何判断是 new 还是函数调用</li><li>25.防抖和节流应用场景</li><li>eval</li></ul></li><li><p>异步</p><ul><li>14.事件循环</li><li>21.ajax fetch axios 区别，ajax 实现原理, axios 原理是什么</li><li>22.不用 promise, 那些可实现 promise generator</li><li>23.Promise 原理、方法，promise race all allsetted</li><li>24.为什么原生的 form 表单提交没有跨域问题（form 请求和 ajax 请求有什么不同）</li></ul></li><li><p>其他</p><ul><li>29.模块化</li><li>33 RAF 和 RIC 是什么</li><li>39.进程通信的几种方式</li><li>20.设计模式了解应用，发布订阅模式, 单例模式，保证只有给弹窗，当一个弹窗打开的时候，关闭其他弹窗</li></ul></li><li><p>API</p><ul><li>Worker</li><li>Proxy</li><li>AudioContext</li></ul></li></ul><h2 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-label="Permalink to &quot;css&quot;">​</a></h2><ul><li>盒子模型 <ul><li>6.BFC 应用、盒子模型</li></ul></li><li>选择器 <ul><li>22.选择优先级</li></ul></li><li>布局 <ul><li>1.水平垂直居中</li><li>2.几个简单的 css 问题：flex 布局、动画</li><li>7.左边定宽度，右边自使用，高度填满整个屏幕</li><li>8.圣杯、双飞翼布局</li><li>10.grid fr grid-template-columns</li><li>17.为什么 margin 0 auto 无法垂直居中</li></ul></li><li>属性 <ul><li>3.position 那些值，作用什么</li><li>4.display none opacity: 0 visibility:hidden</li><li>9.css 的 transform 和 animation 区别</li><li>12.哪些 css 可以开启硬件加速 transform\\opacity\\filter</li><li>14.css3 属性</li><li>16.伪元素 ::before 与伪类 :first-child 的区别</li><li>18.z-index</li><li>23.inline-block 间隙根本原因</li></ul></li><li>单位 <ul><li>13.1px dip dp</li><li>15.css 中的 px，rem，em，vw，vh</li></ul></li><li>优化 <ul><li>5.回流&amp;重绘</li><li>21.硬件加速</li><li>24.font-display 控制字体加载和替换</li></ul></li><li>其他 <ul><li>11.css 中的 scope 为什么可以实现局部作用</li><li>19.元素替换</li><li>20.画一个三角形</li></ul></li></ul><h2 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h2><ul><li>请求方法 <ul><li>1.post 和 put 请求有什么区别</li><li>9.get 和 post 有什么区别</li></ul></li><li>请求头 <ul><li>13.content-Type;</li></ul></li><li>优化 <ul><li>2.http 缓存原理，前端缓存了解哪些，网络缓存和前端缓存如何交互，协商缓存浏览器如何判断</li><li>3.说几个缓存相关的 HTTP 状态码， 301 和 302 区别，浏览器接收到 301 302 如何处理</li><li>7.CDN 理解，有 CDN 和没有 CDN 区别</li></ul></li><li>网络模型 <ul><li>14.理想模型</li></ul></li><li>协议 <ul><li>DNS <ul><li>8.DNS 寻址过程</li><li>11.谈谈你对 dns-prefetch 的理解</li></ul></li><li>TCP <ul><li>4.三次握手，四次挥手，为什么挥手不能用三次</li><li>10.TCP 和 UDP 区别是什么</li><li>12.TCP 滑动窗口、重试机制</li></ul></li></ul></li><li>版本 <ul><li>5.http1 和 http2 的区别， http2 做了那些改进，有哪些不足，http3 做了那些改进</li></ul></li><li>https <ul><li>6.http 和 https 的区别, https 加密过程</li></ul></li><li>websocket <ul><li>15.心跳机制</li></ul></li></ul><h2 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-label="Permalink to &quot;浏览器&quot;">​</a></h2><ul><li>1.浏览器进程，渲染过进程，渲染流程</li><li>2.defer</li><li>3.浏览器安全方面做了哪些， xss 工具方式是怎样，如何做，前端在 XSS、XSF 防御是如何做的</li><li>4.输入 url 到看到页面发生了什么</li><li>5.跨域</li><li>6.onload 和 DOMContentLoaded 的区别</li><li>浏览器通信：两个标签页想要共享 sessionStorage 的数据，如何做呢</li><li>Echarts 渲染内核有哪些模式？canvas 和 svg 的区别</li></ul><h2 id="ts" tabindex="-1">TS <a class="header-anchor" href="#ts" aria-label="Permalink to &quot;TS&quot;">​</a></h2><blockquote><p>基础、断言、联合、字面量、函数、类、索引、内置、条件</p></blockquote><ul><li><p>基础类型：any unknown never void null undefined enum string boolean tuple symbol bigint</p><ul><li>unknown 将或者取任意值</li><li>never 不能取任意值 return throw new Error(&#39;Unknown type&#39;)</li><li>tuple 元祖 已知数量和类型的数组 let arr:[string, number] = [&#39;abc&#39;, 1]</li><li><code>enum 枚举 enum Gender { MALE, FEMALE} === {&#39;0&#39;: MALE, &#39;1&#39;: FEMALE, MALE: 0, FEMALE: 1}</code></li><li>strictNullChecks: true undefined null 不能赋值给 number</li><li>void 函数返回</li></ul></li><li><p>断言类型</p><ul><li>非空: let x!: number</li><li>确定赋值: ref.current!.scrollTop 不可能为空</li><li>as HTMLInputElement</li><li>as const 值不能更改</li></ul></li><li><p>联合类型 <code>|</code></p><ul><li>类型的联合</li></ul></li><li><p>字面量类型 type</p><ul><li>字面量类型 type 值的联合, 用来生命一个新的类型</li></ul></li><li><p>函数</p><ul><li><code>function sum(a: string, b: string):string { return a+b; }</code></li><li><code>type sum = (a: string, b: string) =&gt; string</code></li><li>重载 <ul><li><code>Function attr(val: number): void</code></li><li><code>Function attr(val: string): void</code></li></ul></li></ul></li><li><p>类</p><ul><li>简写 <code>class Animal { constructor(public name: string, public age: number) {this.name = name, this.age = age })</code></li><li>修饰符 protected 子类允许访问，子类实例不行</li><li>abstract class Animal 子类必须实现抽象类的抽象方法，无法实例，只可继承 extends</li><li>implements 类将需要实现需要实现的类的所有属性和方法。</li><li>static 只能通过类名访问, 静态方法中的 super 指代的是父类</li><li>interface 类型 UserInfo[&#39;address&#39;]</li><li>交叉类型 &amp;</li><li>泛型 T</li><li>装饰器</li></ul></li><li><p>索引类型</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  keyof UserInfo  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;address&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TypeToNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div></li><li><p>内置类型</p><ul><li><code>ReadOnly&lt;obj&gt;</code></li><li><code>Pick&lt;UserInfo, &#39;name&#39; | &#39;address&#39;&gt; 抽取</code></li><li><code>Omit&lt;UserInfo, &#39;name&#39;&gt; = address 排除</code></li><li><code>DeepPartial&lt;obj&gt; 可选</code></li><li><code>Partial&lt;obj&gt; 可选</code></li><li><code>Required&lt;obj&gt; 必选</code></li><li><code>Record&lt;&#39;x&#39;|&#39;y&#39;, obj&gt; --- {x: obj, y: obj}</code></li></ul></li><li><p>条件类型</p><ul><li>Exclude 排除类型</li><li>type Exclude&lt;T, U&gt; = T extends U ? never : T;</li><li>type MyExclude = Exclude&lt;&#39;1&#39; | &#39;2&#39; | &#39;3&#39;, &#39;1&#39; | &#39;2&#39; ｜ &#39;4&#39;&gt; == 3 4</li><li>Extract 抽取 <ul><li>例子：Array&lt;Extract&lt;keyof T, keyof K&gt;&gt;</li><li>type Extract&lt;T, U&gt; = T extends U ? T : never;</li><li>type MyExtract = Extract&lt;&#39;1&#39; | &#39;2&#39; | &#39;3&#39;, &#39;1&#39; | &#39;2&#39;&gt; === 1 2</li></ul></li></ul></li><li><p>规范</p><ul><li>T type 类型，类型参数名</li><li>K 对象键</li><li>V 对象值</li><li>P 对象属性</li><li>R 类型推导结果</li></ul></li><li><p>声明文件</p><ul><li>可以配置 tsconfig.json 文件中的 declaration 和 outDir</li><li>declaration: true, 将会自动生成声明文件、outDir: &#39;&#39;, 指定目录</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QueryString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defaultEncoder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IStringifyOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IParseOptions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>ts 中的类型断言如何做的 <code>(a1 as string).length \\ (&lt;number&gt;a1).toFixed(2)</code></p></li><li><p>ts 有哪些类型: <code>any number string array boolean null undefined enum tuple void never</code></p></li><li><p>ts 中的泛型 <code>&lt;T&gt;</code></p></li></ul><h2 id="vue" tabindex="-1">VUE <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;VUE&quot;">​</a></h2><ul><li>vue2 <ul><li>1.vue 响应式原理 手写</li><li>2.vue 数组是否响应</li><li>3.虚拟 dom</li><li>4.全局注册组件、vue use 干了什么</li><li>5.vue 组件如何通讯</li><li>8.有使用过自定义指令吗？有哪些钩子函数？分别代表什么呢</li><li>9.Vue.minxins 做过什么功能，mixins.js 和 组件中生命周期函数执行顺序，以及选项合并策略</li><li>10.compiler diff 原理</li><li>computed 和 watch 的区别</li><li>v-model 双向绑定的原理是什么？</li><li>keep-alive LRU</li></ul></li><li>周边 <ul><li>7.vuex 的数据流 核心原理是什么 单一数据源响应式机制 状态管理一致性</li><li>11.vue-router</li><li>vue-router 原理、模式区别,vue-router 路由模式有什么？实现原理是什么 hashchange，window.history.pushState</li><li>vue-router 怎么实现的？components 组件干了什么</li><li>axios 如何处理携带 cookies axios.defaults.withCredentials = true;</li><li>computed 的底层原理</li><li>pinia: ts、第三方、去除 mutation、没嵌套、</li></ul></li><li>vue3 <ul><li>6.reactive ref 区别</li><li>vue3 源码响应式实现</li><li>vue3 编译做了哪些优化</li></ul></li><li>区别 <ul><li>Vue2 和 Vue3 区别</li><li>react vs vue</li></ul></li></ul><h2 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h2><ul><li>1.webpack 中 loader 和 plugin 的区别，怎么实现loader和plugin机制扩展自身</li><li>2.webpack 的三种 hash、chunkHash、contentHash 有什么区别</li><li>3.source map 怎么用</li><li>4.如何实现一个 plugin 插件</li><li>5.webpack 构建过程</li><li>6.webpack 构建优化、前端性能优化</li><li>7.loader 执行顺序</li><li>8.webpack 分包加载用的是哪个，分包的原理</li><li>9.webpack 的 tree shaking 是怎么实现的</li><li>10.热更新 HMR</li><li>11.讲一下 Rollup 和 webpack 的区别</li><li>babel 插件</li><li>实现模块化</li><li>实现高效的热更新</li></ul><h2 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;node&quot;">​</a></h2><ul><li>负载均衡、node 开启 cpu 个数的进程，并实现简单的负载均衡</li><li>a 模块引用了 b 模块 b 模块引用 a 模块，node 是怎么避免模块的循环引用的</li><li>项目开发中用过 node 吗，做了哪些，如何实现 koa 中间件，typeorm 解决的什么问题，数据库连接的一个工具，能够支持数据库的一些模型，本身支持 ts 编译自动生成 ts 类型定义有对应的 cri，比较方便也支持 es6 的一些语法</li><li>使用 node 读取一个大文件，怎么控制读写速度的呢。stream，data</li><li>事件循环</li></ul><h2 id="react" tabindex="-1">react <a class="header-anchor" href="#react" aria-label="Permalink to &quot;react&quot;">​</a></h2><ul><li>redux 源码</li><li>有用过 hooks 吗？介绍几个常用的 hooks</li><li>setState 原理，什么时候同步异步</li><li>为什么有合成事件</li></ul><h2 id="h5" tabindex="-1">H5 <a class="header-anchor" href="#h5" aria-label="Permalink to &quot;H5&quot;">​</a></h2><ul><li>webview和原生交互是如何实现的，搭桥的原理</li><li>H5 屏幕适配方案对比</li><li>移动端适配的原理及多种方案对比</li><li>然后问了一下移动端兼容性问题，比如键盘遮挡 input</li></ul><h2 id="小程序" tabindex="-1">小程序 <a class="header-anchor" href="#小程序" aria-label="Permalink to &quot;小程序&quot;">​</a></h2><ul><li>小程序的原理</li><li>小程序传值方式</li><li>小程序更新数据及如何优化这个更新数据的性能开销</li><li>小程序内嵌 H5 传值、小程序如何传递 cookie 到 H5</li><li>小程序多端如何实现</li><li>小程序和 webview 内嵌有什么区别</li><li>小程序中的 js 和浏览器中的 js 的区别</li><li>微信 sdk 源码是否有看过</li><li>小程序分包怎么用，分包的原理是什么</li></ul><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><ul><li>最近有学习什么新技术</li><li>flutter 中 widget 用过哪些</li><li>图片处理时如果图片时倒过来的怎么处理</li><li>cicd 发布流程，前端做了什么</li><li>如何解决跨域，cors，设置<em>后一直可以跨域吗，什么情况配</em>下不可以，如果配置是个域名，只返回个域名行吗</li><li>git merge rebase 区别</li><li>聊 Web Workers 与 WebAssembly 技术</li><li>electron 有哪些进程</li><li>LRU</li></ul><h2 id="题" tabindex="-1">题 <a class="header-anchor" href="#题" aria-label="Permalink to &quot;题&quot;">​</a></h2><ul><li>体系： <a href="http://www.ffbig.com/" target="_blank" rel="noreferrer">http://www.ffbig.com/</a></li><li><a href="https://www.yuque.com/zaotalk/interview/iv3pyp#ehMC" target="_blank" rel="noreferrer">https://www.yuque.com/zaotalk/interview/iv3pyp#ehMC</a></li><li><a href="http://muyiy.cn/question/js/2.html" target="_blank" rel="noreferrer">http://muyiy.cn/question/js/2.html</a></li><li><a href="https://juejin.cn/post/7028478428680552456#heading-40" target="_blank" rel="noreferrer">https://juejin.cn/post/7028478428680552456#heading-40</a></li><li><a href="https://m26bxrpatp.feishu.cn/base/appcn5mUun8tTLsaFG0jrTeUnBg?table=tbllAUETZhGVTWMA&amp;view=vewJHSwJVd" target="_blank" rel="noreferrer">飞书</a></li><li><a href="https://mp.weixin.qq.com/s/RJxR9Fsbv8oTl6GXWY4oaQ" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/RJxR9Fsbv8oTl6GXWY4oaQ</a></li><li><a href="https://q.shanyue.tech/" target="_blank" rel="noreferrer">https://q.shanyue.tech/</a></li><li><a href="https://www.kancloud.cn/freya001/interview/1235945" target="_blank" rel="noreferrer">https://www.kancloud.cn/freya001/interview/1235945</a></li></ul>`,27),n=[t];function r(p,h,o,u,d,c){return e(),l("div",null,n)}const y=i(a,[["render",r]]);export{g as __pageData,y as default};
