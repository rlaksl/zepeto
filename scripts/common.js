// 1. nav>gnb 복제
const gnb = document.querySelector('nav .gnb')
const m_wrap = document.querySelector('.m_nav_wrap')
const gnbClone = gnb.cloneNode(true)
// 2. 복제대상을 변수 저장
console.log(gnb, m_wrap, gnbClone)
// 3. m_nav_wrap 위 변수 붙여넣기
m_wrap.appendChild(gnbClone)
// main-nav(jquery)
// 1. sub, sub_bg 숨기기
$('nav .sub').hide() // 모바일에도 sub가 있으니까 부모태그를 앞에 써서 모바일은 안숨겨지게,,
$('nav .sub_bg').hide()
// 2. nav 마우스 오버 시 sub 보이기
$('nav').on('mouseover', function(){
  $('nav .sub').stop(true).slideDown(300)
  $('nav .sub_bg').stop(true).slideDown(300)
  /* $('nav .sub').show()
  $('nav .sub_bg').show() */
})
$('nav').on('mouseout', function(){
  $('nav .sub').stop(true).slideUp(300)
  $('nav .sub_bg').stop(true).slideUp(300)
/*   $('nav .sub').hide()
  $('nav .sub_bg').hide() */
})
// mobile menu
// 1. 모바일 메뉴 숨기기
$('.m_nav_wrap .gnb').hide();
// 0. 모바일메뉴의 현재 상태를 알기 위한 논리형 데이터 생성
var m_nav_state = true;
// 2. 전체 메뉴 아이콘 클릭 시
$('.m_nav').on('click', function(){
  m_nav_state = !m_nav_state
  console.log(`현재 상태는: ${m_nav_state}`)
  // 2-1.(모바일 메뉴가 숨겨진 상태라면) 보이기
  if(m_nav_state == false){
    $('.m_nav_wrap .gnb').show();
    // m_nav_state = true // 상태변경
  }else{
    // 2-2.(모바일 메뉴가 보이는 상태라면) 숨기기
    $('.m_nav_wrap .gnb').hide();
    // m_nav_state = false // 상태변경
  }
})
/* 
$('.m_nav_wrap .gnb').hide(); // const m_nav = document.querySelector('.m_nav')
$('.m_nav').on('click', function(){addEventListener('click,)
  m_nav_state = !m_nav_state
  if(m_nav_state == false){
    $('.m_nav_wrap .gnb').show();
  }else{
    $('.m_nav_wrap .gnb').hide();
  }
}) */