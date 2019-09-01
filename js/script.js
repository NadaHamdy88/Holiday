$(document).ready(function(){


      //show navbar when click on icon
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    //when scroll body .. 
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 50){
            $('header').css({
                'background-color':'black',
            });
            $('header .logo h2').css('color', '#fdcc52')
            $('.color').show()
            $('header nav .nav-list .list a').css('color' ,'#888')
            $('.color').show()
        }
        else {
            $("header").css({
                'background-color':
                'transparent',
                });
                $('header .logo h2').css('color', '#222')
                $('.color').hide()
          $("header nav .nav-list .list a").css('color', '#222');
            $('.color').hide()
        }
       
    });
});
    


