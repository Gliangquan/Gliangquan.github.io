var posts=["2024/09/02/Hadoop/Hadoop集群搭建/","2024/09/02/ThreeJs学习/threeJs开发文档/","2024/09/01/其他/idea配置模板语法/","2024/09/19/JVM/JVM-1/","2024/09/21/JVM/JVM-2/","2024/09/02/docker/Docker安装软件/","2024/09/02/Java/代码沙箱架构设计/","2024/09/02/前端/gsap/","2024/09/02/深度学习/张量/","2024/09/02/深度学习/深度学习环境配置/","2024/09/02/在线编辑器collabora/安装部署online/","2024/09/02/操作系统/第一节-操作系统的概念和定义/","2024/09/02/操作系统/第二节-进程的描述与控制/","2024/09/02/算法与数据结构/第1章-初识算法/","2024/09/02/算法与数据结构/第2章-复杂度分析-1/","2024/09/02/算法与数据结构/第3章-排序/","2024/09/02/算法与数据结构/第4章-散列表/","2024/09/02/算法与数据结构/第5章-广度优先搜索/","2024/09/02/计算机网络/计网Part1-概述1/","2024/09/22/计算机网络/计网Part1-概述2/","2024/09/25/计算机网络/计网Part1-概述3/","2024/09/01/机器学习/py基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };