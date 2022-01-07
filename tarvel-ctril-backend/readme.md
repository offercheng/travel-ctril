## 后端
  项目里面全程使用 es6 的语法，严格遵守 职责分离的思想
  ### 构建前后端相同的开发的代码风格，都使用 es module
    1. @babel/register 实时编译 js代码，这里可以减少对 webpack 以及 @babel/cli 等工程化的打扰，可以直接使用
    2. @babel/core babel编译的核心代码库 
    3. @babel/preset-env 根据你支持的环境自动决定适合你的Babel插件
    4. 在 .babelrc 里面进行相关的配置
    5. 在 package.json 里面配置 脚本命令  "dev": "nodemon main.js"，这里还是用 nodemon 对node代码的实时编译
  
  ### 连接数据库，获取数据
    1. 这里使用 npm 库 mysql 进行数据库的连接
    2. 注意封装以及数据库查询的时候的严谨性，注意出错的处理

  ## 路由的配置
    这里面严格的采用了 职责分离 的编程思想

  ## 使用 npm 包 
    "jsonwebtoken": jwt ，里面最主要涉及的就是 sign 标记 以及 verify 解析
    "koa-bodyparser": 对一些 json xml formdata 就是 content-type 里面的 判断类型通过不同的解析器进行解析相关的文件 
    "koa-compose": 则是将 koa/koa-router 各个中间件合并执行，结合 next() 就形成了洋葱式模型
    "koa-router": koa 生态链上面重要的一环 路由
    "mysql2": 连接数据库 
    "tsc-watch": 对 ts 文件进行编译以及监听 动态监测
    "typescript": ts
    "dotenv":结合 .env 文件 将数据库相关的信息，以及应用搭建的窗口号，放到 .env 文件里面，然后进行项目提交的时候注意不能够将 这部分个人信息提交到 公共平台上面，保护自己的隐私 
  

    




## 项目难点
  - 项目架构的搭建  

  - 在对数据库数据进行拿取的时候，不用 callback 回调函数，使用 promise 结合 async await 会减少回调地狱

  - 发现在 ctx.body 的时候 会出现 ctx.body 不会被渲染到 界面上面去
  - 查找Node学习指南一书指出，node通过EventEmitter注册的事件都是抛给事件队列去通过事件注册的方法异步处理的，其中文件读写，HTTP请求，SQL等默认都是非阻塞异步I/O,而ctx.body作为返回值，在异步没有执行结束时被执行，会造成很多后果，所以我们在异步request对象内部ctx.body事件驱动不能解析（如果解析了下面的事件执行失去意义）
    最后发现是 在 某一个中间件 里面的 async 函数里面的 异步任务前面没有添加 await 进行相关的限制。导致 ........
  


## 项目重构
  ### 过程以及当中遇到的问题
  由于一开始我的后端使用的是 js 写的，加起来项目的架构搭建的不是很好，所以我就对项目进行了基本的重构，
  由于我一开始将 后端server 写在 前端项目里面，编程 ts的时候 tsconfig 文件会读取前端项目的 node_modules 导致编译错误，
  所以我就将 前后端进行简单的架构分离
  还有就是在 js里面使用 mysql 库没有问题，更改成 ts 就会发现 mysql 会出现 mysql版本过高的问题，查询资料也解决不了，最后改成 mysql2 就可以正常进行了






### 不足之处
  - 对 ts 使用还处于非常初级的阶段，      ---- 会在学习中不断的加强这方面的使用 