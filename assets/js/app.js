const navbar = document.querySelector(".navbar");

window.onscroll = ()=>{
    this.scrollY > 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
  }