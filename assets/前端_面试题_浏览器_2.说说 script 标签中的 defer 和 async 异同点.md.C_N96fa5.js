import{_ as a,a as e,o as i,aR as t}from"./chunks/framework.Dl98zJwX.js";const f=JSON.parse('{"title":"说说 script 标签中的 defer 和 async 异同点","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/浏览器/2.说说 script 标签中的 defer 和 async 异同点.md","filePath":"前端/面试题/浏览器/2.说说 script 标签中的 defer 和 async 异同点.md","lastUpdated":1720603948000}'),n={name:"前端/面试题/浏览器/2.说说 script 标签中的 defer 和 async 异同点.md"},r=t('<h1 id="说说-script-标签中的-defer-和-async-异同点" tabindex="-1">说说 script 标签中的 defer 和 async 异同点 <a class="header-anchor" href="#说说-script-标签中的-defer-和-async-异同点" aria-label="Permalink to &quot;说说 script 标签中的 defer 和 async 异同点&quot;">​</a></h1><h2 id="async-百度统计" tabindex="-1">async 百度统计 <a class="header-anchor" href="#async-百度统计" aria-label="Permalink to &quot;async 百度统计&quot;">​</a></h2><ul><li>文档渲染-脚本一二加载结束分别立即执行（文档继续渲染），执行的过程中会阻止文档渲染，渲染完了立刻 DOMContentLoaded</li><li>阻止文档渲染，第二个脚本可能会在第一个脚本文件之前执行，加载完了立即执行</li><li>指定 async 属性的目的是不让页面等待两个脚本下载和执行</li></ul><p>文档渲染：执行的时候阻挡文档渲染 脚本加载顺序：加载 1 后立即执行，加载 2 后立即执行</p><h2 id="defer-代码高亮" tabindex="-1">defer 代码高亮 <a class="header-anchor" href="#defer-代码高亮" aria-label="Permalink to &quot;defer 代码高亮&quot;">​</a></h2><ul><li>文档渲染-下载脚本 1、2，脚本都下载完，一起立刻执行，执行完后，才执行 DOMContentLoaded 文档渲染：不阻挡 脚本加载顺序：加载后，需要等到 1、2 都加载完成，一起执行</li></ul><h2 id="普通" tabindex="-1">普通 <a class="header-anchor" href="#普通" aria-label="Permalink to &quot;普通&quot;">​</a></h2><ul><li>遇到 script 会阻止 dom 渲染，需要 script1\\2 都加载并执行完了之后；没渲染完 dom 继续渲染，渲染完了执行 DOMContentLoaded</li></ul><p>文档渲染：加载和执行都阻挡文档渲染 脚本加载顺序：1、2 都加载完毕之后，分别执行 1 和执行 2</p><p><img src="https://cdn.nlark.com/yuque/0/2020/png/424608/1580961778689-c6d6bee9-401d-4c2c-b859-4e21bd69b870.png#align=left&amp;display=inline&amp;height=411&amp;name=image.png&amp;originHeight=822&amp;originWidth=826&amp;size=106165&amp;status=done&amp;style=none&amp;width=413" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2020/png/424608/1580961732235-6cfdb5f6-9106-45c1-81a3-4fb4d03f3c12.png#align=left&amp;display=inline&amp;height=649&amp;name=image.png&amp;originHeight=1298&amp;originWidth=1316&amp;size=257753&amp;status=done&amp;style=none&amp;width=658" alt="image.png"><img src="https://cdn.nlark.com/yuque/0/2020/png/424608/1580961743904-dee7cacc-30cf-4242-932d-d17686e2a616.png#align=left&amp;display=inline&amp;height=421&amp;name=image.png&amp;originHeight=842&amp;originWidth=1312&amp;size=134146&amp;status=done&amp;style=none&amp;width=656" alt="image.png"><a href="https://cloud.tencent.com/developer/article/1093912" target="_blank" rel="noreferrer">defer async</a></p><h2 id="js-会阻塞页面的渲染吗-说一下原因" tabindex="-1">js 会阻塞页面的渲染吗？说一下原因？ <a class="header-anchor" href="#js-会阻塞页面的渲染吗-说一下原因" aria-label="Permalink to &quot;js 会阻塞页面的渲染吗？说一下原因？&quot;">​</a></h2><ul><li>默认会阻，defer 加载执行都不会，async 加载不会阻，执行回阻塞</li><li>第三方脚本延迟引发白屏，此时就可以用 async</li></ul><h2 id="defer应用-代码高亮" tabindex="-1">defer应用 代码高亮 <a class="header-anchor" href="#defer应用-代码高亮" aria-label="Permalink to &quot;defer应用 代码高亮&quot;">​</a></h2><ul><li>其他多个脚本互相依赖</li><li>脚本依赖 dom 元素渲染完毕</li></ul><h2 id="async-百度统计-1" tabindex="-1">async 百度统计 <a class="header-anchor" href="#async-百度统计-1" aria-label="Permalink to &quot;async 百度统计&quot;">​</a></h2><ul><li>不关注文档是否渲染完毕</li><li>多个脚本之间没有关系，没有其他脚本产生的数据</li></ul><h2 id="下载-影响渲染的有" tabindex="-1">下载-影响渲染的有 <a class="header-anchor" href="#下载-影响渲染的有" aria-label="Permalink to &quot;下载-影响渲染的有&quot;">​</a></h2><p>普通script</p><h2 id="执行-影响渲染的有" tabindex="-1">执行-影响渲染的有 <a class="header-anchor" href="#执行-影响渲染的有" aria-label="Permalink to &quot;执行-影响渲染的有&quot;">​</a></h2><p>普通script\\async</p><h2 id="js-执行顺序" tabindex="-1">JS 执行顺序 <a class="header-anchor" href="#js-执行顺序" aria-label="Permalink to &quot;JS 执行顺序&quot;">​</a></h2><ul><li>async 谁先下载完就执行谁，互相没关系</li><li>defer 谁在前先执行谁</li><li>script 谁在前先执行谁</li></ul>',22),l=[r];function s(d,c,o,p,h,m){return i(),e("div",null,l)}const _=a(n,[["render",s]]);export{f as __pageData,_ as default};
