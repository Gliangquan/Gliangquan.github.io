var posts=["2024/09/02/ThreeJs学习/threeJs开发文档/","2024/09/01/其他/idea配置模板语法/","2024/09/02/在线编辑器collabora/安装部署online/","2024/09/02/深度学习/张量/","2024/09/02/深度学习/深度学习环境配置/","2024/09/01/机器学习/py基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };