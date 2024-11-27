let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// script.js
window.addEventListener('scroll', function() {
    // 获取所有的导航链接
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 获取每个section的位置
    let currentSection = "";
  
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      
      // 判断section是否在可视区域内
      if (window.scrollY >= section.offsetTop - 100 && window.scrollY < section.offsetTop + section.offsetHeight - 100) {
        currentSection = link.getAttribute("href");
      }
    });
  
    // 更新导航链接的active状态
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active')
}
