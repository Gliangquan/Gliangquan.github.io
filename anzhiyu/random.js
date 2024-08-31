var posts=["2024/08/31/showMd/","2021/04/06/testPage2/","2021/04/06/testPage3/","2021/04/06/testPage/","2021/04/06/testPage4/","2024/08/31/testPage5/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };