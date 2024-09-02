var posts=["2024/09/01/py基础/","2024/08/31/idea配置模板语法/","2021/04/06/showMd/","2024/08/31/深度学习环境配置/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };