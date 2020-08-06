### 令致官网

采用 Next.js 框架, 进行项目构建.

### 已继承功能

- 多语言切换 (客户端、服务端切换)
- 引入 Antd 组件库
- 接入 Less、Css 样式书写功能

### 目录配置

- .next , Next.js 运行所需要的核心目录
- build , webpack 自定义配置文件
- components , 纯组件目录
- constants , 业务逻辑配置目录, 如 路由、 Api 等统一配置
- containers , 业务组件目录
- less , 初始化 less 目录, 全局引入变量
- |---> less-var.less , 全局 less 变量
- |---> styles.css , 全局 css 初始化文件
- next-build , 打包文件的产物
- out , 打包文件的产物
- pages , Next.js 框架定义的路由入口
- public , 公共资源
- static , 静态文件目录, 这里存放了图片、多语言配置文件
- |---> images , 图片资源目录
- |---> locales , 多语言文件目录
- utils , 公共函数目录

### 部署

> 静态服务 CDN 托管

```bash
npm run export

将打包出来的 out 目录资源上传到CDN 即可
```

优点: CDN 加速, 不必考虑服务端消耗;

缺点: 只能显示一种语言, 多语言切换需要在客户端动态加载资源进行. 如需要首次加载页面也显示不同语种, 需要打包两份 静态多语言网站, 亦或者使用如下打包方式.

> 自定义服务部署

```bash
npm run build

打包服务端运行文件, 在目录中出现一个 next-build 目录

npm run start

运行打包出来的资源, 访问网站
```

优点: 更加灵活高效的服务端渲染, 支持不同语种的渲染, 对 SEO 非常友好;

缺点: 需要增加服务器,进行资源访问
