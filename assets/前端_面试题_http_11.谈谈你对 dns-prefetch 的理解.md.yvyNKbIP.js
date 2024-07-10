import{_ as s,a as i,o as t,aR as a}from"./chunks/framework.Dl98zJwX.js";const E=JSON.parse('{"title":"谈谈你对 dns-prefetch 的理解","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/http/11.谈谈你对 dns-prefetch 的理解.md","filePath":"前端/面试题/http/11.谈谈你对 dns-prefetch 的理解.md","lastUpdated":1720603948000}'),e={name:"前端/面试题/http/11.谈谈你对 dns-prefetch 的理解.md"},h=a(`<h1 id="谈谈你对-dns-prefetch-的理解" tabindex="-1">谈谈你对 dns-prefetch 的理解 <a class="header-anchor" href="#谈谈你对-dns-prefetch-的理解" aria-label="Permalink to &quot;谈谈你对 dns-prefetch 的理解&quot;">​</a></h1><p>浏览器根据自定义的规则，提前去解析后面可能用到的域名，来加速网站的访问速度。简单来讲就是提前解析域名，以免延迟。</p><p>DNS Prefetching 是提前加载域名解析的，省去了解析时间,可帮助开发人员掩盖 DNS 解析延迟</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dns-prefetch&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://fonts.googleapis.com/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>首先，dns-prefetch 仅对跨域域上的 DNS 查找有效，因此请避免使用它来指向您的站点或域。这是因为，到浏览器看到提示时，您站点域背后的 IP 已经被解析。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preconnect&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://fonts.gstatic.com/&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> crossorigin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dns-prefetch&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://fonts.gstatic.com/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>这个功能有个默认加载条件，所有的 a 标签的 href 都会自动去启用 DNS Prefetching，也就是说， 你网页的 a 标签 href 带的域名，是不需要在 head 里面加上 link 手动设置的。但 a 标签的默认启动在 HTTPS 不起作用。</p><p>这时要使用 meta 里面 http-equiv 来强制启动功能。</p><meta http-equiv="x-dns-prefetch-control" content="on"><h1 id="preconnect" tabindex="-1">preconnect <a class="header-anchor" href="#preconnect" aria-label="Permalink to &quot;preconnect&quot;">​</a></h1><p>preconnect 会建立与服务器的连接，如果站点是通过 HTTPS 服务的，则此过程包括 DNS 解析，建立 TCP 连接以及执行 TLS 握手。将两者结合起来可提供进一步减少跨域请求的感知延迟的机会</p><h1 id="html-的-crossorigin-属性" tabindex="-1">html 的 crossorigin 属性 <a class="header-anchor" href="#html-的-crossorigin-属性" aria-label="Permalink to &quot;html 的 crossorigin 属性&quot;">​</a></h1><blockquote><p>添加这个属性， 并且服务器允许跨域后，会得到精确的报错信息。</p></blockquote><p>不加 crossorigin 以正常加载，无法准确捕获错误(只能捕获到:Script error.)</p>`,14),n=[h];function p(l,r,k,o,c,d){return t(),i("div",null,n)}const _=s(e,[["render",p]]);export{E as __pageData,_ as default};
