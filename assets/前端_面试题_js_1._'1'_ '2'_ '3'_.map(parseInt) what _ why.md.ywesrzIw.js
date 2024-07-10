import{_ as s,a as i,o as a,aR as t}from"./chunks/framework.Dl98zJwX.js";const y=JSON.parse(`{"title":"['1', '2', '3'].map(parseInt)","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/js/1.['1', '2', '3'].map(parseInt) what & why.md","filePath":"前端/面试题/js/1.['1', '2', '3'].map(parseInt) what & why.md","lastUpdated":1720603948000}`),h={name:"前端/面试题/js/1.['1', '2', '3'].map(parseInt) what & why.md"},n=t(`<h1 id="_1-2-3-map-parseint" tabindex="-1">[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt) <a class="header-anchor" href="#_1-2-3-map-parseint" aria-label="Permalink to &quot;[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt)&quot;">​</a></h1><ul><li>真正的执行结果是 [1, NaN, NaN]</li></ul><h1 id="提前须知" tabindex="-1">提前须知 <a class="header-anchor" href="#提前须知" aria-label="Permalink to &quot;提前须知&quot;">​</a></h1><h1 id="parseint" tabindex="-1">parseInt <a class="header-anchor" href="#parseint" aria-label="Permalink to &quot;parseInt&quot;">​</a></h1><ul><li><p>parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。 const intValue = parseInt(string[, radix]);</p></li><li><p>string 要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用 ToString 抽象操作)。字符串开头的空白符将会被忽略</p></li><li><p>radix 一个介于 2 和 36 之间的整数(数学系统的基础)，表示上述字符串的基数。默认为 10。 返回值 返回一个整数或 NaN</p></li></ul><p>在 radix 为 undefined，或者 radix 为 0 或者没有指定的情况下，JavaScript 作如下处理：</p><ul><li>如果字符串 string 以&quot;0x&quot;或者&quot;0X&quot;开头, 则基数是 16 (16 进制).</li><li>如果字符串 string 以&quot;0&quot;开头, 基数是 8（八进制）或者 10（十进制），那么具体是哪个基数由实现环境决定。ECMAScript 5 规定使用 10，但是并不是所有的浏览器都遵循这个规定。因此，永远都要明确给出 radix 参数的值。</li><li>如果字符串 string 以其它任何值开头，则基数是 10 (十进制)。</li></ul><blockquote><p>总结：parseInt 需要两个参数，第一个是数值，第二个参数是几进制来算(不传默认为 10，0 也是 10)</p></blockquote><h1 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(funs);</span></span></code></pre></div><blockquote><p>总结：map 的参数会被执行，执行参数第一个：当前值；第二个：当前下标；第三个：当前当前数组</p></blockquote><h1 id="变身" tabindex="-1">变身 <a class="header-anchor" href="#变身" aria-label="Permalink to &quot;变身&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myParseInt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">radix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(string, radix);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myParseInt);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(array);</span></span></code></pre></div><ul><li>或者也可以这样理解</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item, index);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h1 id="类似写法" tabindex="-1">类似写法 <a class="header-anchor" href="#类似写法" aria-label="Permalink to &quot;类似写法&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Number)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String)</span></span></code></pre></div><h1 id="分享" tabindex="-1">分享 <a class="header-anchor" href="#分享" aria-label="Permalink to &quot;分享&quot;">​</a></h1><p><a href="https://github.com/sisterAn/blog/issues/19" target="_blank" rel="noreferrer">[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt) what &amp; why</a></p><h1 id="r-进制转化为十进制" tabindex="-1">R 进制转化为十进制 <a class="header-anchor" href="#r-进制转化为十进制" aria-label="Permalink to &quot;R 进制转化为十进制&quot;">​</a></h1><h2 id="二进制转化十进制-8421" tabindex="-1">二进制转化十进制（8421） <a class="header-anchor" href="#二进制转化十进制-8421" aria-label="Permalink to &quot;二进制转化十进制（8421）&quot;">​</a></h2><ul><li>10 = 2^1 + 2^0 = 2</li><li>11 = 2^1 * 1 + 2^0 * 1 = 6</li><li>111.11 = 2^2 * 1 + 2^1 * 1 + 2^0 * 1 = 7.75</li></ul><h1 id="二进制小数转十进制" tabindex="-1">二进制小数转十进制 <a class="header-anchor" href="#二进制小数转十进制" aria-label="Permalink to &quot;二进制小数转十进制&quot;">​</a></h1><p>0.11 1/2^1 = 0.5 1/2^2 = 0.25</p><h1 id="十进制小数转二进制" tabindex="-1">十进制小数转二进制 <a class="header-anchor" href="#十进制小数转二进制" aria-label="Permalink to &quot;十进制小数转二进制&quot;">​</a></h1><p>小数乘 R 取整，顺序所得</p><ul><li>0.6875 * 2 = &gt; 1.2</li><li>0.2 * 2 = &gt; 0.4 = 0.10</li></ul><h1 id="八进制-17-转化成-十进制" tabindex="-1">八进制 17 转化成 十进制 <a class="header-anchor" href="#八进制-17-转化成-十进制" aria-label="Permalink to &quot;八进制 17 转化成 十进制&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;17&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// - 17 = 8^1 * 1 + 8^0 * 7 = 8+7 = 15</span></span></code></pre></div><h1 id="_16-进制-f-转化成-十进制" tabindex="-1">16 进制 F 转化成 十进制 <a class="header-anchor" href="#_16-进制-f-转化成-十进制" aria-label="Permalink to &quot;16 进制 F 转化成 十进制&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;FXX123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// - 123 = 16^2 + 16 \\* 2 + 3 = 256 + 32 + 3 = 291</span></span></code></pre></div><h1 id="_10进制转化为-r-进制" tabindex="-1">10进制转化为 R 进制 <a class="header-anchor" href="#_10进制转化为-r-进制" aria-label="Permalink to &quot;10进制转化为 R 进制&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1010&#39;</span></span></code></pre></div>`,33),l=[n];function p(e,k,r,d,E,g){return a(),i("div",null,l)}const c=s(h,[["render",p]]);export{y as __pageData,c as default};
