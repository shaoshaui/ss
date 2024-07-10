import{_ as t,a as e,o as a,aR as o}from"./chunks/framework.Dl98zJwX.js";const T=JSON.parse('{"title":"get 和 post 有什么区别","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/http/9.get 和 post 有什么区别.md","filePath":"前端/面试题/http/9.get 和 post 有什么区别.md","lastUpdated":1720603948000}'),p={name:"前端/面试题/http/9.get 和 post 有什么区别.md"},s=o('<h1 id="get-和-post-有什么区别" tabindex="-1">get 和 post 有什么区别 <a class="header-anchor" href="#get-和-post-有什么区别" aria-label="Permalink to &quot;get 和 post 有什么区别&quot;">​</a></h1><ul><li>缓存：get 默认有缓存,可被收藏，post 需要设置</li><li>大小：get 由于浏览器特性，有大小限制 2k，会比 post 小</li><li>安全：get 参数在 url 展示，相对(只是相对) post 安全</li><li>数据：get 后退刷新无害，post 会重新提交数据</li><li>编码：get 只允许 ASCII 字符、post 没有限制，也允许二进制数据</li></ul><p>简单请求</p><p>GET HEAD POST</p><h1 id="预检请求" tabindex="-1">预检请求 <a class="header-anchor" href="#预检请求" aria-label="Permalink to &quot;预检请求&quot;">​</a></h1><p>预检请求（Preflighted requests ）是浏览器发起跨域请求时，通过 OPTIONS 方法询问服务器对跨域请求的支持情况（支持的包含请求方法、请求头、数据类型）</p><p>触发预检请求的三类条件： 条件一：默认情况下，跨域请求只支持 GET,HEAD,POST 方法，如果不是这三个请求方法（比如：PUT、DELETE、CONNECT、OPTIONS、TRAC...将触发预检请求</p><p>条件二：默认情况下，浏览器跨域请求时，会自动添加的请求头（HOST,Referer,Connection、Accept、User-Agent,Accept-Language,Accept-Encoding,Accept-Charset 和 Content-Type）,这些请求中还有其他请求头时，那么将触发预检请求。</p><p>条件三：浏览器支持的 Content-Type 值为 application/x-www-form-urlencoded，multipart/form-data 和 text/plain。如果是其他数据类型(如 application/json,text/xml...)，那么将触发预检请求。</p>',9),i=[s];function n(r,l,_,c,d,h){return a(),e("div",null,i)}const u=t(p,[["render",n]]);export{T as __pageData,u as default};
