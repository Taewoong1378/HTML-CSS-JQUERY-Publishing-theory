$('.menu li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown()
})

// this를 사용하면 마우스가 올라간 특정한 li에만 jquery가 적용됨
// 그런데 li가 slide가 되는 것이 아닌, sub-menu가 슬라이드 돼야하기 때문에 .children('.sub-menu')을 붙여주는 것이다.

$('.menu li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp()
})

// stop은 마우스가 떼졌을 때 이전의 애니메이션을 지워버림
// stop()을 써주지 않으면 이전의 애니메이션이 계속해서 반복되는 문제 발생