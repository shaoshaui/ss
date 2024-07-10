import{_ as s,a,o as i,aR as n}from"./chunks/framework.Dl98zJwX.js";const g=JSON.parse('{"title":"loader 执行顺序","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/webpack/7.loader 执行顺序.md","filePath":"前端/面试题/webpack/7.loader 执行顺序.md","lastUpdated":1720603948000}'),e={name:"前端/面试题/webpack/7.loader 执行顺序.md"},l=n(`<h1 id="loader-执行顺序" tabindex="-1">loader 执行顺序 <a class="header-anchor" href="#loader-执行顺序" aria-label="Permalink to &quot;loader 执行顺序&quot;">​</a></h1><h2 id="执行顺序" tabindex="-1">执行顺序 <a class="header-anchor" href="#执行顺序" aria-label="Permalink to &quot;执行顺序&quot;">​</a></h2><p>相同优先级的 loader 执行顺序为：<code>从右到左，从下到上</code>。（pitch 情况下，则反过来) 4 类 loader 的执行优级为：<code>pre &gt; normal &gt; inline &gt; post</code> 。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> compose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fns.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduceRight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v), x);</span></span></code></pre></div><h2 id="enforce-类型" tabindex="-1">enforce 类型 <a class="header-anchor" href="#enforce-类型" aria-label="Permalink to &quot;enforce 类型&quot;">​</a></h2><p>post(后置)+inline(内联)+normal(正常)+pre(前置)可以通过 enforce 属性去改变执行顺序</p><p>enforce:‘pre’ 前置 权重最高 enforce:‘normal’ 不变 权重第二 enforce:‘inline’ 行内 权重第三 enforce:‘post’ 后置 权重第四</p><h2 id="前缀的作用" tabindex="-1">前缀的作用 <a class="header-anchor" href="#前缀的作用" aria-label="Permalink to &quot;前缀的作用&quot;">​</a></h2><p>内联 loader 可以通过添加不同前缀，跳过其他类型 loader。</p><p><code>!</code> 跳过 normal <code>-!</code> 跳过 pre 和 normal <code>!!</code> 跳过 pre、 normal 和 post</p><p>这些前缀在很多场景下非常有用</p><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pitch-post-loader1.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pitch-post-loader2.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pitch-inline-loader1.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pitch-inline-loader2.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pitch-normal-loader1.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pitch-normal-loader2.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pitch-pre-loader1.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pitch-pre-loader2.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pre-loader2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pre-loader1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">normal-loader2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">normal-loader1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inline-loader2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inline-loader1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">post-loadder2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">post-loadder1</span></span></code></pre></div>`,13),p=[l];function t(h,r,k,d,o,E){return i(),a("div",null,p)}const y=s(e,[["render",t]]);export{g as __pageData,y as default};
