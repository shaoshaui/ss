import{_ as i,a,aQ as n,o as l}from"./chunks/framework.CqV2UAXh.js";const o=JSON.parse('{"title":"JS 垃圾回收和 v8 的垃圾回收机制有什么区别","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/js/19.JS 垃圾回收和 v8 的垃圾回收机制有什么区别.md","filePath":"前端/面试题/js/19.JS 垃圾回收和 v8 的垃圾回收机制有什么区别.md","lastUpdated":1727172427000}'),h={name:"前端/面试题/js/19.JS 垃圾回收和 v8 的垃圾回收机制有什么区别.md"};function t(e,s,p,k,r,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="js-垃圾回收和-v8-的垃圾回收机制有什么区别" tabindex="-1">JS 垃圾回收和 v8 的垃圾回收机制有什么区别 <a class="header-anchor" href="#js-垃圾回收和-v8-的垃圾回收机制有什么区别" aria-label="Permalink to &quot;JS 垃圾回收和 v8 的垃圾回收机制有什么区别&quot;">​</a></h1><h1 id="为什么有垃圾回收" tabindex="-1">为什么有垃圾回收 <a class="header-anchor" href="#为什么有垃圾回收" aria-label="Permalink to &quot;为什么有垃圾回收&quot;">​</a></h1><p>程序运行需要分配内存，V8 也会申请内存，申请的内存又会分为堆内存和栈内存。而内存空间是有限的，内存空间的重复利用就变得非常重要。</p><h1 id="垃圾是什么" tabindex="-1">垃圾是什么 <a class="header-anchor" href="#垃圾是什么" aria-label="Permalink to &quot;垃圾是什么&quot;">​</a></h1><p>js 垃圾回收是自动的，非手动释放，也叫自动内存管理。 程序运行结束后，数据不会再使用了，也就是环境中的变量，不再使用（没有被引用的关系），则在在下一波清理过程中被回收</p><h2 id="内存分类-栈" tabindex="-1">内存分类-栈 <a class="header-anchor" href="#内存分类-栈" aria-label="Permalink to &quot;内存分类-栈&quot;">​</a></h2><ul><li>是什么：栈存放的是基础数据的数值，和引用类型的地址</li><li>特点： <ul><li>连续有序：栈空间连续，增加删除只需要移动指针，操作速度很快</li><li>空间有限：栈满了会抛错</li></ul></li><li>何时创建销毁：执行函数时创建，函数执行完毕，栈就会销毁</li><li>应用场景：push pop</li></ul><h2 id="内存分类-堆" tabindex="-1">内存分类-堆 <a class="header-anchor" href="#内存分类-堆" aria-label="Permalink to &quot;内存分类-堆&quot;">​</a></h2><ul><li>是什么：堆用于存储 js 中的引用类型</li><li>特点：容量大，不连续，使用灵活存储操作慢。不需要连续空间，或则会申请内容较大</li></ul><h3 id="常用的方式" tabindex="-1">常用的方式 <a class="header-anchor" href="#常用的方式" aria-label="Permalink to &quot;常用的方式&quot;">​</a></h3><p>引用计数法 缺点：无法解决循环引用问题</p><h2 id="v8-垃圾回收" tabindex="-1">V8 垃圾回收 <a class="header-anchor" href="#v8-垃圾回收" aria-label="Permalink to &quot;V8 垃圾回收&quot;">​</a></h2><blockquote><p>分为老生代，和新生代 空间换时间</p></blockquote><h3 id="新生代" tabindex="-1">新生代 <a class="header-anchor" href="#新生代" aria-label="Permalink to &quot;新生代&quot;">​</a></h3><p><code>生命周期短</code> <code>频繁</code> <code>互换</code></p><ul><li>存放生命周期比较短的对象数据</li><li>GC 频繁</li><li>分为 from to, 互相交互切换，当一个变量被交换次数达到 5 次以上， 晋升成为老生带，新生代速度快，容量小</li></ul><h3 id="晋升" tabindex="-1">晋升 <a class="header-anchor" href="#晋升" aria-label="Permalink to &quot;晋升&quot;">​</a></h3><p><code>新生代到老生代</code></p><blockquote><p>新生代的对象转移到老生代称为晋升 经过一次 GC 还存活的对象 限制达到：对象复制到 To-Space 时，To-Space 的空间达到一定的限制</p></blockquote><h3 id="老生代" tabindex="-1">老生代 <a class="header-anchor" href="#老生代" aria-label="Permalink to &quot;老生代&quot;">​</a></h3><p><code>晋升</code> <code>资源大</code> 存放生命周期长的数据容量大，速度慢 来源：晋升、资源大(一些资源比较大的，会直接放在老生带中)</p><ul><li><p>老生代回收方式：标记清除+标记整理相结合</p><ul><li><p>标记清除：容易产生碎片，若需要内存空间较多的对象，会造成内存溢出</p></li><li><p>标记整理：为解决碎片而生，涉及对象移动，故效率不好，一般 10 次标记清除带来 1 次标记整理</p></li><li><p>增量标记：垃圾回收与应用程序交替使用，可以暂停恢复，可停顿可拆分</p></li></ul></li></ul><h2 id="内存泄露" tabindex="-1">内存泄露 <a class="header-anchor" href="#内存泄露" aria-label="Permalink to &quot;内存泄露&quot;">​</a></h2><p>不在使用的变量，并没有得到及时回收释放</p><h2 id="内存泄露方式" tabindex="-1">内存泄露方式 <a class="header-anchor" href="#内存泄露方式" aria-label="Permalink to &quot;内存泄露方式&quot;">​</a></h2><ul><li>定时器未释放</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> intervalTime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><ul><li>闭包未销毁</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a 没释放</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fn2;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 等待回收</span></span></code></pre></div><ul><li>意外的全局变量</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 意外全局变量（文件头部增加 &#39;use strict&#39;）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fn1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><ul><li>dom 元素删除引用还存在</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> elements </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  button: document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  image: document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  text: document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> doStuff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  image.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://some.url/image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  button.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text.innerHTML);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> removeButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 但是还在elements对象里保存着#button的引用, DOM元素还在内存里面。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// elements.button = null</span></span></code></pre></div><h2 id="内存泄露方法排查" tabindex="-1">内存泄露方法排查 <a class="header-anchor" href="#内存泄露方法排查" aria-label="Permalink to &quot;内存泄露方法排查&quot;">​</a></h2><p>performance 中 Heap 对应的部分就可以看到内存在周期性的回落也可以看到垃圾回收的周期,如果垃圾回收之后的最低值(我们称为 min),min 在不断上涨,那么肯定是有较为严重的内存泄漏问题。</p><h2 id="内存泄露防止方法" tabindex="-1">内存泄露防止方法 <a class="header-anchor" href="#内存泄露防止方法" aria-label="Permalink to &quot;内存泄露防止方法&quot;">​</a></h2><ul><li>定时器销毁</li><li>全局变量文件头部增加 use strict</li><li>闭包使用完毕销毁</li><li>dom 元素删除 暂存变量重置未 null</li><li>EventBus 解绑</li><li>ES6 weakMap weakSet</li><li>添加监听事件 addEventListener 销毁 removeEventListener</li></ul><h2 id="内存为什么会影响性能" tabindex="-1">内存为什么会影响性能 <a class="header-anchor" href="#内存为什么会影响性能" aria-label="Permalink to &quot;内存为什么会影响性能&quot;">​</a></h2><h2 id="内存泄漏会造成卡顿-这种卡顿来自于哪里" tabindex="-1">内存泄漏会造成卡顿，这种卡顿来自于哪里 <a class="header-anchor" href="#内存泄漏会造成卡顿-这种卡顿来自于哪里" aria-label="Permalink to &quot;内存泄漏会造成卡顿，这种卡顿来自于哪里&quot;">​</a></h2><p>内存使用不当造成内存泄漏，会导致垃圾回收频繁被处罚，垃圾回收过程中，会阻塞 JS 本身的执行有全停顿，从而造成卡顿</p><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><ul><li>闭包难以察觉到隐形持有关系，更容易忽略，使用不当可能会导致内存泄漏，并不是闭包直接带来的</li></ul>`,42)]))}const c=i(h,[["render",t]]);export{o as __pageData,c as default};
