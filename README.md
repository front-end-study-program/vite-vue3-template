# vite-vue3-template

快速生成 vite vue3 项目的模块

## 功能

- [vue3](https://staging-cn.vuejs.org/) (渐进式 JavaScript 开发框架)
- [vite](https://cn.vitejs.dev/) (构建工具)
- [pnpm](https://pnpm.io/zh/) （包管理工具）
- [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint) （vite 中提示 eslint 错误）
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)（基于文件生成路由）
  - 基本路由：会将指定目录下的文件映射成相同名称的路由
    > src/views/home.vue -> /home <br/>
    > src/views/home/about -> /home/about
  - 索引路由：文件名为 index 被视为路由的索引页
    > src/views/index.vue -> / <br/>
    > src/views/home/index.vue -> /home
  - 动态路由：使用方括号来表示。目录和文件都可以是动态的
    > src/views/detail/[id].vue -> /detail:id -> 得到参数：{ id: xxx } <br/>
    > src/views/[user]/settings.vue -> /:user/settings -> 得到参数：{ user: xxx }
  - 嵌套路由：父组件可以通过赋予它与包含您的子路由的目录相同的名称来定义。

    ```js
      src/pages/
        ├── users/
        │  ├── [id].vue
        │  └── index.vue
        └── users.vue
      // transform
      [
        {
          "path": "/users",
          "component": "/src/pages/users.vue",
          "children": [
            {
              "path": "",
              "component": "/src/pages/users/index.vue",
              "name": "users"
            },
            {
              "path": ":id",
              "component": "/src/pages/users/[id].vue",
              "name": "users-id"
            }
          ]
        }
      ]
    ```

  - 全匹配路由：404 匹配所有路径。
    > src/views/[...all].vue -> /*
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) （生成 vue 路由布局）
- [pinia](https://pinia.vuejs.org/) （vue 的状态管理库）
- [commitlint](https://github.com/conventional-changelog/commitlint)，[配置步骤](https://github.com/front-end-study-program/commitlint-config) （git 提交信息规范化）
- [typescript](https://github.com/microsoft/TypeScript) JavaScript 类型超集）
