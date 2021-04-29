const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  //logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');//포커스가 된 상태
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



const badgeEl = document.querySelector('header .badges');

//스크롤 이벤트
window.addEventListener('scroll',_.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지숨기기
   // gsap.to(요소, 지속시간, 옵션);
   gsap.to(badgeEl, .6, {
     opacity: 0,
     display: 'none'

   });
  } else {
    //배지보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'none'
    });

  }
}, 300));
//_.thottle(함수, 시간)
