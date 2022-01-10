# vue-pc-template

## 脚手架

基于Vue-Cli 3.0创建，适配PC应用的框架，采用px自动转vw的方式。

### 插件

运行依赖：
- 1.vue-router
- 2.vuex
- 3.axios
- 4.[ant-design-vue](https://vue.ant.design/) (Ant Design 组件库 - 按需加载)
- 5.[dayjs](https://github.com/iamkun/dayjs) (处理时间和日期的 JavaScript 库)

开发依赖：
- 1.postcss-import（解决@import引入路径问题）
- 2.postcss-url（该插件主要用来处理文件，比如图片文件、字体文件等引用路径的处理）
- 3.autoprefixer（用来自动处理CSS兼容各浏览器前缀）
- 4.postcss-simple-vars（可以使用Sass风格的变量(e.g. $myColor: #fff;，color: $myColor;)）
- 5.postcss-nested（该插件允许使用嵌套规则）
- 6.postcss-preset-env（该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理）
- 7.postcss-px-to-viewport（主要用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位）
- 8.cssnano（主要用来压缩和清理CSS代码）

px-to-viewport（相关配置在postcss.config.js）使用说明:
- 1.默认设计稿尺寸为 1920*1080 px
- 2.配置选项上有exclude属性，它可以配置是否对某个文件夹下的所有css文件不进行从px到vw的转换
- 3.不需要自动计算的元素，需在对应的元素（html）中添加配置中指定的类名"ignore"、"hairlines"或者"ig-"开头
- 4.如果个别字体不想转化vw，可以简单的使用大写的 PX 或 Px

## 文件结构
```shell
.
├── public  静态资源文件(绝对路径引入，不经过 webpack)
└── src
    ├── libs  插件工具
    ├── router  路由配置
    ├── store  状态管理
    ├── assets  静态资源文件(相对路径引入，会通过 webpack 的处理)
    ├── components  组件
    └── views
        ├── page  一级目录页面
        ├── pages  多级目录
        │   ├── page1  二级页面1
        │   ├── page2  二级页面2
        ├── errors  错误页面目录
```

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
