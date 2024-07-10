import{_ as t,a as o,o as e,aR as i}from"./chunks/framework.Dl98zJwX.js";const q=JSON.parse('{"title":"iframe 点击劫持的介绍","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/浏览器/3.安全.md","filePath":"前端/面试题/浏览器/3.安全.md","lastUpdated":1720603948000}'),a={name:"前端/面试题/浏览器/3.安全.md"},s=i(`<h3 id="web-安全" tabindex="-1">Web 安全 <a class="header-anchor" href="#web-安全" aria-label="Permalink to &quot;Web 安全&quot;">​</a></h3><p>1：XSS XSS Cross Site Script 跨站脚本攻击 2：CSRF Cross site Request Forgery 跨站请求伪造 3：Cookies 4：点击劫持 5：传输安全 6：密码安全 7：接入层注入问题 8：接入层上传问题 9：社会工程学和信息泄露 OAuth 已经授权的用户 授权会过期 数据接口可风控审计 不允许批量查询 10：其他安全问题 11：window.opener 安全问题 12：总结</p><h4 id="_1-xss" tabindex="-1">1：XSS <a class="header-anchor" href="#_1-xss" aria-label="Permalink to &quot;1：XSS&quot;">​</a></h4><ul><li><p>xss 定义</p><blockquote><p>XSS Cross Site Script 中译是跨站脚本攻击；其原本缩写是 CSS，但为了和层叠样式表(Cascading Style Sheet)有所区分，因而在安全领域叫做 XSS。</p></blockquote></li><li><p>xss 原理</p><blockquote><p>XSS 攻击是指攻击者在网站上注入恶意的客户端代码，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。</p></blockquote></li></ul><blockquote><p>攻击者对客户端网页注入的恶意脚本一般包括 JavaScript，有时也会包含 HTML 和 Flash。有很多种方式进行 XSS 攻击，但它们的共同点为：将一些隐私数据像 cookie、session 发送给攻击者，将受害者重定向到一个由攻击者控制的网站，在受害者的机器上进行一些恶意操作。</p></blockquote><ul><li><p>xss 攻击方式 <strong>反射型</strong> domparse 定义: 反射型 XSS 只是简单地把用户输入的数据 “反射” 给浏览器，这种攻击方式往往需要攻击者诱使用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。 发出请求时，出现在 url 中，服务器解析响应后, xss 代码响应内容一起传回给浏览器。最后执行在浏览器 <code>&lt;img src=&quot;null&quot; onerroe = &quot;alert(1)&quot;&gt;</code><code>&lt;p onclick=&quot;alert(&#39;aaa&#39;)&quot;&gt;&lt;/p&gt;</code><code>&lt;iframe src=&quot;//baidu.comt.html&quot;&gt;</code><strong>存储型</strong> 定义: 存储型 XSS 会把用户输入的数据 &quot;存储&quot; 在服务器端，当浏览器请求数据时，脚本从服务器上传回并执行。这种 XSS 攻击具有很强的稳定性。 差别: 差别仅在于提交代码仅在于服务器端 数据库 内存 文件 场景: 攻击者在社区或论坛上写下一篇包含恶意 JavaScript 代码的文章或评论，文章或评论发表后，所有访问该文章或评论的用户，都会在他们的浏览器中执行这段恶意的 JavaScript 代码。 <strong>基于DOM</strong> 定义: 基于 DOM 的 XSS 攻击是指通过恶意脚本修改页面的 DOM 结构，是纯粹发生在客户端的攻击。</p></li><li><p>xss 防御措施 编码 entity 编码 过滤 dom 属性 onerror style 节点，script iframe 节点 校正<br> 编码直接解码 entity dom parse 转化 校正不配对的 dom 标签 HttpOnly 最早由微软提出，至今已经成为一个标准。浏览器将禁止页面的 Javascript 访问带有 HttpOnly 属性的 Cookie。 通常 Cookie 中都包含了用户的登录凭证信息，攻击者在获取到 Cookie 之后，则可以发起 Cookie 劫持攻击。所以，严格来说，HttpOnly 并非阻止 XSS 攻击，而是能阻止 XSS 攻击后的 Cookie 劫持攻击。 输入检查 恶意表单 HTML：xss 转义 &lt; &gt; &quot;&quot; &#39;&#39; 破坏结构 页面之前必须加以 encode js:innerHTML 转义 css:expression 计算 输入检查 decodingMap</p><ul><li>&amp;符号：&quot;&amp;&quot;, &quot;&amp;&quot;</li><li>双引号：&quot;&quot;&quot;, &quot;&quot;&quot;</li><li>小于号：&quot;&lt;&quot;, &quot;&lt;&quot;</li><li>大于号：&quot;&gt;&quot;, &quot;&gt;&quot;</li><li>单引号：&quot;&#39;&quot;, &quot;&#39;&quot;</li></ul></li></ul><p>富文本： 黑名单过滤，正则表达过滤； 白名单保留部分标签和属性，只允许指定标签麻烦数据结构组装</p><h4 id="二-csrf" tabindex="-1">二：CSRF <a class="header-anchor" href="#二-csrf" aria-label="Permalink to &quot;二：CSRF&quot;">​</a></h4><blockquote><p>CSRF，即 Cross Site Request Forgery，中译是跨站请求伪造，是一种劫持受信任用户向服务器发送非预期请求的攻击方式。</p></blockquote><blockquote><p>通常情况下，CSRF 攻击是攻击者借助受害者的 Cookie 骗取服务器的信任，可以在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作</p></blockquote><p>1：csrf 跨站伪造提交 post 请求 2：用户打开任意第三方网站，在新闻网站发布一条评论 网络蠕虫</p><p>场景：公共类。 服务器传递一个加密后的 token，给前台页面； 前端做提交的时候，连同这个 token 做为隐藏的字段，form 表单之后，一起提交服务器。 服务器接收请求，先检测 token 是否合法，合法就进入。 隐藏的校验问题。</p><p>CSRF 攻击原理</p><p>CSRF 攻击危害</p><ul><li>利用用户登陆状态</li><li>盗取用户资金</li><li>用户不知情</li><li>冒充用户发帖背锅</li><li>完成业务请求</li></ul><p>CSRF 防御</p><ul><li>1：在前端页面添加验证码 ccap 图形验证码</li><li>2：token</li><li>4：same-site</li><li>3：验证 referer 根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址。通过 Referer Check，可以检查请求是否来自合法的&quot;源&quot;。</li><li>4：禁止来自第三方网站请求</li></ul><h4 id="三-cookies-问题" tabindex="-1">三：Cookies 问题 <a class="header-anchor" href="#三-cookies-问题" aria-label="Permalink to &quot;三：Cookies 问题&quot;">​</a></h4><p>前端数据存储 后台通过 http 头设置 document.cookie 不能覆盖增加原来值 请求时通过 http 头传给后端 前端可读性 遵守同源策略</p><p>Cookies 特性<br> 域名 有效期 路径 http-only secure {支持 https} 删除 Cookies 也是设置它的有效期 document.cookies = &quot;;expires:时间&quot;</p><p>作用： 存储个性化设置 存储未登录时用户唯一标示 存储已经登陆用户的凭证 存储其他业务数据</p><p>Cookies 登陆用户凭证 前端提交用户名和密码 后端验证用户名密码 后端 通过 http 头设置用户凭证 后续访问先验证凭证</p><pre><code>    用户ID有隐患，其他人篡改就模拟登陆
    用户ID+签名，只有自己算得出来，签名不可逆；明文透露出来；userId透露出来；重新计算
    SessionId  随机的字符串，一把钥匙找到自己信息； 存到换成数据库，不放内存；
</code></pre><p>Cookies 和 XSS 关系 1：xss 可以偷取 Cookies:偷走用户登陆态 2：http-only 的 cookie 不会被偷</p><p>Cookies 和 CSRF 关系 1：CSRF 利用了用户 Cookies，带上目标用户网站 Cookies 2：攻击站点无法读写 Cookies 3：最好能阻止第三方使用 Cookies</p><p>安全案例 教务系统开源的 CMS，使用 username 唯一标识，该文章直接暴露了 username；可以使用任意 username 登陆后台</p><p>Cookies 安全策略 1：签名防篡改 2：私有变换（加密） 3：http-only 防止 XSS 4：secure 只有在 https 读取 cookies 5：same-site CSRF 只在 chrome</p><h4 id="四-点击劫持" tabindex="-1">四：点击劫持 <a class="header-anchor" href="#四-点击劫持" aria-label="Permalink to &quot;四：点击劫持&quot;">​</a></h4><p>用户亲手操作 用户不知情 ... 1：js 并不能完全设置点击劫持 if(top.location!=window.location） top.location==window.location iframe 可以设置 sandbox=&quot;allow-forms&quot; 禁止 js 的时候就不管用了</p><p>2：X-FRAME-OPTIONS 禁止内嵌 x-Frame-Options DENY SAMEORING ALLOW_FROM （指定） DENY // 拒绝任何域加载 SAMEORIGIN / / 允许同源域下加载 ALLOW-FROM // 可以定义允许 frame 加载的页面地址:</p><p>3：其他辅助手段</p><h4 id="五-传输协议-http-https" tabindex="-1">五：传输协议 http https <a class="header-anchor" href="#五-传输协议-http-https" aria-label="Permalink to &quot;五：传输协议 http https&quot;">​</a></h4><p>1：http 传输 窃听 篡改</p><p>traceroute www.tooobug.net 【tracert】 anyproxy</p><p>2：运营商劫持 3：公共 wifi 获取密码</p><h4 id="其他安全" tabindex="-1">其他安全 <a class="header-anchor" href="#其他安全" aria-label="Permalink to &quot;其他安全&quot;">​</a></h4><p>拒绝 DOS 服务攻击 1：模拟正常用户 2：大量占用服务器资源 3：无法服务正常用户</p><p>1：TCP 半连接 产生等待 2：HTTP 连接 3：DNS 域名解析服务器 访问负债</p><p>大规模分布式拒绝服务攻击 DDOS 1：流量可达几十到上百 G 2：分布式（肉鸡、代理） 3：极难防御</p><p>DOS 攻击案例 2009 年 5 月 19 号， 全国断网 游戏私服互相 DDOS 换目标，攻击 DNS 服务器 DNS 服务器机器下线 数十万网站 DNS 解析弹框</p><p>1：防火墙，交换机，路由器，流量清洗，高访 IP 2</p><p>1：避免重逻辑业务 2：快速失败快速返回 3：防雪崩机制 4：有损服务 5：CDN</p><p>重放攻击 用户多次消费 登陆态被盗取 多次抽奖 加密 https 时间戳 token nonce 签名</p><p>11： window.opener 安全问题</p><p>window.opener 表示打开当前窗体页面的的父窗体的是谁。例如，在 A 页面中，通过一个带有 target=&quot;_blank&quot; 的 a 标签打开了一个新的页面 B，那么在 B 页面里，window.opener 的值为 A 页面的 window 对象。</p><p>一般来说，打开同源(域名相同)的页面，不会有什么问题。但对于跨域的外部链接来说，存在一个被钓鱼的风险。比如你正在浏览购物网站，从当前网页打开了某个外部链接，在打开的外部页面，可以通过 window.opener.location 改写来源站点的地址。利用这一点，将来源站点改写到钓鱼站点页面上，例如跳转到伪造的高仿购物页面，当再回到购物页面的时候，是很难发现购物网站的地址已经被修改了的，这个时候你的账号就存在被钓鱼的可能了</p><ol><li>设置 rel 属性</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://xxxx&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;noopener noreferrer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 外链 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>rel=noopener 规定禁止新页面传递源页面的地址，通过设置了此属性的链接打开的页面，其 window.opener 的值为 null。 2. 将外链替换为内部的跳转连接服务，跳转时先跳到内部地址，再由服务器 redirect 到外链。 3. 可以由 widow.open 打开外链。</p><h1 id="iframe-点击劫持的介绍" tabindex="-1">iframe 点击劫持的介绍 <a class="header-anchor" href="#iframe-点击劫持的介绍" aria-label="Permalink to &quot;iframe 点击劫持的介绍&quot;">​</a></h1><p><a href="https://javascript.info/clickjacking" target="_blank" rel="noreferrer">iframe 点击劫持的介绍</a><a href="https://zh.javascript.info/clickjacking" target="_blank" rel="noreferrer">点击劫持攻击</a></p>`,51),p=[s];function r(l,n,h,c,u,k){return e(),o("div",null,p)}const S=t(a,[["render",r]]);export{q as __pageData,S as default};
