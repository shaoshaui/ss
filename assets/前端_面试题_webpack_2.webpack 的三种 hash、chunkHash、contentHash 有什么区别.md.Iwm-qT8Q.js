import{_ as s,a,o as h,aR as i}from"./chunks/framework.Dl98zJwX.js";const u=JSON.parse('{"title":"webpack 的三种 hash、chunkHash、contentHash 有什么区别","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/webpack/2.webpack 的三种 hash、chunkHash、contentHash 有什么区别.md","filePath":"前端/面试题/webpack/2.webpack 的三种 hash、chunkHash、contentHash 有什么区别.md","lastUpdated":1720603948000}'),n={name:"前端/面试题/webpack/2.webpack 的三种 hash、chunkHash、contentHash 有什么区别.md"},t=i(`<h1 id="webpack-的三种-hash、chunkhash、contenthash-有什么区别" tabindex="-1">webpack 的三种 hash、chunkHash、contentHash 有什么区别 <a class="header-anchor" href="#webpack-的三种-hash、chunkhash、contenthash-有什么区别" aria-label="Permalink to &quot;webpack 的三种 hash、chunkHash、contentHash 有什么区别&quot;">​</a></h1><ul><li>文件输出名后缀, 结合 CDN 缓存使用，通过更改 hash 来触发文件更新缓存</li></ul><h2 id="hash" tabindex="-1">hash <a class="header-anchor" href="#hash" aria-label="Permalink to &quot;hash&quot;">​</a></h2><ul><li>hash 每次 webpack 构建生成唯一一个 hash, 修改任意文件都会修改 hash</li></ul><h2 id="chunkhash" tabindex="-1">chunkHash <a class="header-anchor" href="#chunkhash" aria-label="Permalink to &quot;chunkHash&quot;">​</a></h2><ul><li>同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk, 根据 chunk 生成 hash 值, 来源于同一个 chunk，则 hash 值就一样, 我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建, 只要我们不改动公共库的代码，就可以保证其哈希值不会受影响</li><li>问题：js 引用 css，编译后他们的 hash 是相同的，只要 js 变化，css 也就发生变化</li></ul><h2 id="contenthash" tabindex="-1">contentHash <a class="header-anchor" href="#contenthash" aria-label="Permalink to &quot;contentHash&quot;">​</a></h2><ul><li>contentHash 根据内容生成 hash 值，文件内容相同 hash 值就相同, css 所处模块中，只要 css 内容不发生变化， hash 就不变化</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  output</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    filename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;[name].[chunkhash].js&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MiniCssExtractPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[name].[contenthash].css&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span></code></pre></div>`,9),e=[t];function l(k,p,c,r,o,d){return h(),a("div",null,e)}const _=s(n,[["render",l]]);export{u as __pageData,_ as default};
