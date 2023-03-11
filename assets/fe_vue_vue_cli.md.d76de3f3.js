import{_ as s,c as n,o as l,a}from"./app.0402777b.js";const o="/assets/vue-cli.c095fd89.png",d=JSON.parse('{"title":"Vue 脚手架","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建 Vue 项目","slug":"创建-vue-项目","link":"#创建-vue-项目","children":[]},{"level":2,"title":"Vue 脚手架项目结构","slug":"vue-脚手架项目结构","link":"#vue-脚手架项目结构","children":[]},{"level":2,"title":"不同版本的 Vue 与 render 函数","slug":"不同版本的-vue-与-render-函数","link":"#不同版本的-vue-与-render-函数","children":[]},{"level":2,"title":"vue.config.js 配置文件","slug":"vue-config-js-配置文件","link":"#vue-config-js-配置文件","children":[]},{"level":2,"title":"TodoList 案例总结","slug":"todolist-案例总结","link":"#todolist-案例总结","children":[]},{"level":2,"title":"一些第三方包","slug":"一些第三方包","link":"#一些第三方包","children":[]}],"relativePath":"fe/vue/vue_cli.md"}'),p={name:"fe/vue/vue_cli.md"},e=a(`<h1 id="vue-脚手架" tabindex="-1">Vue 脚手架 <a class="header-anchor" href="#vue-脚手架" aria-hidden="true">#</a></h1><p><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">官网传送门</a></p><h2 id="创建-vue-项目" tabindex="-1">创建 Vue 项目 <a class="header-anchor" href="#创建-vue-项目" aria-hidden="true">#</a></h2><ul><li>全局安装 vue 脚手架：<code>npm i -g @vue/cli</code></li><li>创建项目：<code>vue create project-name</code></li><li>运行项目：<code>npm run serve</code></li><li>暴露 webpack 配置：<code>vue inspect &gt; output.js</code></li></ul><h2 id="vue-脚手架项目结构" tabindex="-1">Vue 脚手架项目结构 <a class="header-anchor" href="#vue-脚手架项目结构" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">├── public</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├── favicon.ico: 页签图标</span></span>
<span class="line"><span style="color:#A6ACCD;">│ └── index.html: 主页面</span></span>
<span class="line"><span style="color:#A6ACCD;">├── src</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├── assets: 存放静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ └── logo.png</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │── component: 存放组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ └── HelloWorld.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │── App.vue: 汇总所有组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │── main.js: 入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .gitignore: git 版本管制忽略的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">├── babel.config.js: babel 的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package.json: 应用包配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── README.md: 应用描述文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package-lock.json：包版本控制文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+o+`" alt="Vue脚手架项目结构"></p><p><code>index.html</code> 代码分析：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 针对IE浏览器的一个特殊配置，含义是让IE浏览器以最高的渲染级别渲染页面 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 开启移动端的理想视口 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width,initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- &lt;%= BASE_URL %&gt; 表示 public 文件夹路径 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;%= BASE_URL %&gt;favicon.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 拿 package-lock.json 的 name 作为标题 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&lt;%= htmlWebpackPlugin.options.title %&gt;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 当浏览器不支持js时noscript中的元素就会被渲染 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">noscript</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">strong</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">We&#39;re sorry but &lt;%= htmlWebpackPlugin.options.title %&gt; doesn&#39;t work properly without JavaScript enabled. Please enable it to continue.</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">strong</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">noscript</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 容器 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- built files will be auto injected --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="不同版本的-vue-与-render-函数" tabindex="-1">不同版本的 Vue 与 <code>render</code> 函数 <a class="header-anchor" href="#不同版本的-vue-与-render-函数" aria-hidden="true">#</a></h2><ol><li><code>vue.js</code> 与 <code>vue.runtime.xxx.js</code> 的区别：</li></ol><ul><li><code>import Vue from &#39;vue&#39;</code> 默认导入 <code>vue.runtime.esm.js</code></li><li><code>vue.js</code> 是完整版的 Vue，包含：核心功能 + 模板解析器</li><li><code>vue.runtime.xxx.js</code> 是运行版的 Vue，只包含：核心功能；没有模板解析器</li></ul><ol start="2"><li><code>vue.runtime.xxx.js</code> 没有模板解析器，故不能使用 <code>template</code> 配置项，需使用 <code>render</code> 函数接收到的 <code>createElement</code> 函数去指定具体内容</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">productionTip </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">h</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">h</span><span style="color:#A6ACCD;">(App)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// render()</span></span>
<span class="line"><span style="color:#FFCB6B;">render</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">createElement</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 创建元素</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello Vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">render</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">createElement</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"></span></code></pre></div><h2 id="vue-config-js-配置文件" tabindex="-1">vue.config.js 配置文件 <a class="header-anchor" href="#vue-config-js-配置文件" aria-hidden="true">#</a></h2><ol><li>使用 <code>vue inspect &gt; output.js</code> 可以查看到 Vue 脚手架的默认配置。</li><li>使用 <code>vue.config.js</code> 可以对脚手架进行个性化定制，<a href="https://cli.vuejs.org/zh/config/" target="_blank" rel="noreferrer">详情</a></li></ol><h2 id="todolist-案例总结" tabindex="-1">TodoList 案例总结 <a class="header-anchor" href="#todolist-案例总结" aria-hidden="true">#</a></h2><ol><li>组件化编码流程：</li></ol><ul><li>拆分静态组件：组件要按照功能点拆分，命名不要与 html 元素冲突。</li><li>实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用： <ul><li>一个组件在用：放在组件自身即可</li><li>​ 一些组件在用：放在他们共同的父组件上（状态提升）</li></ul></li><li>实现交互：从绑定事件开始。</li></ul><ol start="2"><li><code>props</code> 适用于：</li></ol><ul><li>父 ==&gt; 子</li><li>子 ==&gt; 父（要求父先给子一个函数）</li></ul><ol start="3"><li><p><code>v-model</code> 绑定的值不能是 <code>props</code> 传过来的值，因为 <code>props</code> 是不可以修改的！</p></li><li><p><code>props</code> 传过来的若是对象类型的值，修改对象中的属性时 Vue 不会报错，但不推荐</p></li></ol><h2 id="一些第三方包" tabindex="-1">一些第三方包 <a class="header-anchor" href="#一些第三方包" aria-hidden="true">#</a></h2><ul><li><a href="https://gitee.com/mirrors/nanoid#nano-id" target="_blank" rel="noreferrer">nanoid</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install nanoid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { nanoid } from nanoid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">model.id = nanoid()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><a href="https://dayjs.fenxianglu.cn/" target="_blank" rel="noreferrer">dayjs</a></li></ul>`,26),t=[e];function c(r,i,D,y,F,C){return l(),n("div",null,t)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
