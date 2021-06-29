# Vue3.0 ElementPlus typescript

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
#### 如何自已运行起来查看效果，在线API地址,就可以看到你程序的效果了
更改 文件public->myConfig.json->
{
	"apiBaseUrl": "http://edu.callbaba.cn:8000",
	"appTitle":"教育系统"
}

#### 欢迎使用VUE3.0 + vant + typescript 后台管理模板
项目Github地址: https://github.com/flmbbb/OneEasyMobileWeb
国内项目Github地址: https://gitee.com/fan-lianman/OneEasyMobileWeb
UI库文档： https://vant-contrib.gitee.io/vant/v3/#/zh-CN

##### 在线预览地址：http://edu.callbaba.cn:8000/myweb/easymobile/index.html#/
个人服务器，宽代小比较慢见谅

##### 平台简介
平台是个简易平台，只是一些入门级的DEMO

##### 平台特色
全用TS实现写的，有助于团队合作和维护;平台支持一个页面多开，例如列表打开明细，打开多个明细界面;

##### 认识平台
1.目录 baselib 自已封装的一些库，只开放一些常用的基本的
  1.1 HTTPClient.ts HTTP交互单元,做了封装，我自认为封装的还不错,当然还有很多细节还没考虑
  1.2 BaseApi.ts 与HTTP交互一些事例
2.router 路由,没什么好说的，这些是搞VUE必备的知识！
    重点充分利用好路由【前置守卫】,可以很好达到界面权限控制,但本平台采用的是tablePanle当容器放component，
    基本没路由说法，只需要在打开菜单公共事件控件权限即可，如需要路由版的，后面我在开源个版。
3.store 存储,没什么好说的，这些是搞VUE必备的知识
    5.1 ITagItem主要说下这个，菜单还有标题基类  
4.views 页面

##### 入门学习，程序基本流程，代码不复杂具体的就自已看源码了
1.1 main.ts 加载
  引入一些公共的包及一些控制 axios拦截，全局变量注册 多放在此单元,当然你们也可以自已规化
1.2 App.vue 加载
1.3 跟据vueRouter 加载默认启动路由

##### 重点类介绍

##### 赞助作者
![微信收款码](https://github.com/flmbbb/OneEasyAdmin/blob/main/src/assets/img/%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%AC%BE%E7%A0%81.png)
![支付宝收款码](https://github.com/flmbbb/OneEasyAdmin/blob/main/src/assets/img/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%B6%E6%AC%BE%E7%A0%81.png)
##### 作者简介
姓名:范联满 联系QQ：378464060 交流QQ群:437551621
教育经历:爱玩，把青春多浪费了。读书是有用的，如果你读书只是为了玩，就是对自已的未来不负责，感觉就是在浪费青春，
人生经历:当过网管扫过地，进过工厂当小弟，人生坎坷，最终发粪图墙，最终独霸一方
会什么:
  1.入门语言学过delphi，用这货工作了六年了吧，自研一套自定义框架也是开源的
  2.Go语言 2021年初学的，同时学了flutter，自已按自已思路搭了套框架，自已爽.
  3.HTML JS 没研究多少，拿起来就用，用到什么不懂就百度 语言多是相通的。基本语法看下那可
  4.C# 2021年5月入手，搞了个框架。 FastAPI值得你拥有
  5.其它杂七杂八的语言多会点，没办法打工的多这样，要这会那会
总结：语言真的不重要，只是个工具，什么场景用什么工具。。
