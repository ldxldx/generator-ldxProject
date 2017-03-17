### welcome to use

基于yeoman构建 vue+webpack+es6 的项目

[npm链接](https://www.npmjs.com/package/generator-ldx)

```
-   website
    -   src  #代码开发目录
        - sass   #sass目录，按照页面（模块）、通用、第三方  三个级别进行组织
            + page
            + common
            + lib
        + images   #图片资源
        - js    #JS脚本，按照page、components、lib进行组织
            + page
            + components #组件
            + lib    #第三方库 
        + html_tpl   #HTML模板（gulp处理输入目录）
        + html  #HTML（经过gulp处理输出目录 - 脚本引入目录）
    -   dist    #webpack编译打包输出目录，无需自主建立目录
        + css
        + js
        + html
    + node_modules   #所使用的nodejs模块
    + config.babel.js 接口-域 配置文件  
    + http-url.js 接口
    + .babelrc  #bable配置
    + .gitignore  #ignore配置
    + .npmrc    #cnpm配置
    + package.json   #项目配置
    + gulpfile.js   #gulp配置
    + webpack.config.babel.js    #webpack配置(es6)
    + README.md   #项目说明
```

使用说明：

检查是否安装node和npm,并检查版本，若未装请移步到[node](https://nodejs.org/en/)进行安装，npm是Node.js的包管理工具，装好node就可以直接npm了。

    node -v //检查node版本 现在一般为6.x.x

安装yeoman 
 
    npm install -g yo  

安装脚手架  

    npm install -g generator-ldx  

在合适的地方创建一个文件夹，在文件夹下运行：

    yo ldx

然后就会在此文件夹生成目录结构。