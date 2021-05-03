// 공지사항 갤러리 중 어떤 것(this)을 누르든 누른 것엔 active 클래스를 생성해 css 속성을 넣어주고, 그렇지 않은 것에선 active 클래스를 제거하여라

$('.btn span').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})
