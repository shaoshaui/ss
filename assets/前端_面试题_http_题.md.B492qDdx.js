import{_ as s,a as n,aQ as p,o as e}from"./chunks/framework.CqV2UAXh.js";const T=JSON.parse('{"title":"HTTP 相关题","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/http/题.md","filePath":"前端/面试题/http/题.md","lastUpdated":1727172427000}'),l={name:"前端/面试题/http/题.md"};function i(t,a,c,o,h,r){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="http-相关题" tabindex="-1">HTTP 相关题 <a class="header-anchor" href="#http-相关题" aria-label="Permalink to &quot;HTTP 相关题&quot;">​</a></h1><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h2><ul><li>常用的 HTTP 方法有哪些</li><li>GET 和 POST 的区别</li><li>HTTP 请求报文与响应报文格式</li><li>常见 HTTP 首部字段</li><li>一次完整的 HTTP 请求事务包含以下四个环节</li><li>一次完整的 HTTP 请求所经历的 7 个步骤</li><li>输入一个 URL，到页面展示中间经历了哪些东西</li><li>HTTP 优化</li><li>HTTP 的缺点</li><li>HTTP1.1 版本特性</li><li>http 和 https 的区别</li><li>HTTP 缓存</li><li>SSL/TLS 握手阶段分为五步</li></ul><h2 id="常用的-http-方法有哪些" tabindex="-1">常用的 HTTP 方法有哪些 <a class="header-anchor" href="#常用的-http-方法有哪些" aria-label="Permalink to &quot;常用的 HTTP 方法有哪些&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>GET 获取</span></span>
<span class="line"><span>POST 获取通过服务器处理的实体主体</span></span>
<span class="line"><span>PUT 更新传输文件(发两次请求，PUT两次请求结果一样，post 是增资源)</span></span>
<span class="line"><span>DELETE 删除服务器资源</span></span>
<span class="line"><span>CONNECTION 开启隧道连接代理</span></span>
<span class="line"><span>OPTION 询问支持方法</span></span>
<span class="line"><span>HEAD 获取报文首部</span></span>
<span class="line"><span>TRACE 追踪路径</span></span></code></pre></div><h2 id="get-和-post-的区别" tabindex="-1">GET 和 POST 的区别 <a class="header-anchor" href="#get-和-post-的区别" aria-label="Permalink to &quot;GET 和 POST 的区别&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>GET</span></span>
<span class="line"><span>  - 参数 会显示在 URL 后面</span></span>
<span class="line"><span>  - 缓存 浏览器返回按钮将不会在请求</span></span>
<span class="line"><span>  - 可收藏</span></span>
<span class="line"><span>  - 相对 POST 更不安全</span></span>
<span class="line"><span>  - 长度有所限制</span></span>
<span class="line"><span>POST</span></span>
<span class="line"><span>  - 参数 会不显示 URL</span></span>
<span class="line"><span>  - 缓存 浏览器返回按钮会在请求</span></span>
<span class="line"><span>  - 不可收藏</span></span></code></pre></div><h2 id="http-请求报文与响应报文格式" tabindex="-1">HTTP 请求报文与响应报文格式 <a class="header-anchor" href="#http-请求报文与响应报文格式" aria-label="Permalink to &quot;HTTP 请求报文与响应报文格式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>报文</span></span>
<span class="line"><span>  报文首部（头部）</span></span>
<span class="line"><span>    报文行</span></span>
<span class="line"><span>      请求行</span></span>
<span class="line"><span>      相应行</span></span>
<span class="line"><span>    首部内容</span></span>
<span class="line"><span>  空行</span></span>
<span class="line"><span>  报文主体</span></span></code></pre></div><h2 id="常见-http-首部字段" tabindex="-1">常见 HTTP 首部字段 <a class="header-anchor" href="#常见-http-首部字段" aria-label="Permalink to &quot;常见 HTTP 首部字段&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>报文行</span></span>
<span class="line"><span>  请求行 GET / HTTP/1.1</span></span>
<span class="line"><span>  相应行 HTTP1.1 200 ok</span></span>
<span class="line"><span>首部内容</span></span>
<span class="line"><span>  通用内容</span></span>
<span class="line"><span>    Catch-Control</span></span>
<span class="line"><span>    Connection</span></span>
<span class="line"><span>    Date</span></span>
<span class="line"><span>  请求内容</span></span>
<span class="line"><span>    Accept</span></span>
<span class="line"><span>    Accept-Encoding</span></span>
<span class="line"><span>    Accept-Language</span></span>
<span class="line"><span>    User-Agent</span></span>
<span class="line"><span>    ETag</span></span>
<span class="line"><span>    Host</span></span>
<span class="line"><span>  响应内容</span></span>
<span class="line"><span>    Server</span></span>
<span class="line"><span>  实体</span></span>
<span class="line"><span>    Content-type</span></span>
<span class="line"><span>    Last-Modify</span></span>
<span class="line"><span>    Allow</span></span>
<span class="line"><span>  Cookie</span></span>
<span class="line"><span>    Set-Cookie</span></span>
<span class="line"><span>    Cookie</span></span>
<span class="line"><span>  其他</span></span>
<span class="line"><span>    X-Frame-Option</span></span></code></pre></div><h2 id="一次完整的-http-请求事务包含以下四个环节" tabindex="-1">一次完整的 HTTP 请求事务包含以下四个环节 <a class="header-anchor" href="#一次完整的-http-请求事务包含以下四个环节" aria-label="Permalink to &quot;一次完整的 HTTP 请求事务包含以下四个环节&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- URL 通过 缓存 或者 DNS服务器找到对应IP</span></span>
<span class="line"><span>- 通过以HTTP协议生成的报文</span></span>
<span class="line"><span>- 通过TCP/IP协议进行传输</span></span>
<span class="line"><span>- 通过ARP找到IP对应的MAC地址</span></span></code></pre></div><h2 id="一次完整的-http-请求所经历的-7-个步骤" tabindex="-1">一次完整的 HTTP 请求所经历的 7 个步骤 <a class="header-anchor" href="#一次完整的-http-请求所经历的-7-个步骤" aria-label="Permalink to &quot;一次完整的 HTTP 请求所经历的 7 个步骤&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- 应用层</span></span>
<span class="line"><span>- 传输层</span></span>
<span class="line"><span>- 网络层</span></span>
<span class="line"><span>- 数据链路层</span></span>
<span class="line"><span>- 物理层</span></span>
<span class="line"><span>建立TCP连接-&gt;发送请求行-&gt;发送请求头-&gt;（到达服务器）发送状态行-&gt;发送响应头-&gt;发送响应数据-&gt;断TCP连接</span></span></code></pre></div><h2 id="输入一个-url-到页面展示中间经历了哪些东西" tabindex="-1">输入一个 URL，到页面展示中间经历了哪些东西 <a class="header-anchor" href="#输入一个-url-到页面展示中间经历了哪些东西" aria-label="Permalink to &quot;输入一个 URL，到页面展示中间经历了哪些东西&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- 浏览器：</span></span>
<span class="line"><span>  - 浏览器是多进程的，每个页面是一个进程，输入一个 URL 按下会车开启一个新的进程，包含有多个线程其中 网络线程/GUI渲染线程/JS引擎解析线程</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 网络线程</span></span>
<span class="line"><span>  - 应用层：域名找到对应 IP</span></span>
<span class="line"><span>    - URL 找到先找浏览器缓存，没有找本机缓存，没有找 HOST，在没有找 DNS 域名服务找到，中间可能经过路由缓存</span></span>
<span class="line"><span>    - HTTP 生成请求报文 请求行 空行 请求主体</span></span>
<span class="line"><span>  - 传输层：建立 TCP 通信连接，进行三次握手</span></span>
<span class="line"><span>  - 网络层：路由转发找到对应服务器 物理MAC 地址</span></span>
<span class="line"><span>  - 物理链路层：通过物理设备</span></span>
<span class="line"><span>  - 服务器收到数据</span></span>
<span class="line"><span>    - 负载均衡 HTTP复用</span></span>
<span class="line"><span>  - HTTP 响应报文</span></span>
<span class="line"><span>  - 缓存设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- GUI渲染线程</span></span>
<span class="line"><span>  - HTML 解析成DOM Tree， CSS解析成CSSOM，合成RenderTree，然后渲染</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- JS 引擎解析线程</span></span>
<span class="line"><span>  - EventLoop 作用域链 变量提升 回收机制 垃圾回收 作用域链 原型链</span></span></code></pre></div><h2 id="http-优化" tabindex="-1">HTTP 优化 <a class="header-anchor" href="#http-优化" aria-label="Permalink to &quot;HTTP 优化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>缓存：利用HTTP Cache来优化网站</span></span>
<span class="line"><span>压缩：内容压缩</span></span>
<span class="line"><span>TCP复用：</span></span>
<span class="line"><span>  负载均衡：多个客户端一个HTTP复用到一个TCP连接上</span></span>
<span class="line"><span>  HTTP复用：一个客户端多个HTTP复用到一个TCP连接进行处理</span></span>
<span class="line"><span>SSL加速：使用SSL协议对HTTP协议进行加密，在通道内加密并加速</span></span></code></pre></div><h2 id="http-的缺点" tabindex="-1">HTTP 的缺点 <a class="header-anchor" href="#http-的缺点" aria-label="Permalink to &quot;HTTP 的缺点&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>不保存、无状态</span></span>
<span class="line"><span>管线化</span></span></code></pre></div><h2 id="http1-1-版本特性" tabindex="-1">HTTP1.1 版本特性 <a class="header-anchor" href="#http1-1-版本特性" aria-label="Permalink to &quot;HTTP1.1 版本特性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>持久链接</span></span>
<span class="line"><span>管线化</span></span>
<span class="line"><span>断点续传</span></span></code></pre></div><h2 id="http-和-https-的区别" tabindex="-1">http 和 https 的区别 <a class="header-anchor" href="#http-和-https-的区别" aria-label="Permalink to &quot;http 和 https 的区别&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>HTTP 明文可被代理修改首部信息，不安全</span></span>
<span class="line"><span>安全：HTTP无法加密不安全 HTTPS加密安全</span></span>
<span class="line"><span>端口： HTTP80 HTTPS 443</span></span></code></pre></div><h2 id="http-缓存" tabindex="-1">HTTP 缓存 <a class="header-anchor" href="#http-缓存" aria-label="Permalink to &quot;HTTP 缓存&quot;">​</a></h2><p>强缓存 expires: 绝对时间 1.0 cache-control: 1.1、相对时间</p><ul><li>no-cache</li><li>no-store</li><li>public\\private</li><li>max-age</li><li>s-maxage</li></ul><p>协商缓存 304 etag if-none-match last-modify if-modify-since 秒</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Cache-Control</span></span></code></pre></div><h2 id="ssl-tls-握手阶段分为五步" tabindex="-1">SSL/TLS 握手阶段分为五步 <a class="header-anchor" href="#ssl-tls-握手阶段分为五步" aria-label="Permalink to &quot;SSL/TLS 握手阶段分为五步&quot;">​</a></h2><h2 id="分享" tabindex="-1">分享 <a class="header-anchor" href="#分享" aria-label="Permalink to &quot;分享&quot;">​</a></h2><p><a href="http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html" target="_blank" rel="noreferrer">SSL</a><a href="https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A?" target="_blank" rel="noreferrer">HTTP1.0、HTTP1.1 和 HTTP2.0 的区别</a><a href="https://juejin.im/post/5b3c87386fb9a04f9a5cb037" target="_blank" rel="noreferrer">缓存</a></p>`,33)]))}const u=s(l,[["render",i]]);export{T as __pageData,u as default};
