var posts=["2024/09/01/py基础/","2024/08/31/idea配置模板语法/","2021/04/06/showMd/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };