import{_ as i,a,aQ as n,o as h}from"./chunks/framework.CqV2UAXh.js";const g=JSON.parse('{"title":"webpack 分包加载用的是哪个，分包的原理？","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/webpack/8.webpack 分包加载用的是哪个，分包的原理？.md","filePath":"前端/面试题/webpack/8.webpack 分包加载用的是哪个，分包的原理？.md","lastUpdated":1727172427000}'),k={name:"前端/面试题/webpack/8.webpack 分包加载用的是哪个，分包的原理？.md"};function l(p,s,t,e,E,d){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="webpack-分包加载用的是哪个-分包的原理" tabindex="-1">webpack 分包加载用的是哪个，分包的原理？ <a class="header-anchor" href="#webpack-分包加载用的是哪个-分包的原理" aria-label="Permalink to &quot;webpack 分包加载用的是哪个，分包的原理？&quot;">​</a></h1><p>加快首页的请求速度，只有其他模块，只有当需要的时候才会加载对应 js webpack 4 最大的改动就是废除了 CommonsChunkPlugin 引入了 optimization.splitChunks。 如果你的 mode 是 production，那么 webpack4 就会自动开启 Code Splitting。 虽然在 webpack4 会自动开启 Code Splitting，但是随着项目工程的最大， 这往往不能满足我们的需求，我们需要再进行个性化的优化。</p><p>jsonp</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vue.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">modules.export </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ... </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	configureWebpack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  		</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // chuns 有几个参数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // all: 不管文件是动态还是非动态载入，统一将文件分离。当页面首次载入会引入所有的包</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // async： 将异步加载的文件分离，首次一般不引入，到需要异步引入的组件才会引入。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // initial：将异步和非异步的文件分离，如果一个文件被异步引入也被非异步引入，那它会被打包两次（注意和all区别），用于分离页面首次需要加载的包。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     config.optimization </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      splitChunks: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        cacheGroups: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          qurender: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;qu-render&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 单独将 qu-render 拆包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            chunks: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;async&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 异步加载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">/]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">node_modules</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">/]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(qu-render)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">/]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 权重</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            enforce: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &#39;template-components&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;template-components&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            chunks: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;async&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">/]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">node_modules</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">/]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(template-components)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">/]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            enforce: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // 名字自己起</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &#39;async-common-group&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            chunks: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;async&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">/]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">node_modules</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">/]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(realia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">primary_template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">lottie-web</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">video</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">js)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">/]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;async-common-group&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // 项目大，公共文件不可控，故未配置 commons </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // commons: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          //   name: &#39;commons&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          //   chunks: &#39;all&#39;, // 页面首次加载，需要引入</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          //   minChunks: 2, // 重复引入了2次</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          //   enforce: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ... </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,4)]))}const y=i(k,[["render",l]]);export{g as __pageData,y as default};
