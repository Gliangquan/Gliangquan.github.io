var posts=["2021/04/06/showMd/","2024/08/31/idea配置模板语法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };