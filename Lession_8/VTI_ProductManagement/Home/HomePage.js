$(function () {
    loadComponent();
  });
  
  
  // Load các thành phần của trang Home Page
  function loadComponent(params) {
    $(".MenuSection").load("./Menu.html");
    $(".BannerSection").load("./Banner.html");
    $(".ProductsSection").load("./Products.html");
    $(".FooterSection").load("./Footer.html");
  }
  