import{_ as e,a as h,aQ as a,o as p}from"./chunks/framework.CqV2UAXh.js";const d=JSON.parse('{"title":"http1 和 http2 的区别， http2 做了那些改进，有哪些不足，http3 做了那些改进","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/http/5.http1 和 http2 的区别， http2 做了那些改进，有哪些不足，http3 做了那些改进.md","filePath":"前端/面试题/http/5.http1 和 http2 的区别， http2 做了那些改进，有哪些不足，http3 做了那些改进.md","lastUpdated":1727172427000}'),l={name:"前端/面试题/http/5.http1 和 http2 的区别， http2 做了那些改进，有哪些不足，http3 做了那些改进.md"};function o(i,t,r,n,c,s){return p(),h("div",null,t[0]||(t[0]=[a('<h1 id="http1-和-http2-的区别-http2-做了那些改进-有哪些不足-http3-做了那些改进" tabindex="-1">http1 和 http2 的区别， http2 做了那些改进，有哪些不足，http3 做了那些改进 <a class="header-anchor" href="#http1-和-http2-的区别-http2-做了那些改进-有哪些不足-http3-做了那些改进" aria-label="Permalink to &quot;http1 和 http2 的区别， http2 做了那些改进，有哪些不足，http3 做了那些改进&quot;">​</a></h1><h2 id="http1-1" tabindex="-1">http1.1 <a class="header-anchor" href="#http1-1" aria-label="Permalink to &quot;http1.1&quot;">​</a></h2><ul><li>1999 长链接、管线化、断点续传</li></ul><p>长链接(持久链接): connection：keep-alive 即 TCP 默认不关闭，可以被多个请求复用，建立 tcp 连接三次握手-&gt;请求响应请求响应-&gt;四次挥手 管道机制：一个 TCP 连接，可以同时发送多个请求，浏览器一般是 6 个，请求 1 请求 2 请求 3-&gt;响应 123 断点续传: 通过请求头字段 content-range=bytes=0-9 来实现 206 缓存: 新增了一些缓存的字段 catch-control 方法: 新增了一些方法，PUT、DELETE、OPTIONS、PATCH</p><h2 id="http2" tabindex="-1">http2 <a class="header-anchor" href="#http2" aria-label="Permalink to &quot;http2&quot;">​</a></h2><blockquote><p>2015 年 http2 建立在 https 基础之上</p></blockquote><ul><li>头部压缩：HPACK，http1.1 只压缩了 body 没有头</li><li>分帧传输: 有上下文联系，进行组合，并发送数据（二进制传输，头信息和数据体都是二进制），解决头部拥塞问题</li><li>多路复用（信道复用）: 一条 tcp 链接上可以乱序收发请求和响应。多个响应和请求不再有顺序关系。同域只开启一个 tcp 链接</li><li>服务器主动推送消息（server push）</li><li>请求优先级: 设置数据帧的优先级，让服务器优先处理</li></ul><h2 id="http3" tabindex="-1">http3 <a class="header-anchor" href="#http3" aria-label="Permalink to &quot;http3&quot;">​</a></h2><blockquote><p>2018 年 基于 UDP, 添加了 QUIC 协议 实现可靠</p></blockquote><ul><li>拥塞控制</li><li>扩展了多路复用</li><li>传输速度提升</li><li>头部压缩</li></ul><h2 id="管道机制会造成什么样的问题-http2-0-是怎么解决的" tabindex="-1">管道机制会造成什么样的问题，http2.0 是怎么解决的 <a class="header-anchor" href="#管道机制会造成什么样的问题-http2-0-是怎么解决的" aria-label="Permalink to &quot;管道机制会造成什么样的问题，http2.0 是怎么解决的&quot;">​</a></h2><p>头部拥塞：HTTP 传输是基于请求-应答的模式进行的，报文必须是一发一收，里面的任务被放在一个任务队列中串行执行，一旦队首的请求处理太慢，就会阻塞后面请求的处理</p><p>二进制帧没有先后关系 多路复用，分帧传输，进行组合</p><h2 id="头部压缩的原理是什么" tabindex="-1">头部压缩的原理是什么 <a class="header-anchor" href="#头部压缩的原理是什么" aria-label="Permalink to &quot;头部压缩的原理是什么&quot;">​</a></h2><p>HPACK 算法 服务器和客户端之间建立哈希表，将用到的字段存放在这张表中，那么在传输的时候对于之前出现过的值， 只需要把索引(比如 0，1，2，...)传给对方即可，对方拿到索引查表就行了。这种传索引的方式，可以说让请求头字段得到极大程度的精简和复用。</p><h2 id="http2-0-允许服务器主动推送消息-那跟-websocket-有什么区别吗" tabindex="-1">http2.0 允许服务器主动推送消息，那跟 WebSocket 有什么区别吗 <a class="header-anchor" href="#http2-0-允许服务器主动推送消息-那跟-websocket-有什么区别吗" aria-label="Permalink to &quot;http2.0 允许服务器主动推送消息，那跟 WebSocket 有什么区别吗&quot;">​</a></h2><blockquote><p>而 HTTP2.0 则是对 HTML、CSS 等 JS 资源的传输方式进行了优化，并没有提供新的 JS API，也不能用于实时传输消息。 WebSocket 是基于 HTTP1.1 的协议，可以简单理解为创建了一条 TCP 连接，</p></blockquote><blockquote><p><a href="https://juejin.cn/post/6844904100035821575#heading-91" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904100035821575#heading-91</a></p></blockquote>',18)]))}const u=e(l,[["render",o]]);export{d as __pageData,u as default};
