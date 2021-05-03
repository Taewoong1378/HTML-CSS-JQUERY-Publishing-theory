// JQUERY PDF 10, 11, 12P 참고하기

$('.show-btn').click(function(){
    $('div').slideDown()
})

$('.hide-btn').click(function(){
    $('div').slideUp()
})

$('.toggle-btn').click(function(){
    $('div').toggle()
    // $('div').slideToggle() : slide 효과를 가질 수 있음
})


/*

$('.hide-btn').click(function(){
    $('div').fadeIn(3000)
}) : 3초동안 fadeIn 하여라
*/

// 메서드의 괄호 안에는 'fast', 'slow'와 같은 '속도' 값이 들어간다.
// 정밀하게 사용하겠다면 밀리초 단위를 적어주면 된다 ex) fadeIn(500)