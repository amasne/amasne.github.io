// 注入自定义 CSS 到页面
hexo.extend.injector.register(
    'head_end',
    () => {
        return `
  <link rel="stylesheet" href="/css/custom.css">
  `
    },
    'default'
)
