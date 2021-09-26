react-project-template
====

# 开发环境运行

* 本项目可以直接运行`yarn`安装，然后`yarn start`启动页面调试。
* 启用 why-did-you-render(https://github.com/welldone-software/why-did-you-render) 工具，可在命令后加上 --WHY_RENDER, 比如 `yarn start --WHY_RENDER`
* 启用 graphql 命令 NODE_ENV=development node ./graphql/
> 本项目是项目模板工程，如要依据本项目创建新工程，请使用CLI工具。

# 安装CLI工具

```sh
jnpm i nornj-cli@next @scf/nornj-cli-config -g
#mac: sudo jnpm i nornj-cli@next @scf/nornj-cli-config -g
```

# 使用CLI工具

## 创建项目初始代码

* 在当前目录下创建新项目目录：

```sh
nj init

# 请按上下键选择项目模板
Please select a project template:
> @scf/react-mobx      # 默认使用mobx
  @scf/react-mst       # 默认使用mobx-state-tree

# 输入新建的项目目录名称
Project Name: projectName
```

## 项目目录结构

```bash
.
├── config                            # 打包配置文件
    ├── config.js                       # 公共配置
    ├── webpack.config.base.js          # webpack配置(基础)
    ├── webpack.config.dev.babel.js     # webpack配置(开发)
    ├── webpack.config.prod.babel.js    # webpack配置(生产)
    └── webpack.config.test.babel.js    # webpack配置(测试)
├── dist                              # 打包后的生产文件
├── mock                              # 本地mock server
    ├── routes                          # 各页面mock接口
        ├── page1.js                      # 页面1接口
        ├── page2.js                      # 页面2接口
        ...
    └── app.js                            # mock server入口
├── src                               # 源代码
    ├── assets                          # 静态资源
        ├── images                        # 图片
        ├── theme                         # 主题样式
        ├── app.less                      # 全局样式
        ...
    ├── components
        ├── loading
            ├── Loading.tsx
            ├── Loading.spec.js
            └── index.ts
        ├── bread
            ├── Bread.tsx
            ├── Bread.m.less
            ├── Bread.spec.js
            └── index.ts
        ...
    ├── pages
        ├── dashboard
            ├── Dashboard.tsx
            ├── Dashboard.e2e.js
            └── index.ts
        ├── chartExample
            ├── ChartExample.tsx
            ├── ChartExample.e2e.js
            └── index.ts
        ...
    ├── stores
        ├── pages                         # 功能页面Store
            ├── page1Store.js              # 页面1Store
            ├── page2Store.js              # 页面2Store
            ...
        ├── commonStore.js                # 通用Store
        ├── headerStore.js                # 头部Store
        ├── siderStore.js                 # 侧边栏Store
        └── rootStore.js                  # 根Store
    └── utils                           # 通用工具
├── test                              # 单元测试配置
├── typings                           # 全局ts类型定义
├── templates                         # 模板文件目录，供CLI脚手架创建页面等功能用
├── .babelrc.js                       # Babel config
├── .eslintrc                         # Eslint config
├── .stylelintrc                      # Stylelint config
├── .prettierrc                       # Prettier config
├── .gitignore
├── postcss.config.js                 # Postcss config
├── Bundle.js                         # 配合bunder-loader的React组件
├── index.template-web.html           # 主页面html
├── routes-web.js                     # 路由配置
├── tsconfig.json
└── package.json       
```

## 添加新页面

* 进入已有项目目录后，输入如下命令创建新页面：

```sh
nj ap

# 请选择生成时要使用的页面模板
Which page template do you want to use?
> default  # 增删改查
  chart    # 图表
  form     # 表单
  empty    # 空页面

# 输入新创建的页面名称
Page Name: pageName
```

## 添加新组件

* 进入已有项目目录后，输入如下命令创建新组件：

```sh
nj ac

# 请选择生成时要使用的组件模板
Which component template do you want to use?
> class component       # class组件
  function component    # 函数组件

# 输入新创建的组件名称
Component Name: componentName
```

## 添加新Store

* 进入已有项目目录后，输入如下命令创建新Store：

```sh
nj as

# 请选择生成时要使用的Store模板
Which store template do you want to use?
> mobx               # 使用mobx
  mobx-state-tree    # 使用mst

# 输入新创建的Store名称
Store Name: storeName
```

# 查看cli当前版本

```sh
nj -v
```

# cli版本更新

```sh
nj upgrade  # 更新cli版本到最新版
```

# 部署

1. J-one部署，请参考[j-one部署](http://doc.jd.com/scc-front/docs/standard/react/deploy.html)文档
2. Jdos部署，请参考[jdos部署](http://doc.jd.com/scc-front/docs/standard/react/deploy.html#jdos-%E7%8E%AF%E5%A2%83)文档