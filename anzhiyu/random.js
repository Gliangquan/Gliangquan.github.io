var posts=["2024/09/02/Java/代码沙箱架构设计/","2024/09/02/前端/gsap/","2024/09/01/其他/idea配置模板语法/","2024/09/02/ThreeJs学习/threeJs开发文档/","2024/09/02/在线编辑器collabora/安装部署online/","2024/09/01/机器学习/py基础/","2024/09/02/深度学习/张量/","2024/09/02/深度学习/深度学习环境配置/","2024/09/02/算法与数据结构/第2章-复杂度分析-1/","2024/09/02/算法与数据结构/第1章-初识算法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };