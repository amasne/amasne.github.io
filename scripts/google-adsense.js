// 注入 Google AdSense 代码到所有页面的 <head> 标签中
hexo.extend.injector.register(
    'head_end',
    () => {
        return `
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4011060500967839"
       crossorigin="anonymous"></script>
  `
    },
    'default'
)
