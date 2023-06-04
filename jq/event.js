$(document).ready(function(){
    
    
    $('.ban-circle').click(function(){
        
        click = $(this).index();
        
        $('.banner').fadeOut(300); $('.banner').eq(click).fadeIn(300);
        
        $('.ban-circle').removeClass('ban-circle-add');
        $('.ban-circle').eq(click).addClass('ban-circle-add');
        
        $('.ban-gall').removeClass('ban-gall-add');
        $('.ban-gall').eq(click).addClass('ban-gall-add');
        
    });
    
    click = 0;
    setInterval(function(){
        
        click++;
        if (click > 3) {
            click = 0;
        }
        
        $('.banner').fadeOut(300); $('.banner').eq(click).fadeIn(300);
        
        $('.ban-circle').removeClass('ban-circle-add');
        $('.ban-circle').eq(click).addClass('ban-circle-add');
        
        $('.ban-gall').removeClass('ban-gall-add');
        $('.ban-gall').eq(click).addClass('ban-gall-add');
        
    }, 4500);
    
    //banner end
    
    
    $('#header-search').click(function(){
        
        $('#search-back-mask').css({
            display: 'block'
        });

        $('#search-wrap').animate({
            top: 0
        });

        $('#search-x').animate({
            top: '100px'
        });
        
    });
    
    $('#search-x').click(function(){
        
        $('#search-back-mask').css({
            display: 'none'
        });

        $('#search-wrap').animate({
            top: '-100px'
        });

        $('#search-x').animate({
            top: '-50px'
        });
        
    });
    
    //search end
    
    
    $('#sc3-btn li').each(function(index){
        $(this).attr('data-index', index);
    });
    
    $('.sc3-img').each(function(index){
        $(this).attr('data-index', index);
    });

    $('#sc3-btn li').click(function(){

        var i = $(this).attr('data-index');

        $('#sc3-btn li').removeClass('sc3-btn-more');
        $('#sc3-btn li').eq(i).addClass('sc3-btn-more');

        $('.sc3-img[data-index!='+i+']').css({
            display: 'none'
        });
        $('.sc3-img[data-index='+i+']').css({
            display: 'block'
        });

    });
    
    //sc3 end
    
    
    $(window).scroll(function(){
        
        var st = $(window).scrollTop();
        console.log(st);
        
        if (st > 1580) {
            $('#sc4-title-wrap').animate({
                top: '0',
                opacity: 1
            }, 500);
        }
        
    });
    
    //sc4-1 end
    
    var a = true;
    
    $(window).scroll(function(){
                    
        var st = $(window).scrollTop();
        //console.log(st);

        if(st > 1750 && a == true) {
            
            var typingBool = false; 
            var typingIdx=0;
            var typingTxt = $("#sc4-txt").text(); 

            typingTxt=typingTxt.split("");

            if(typingBool==false){
               typingBool=true;     
               var tyInt = setInterval(typing,100);
            } 

            function typing(){ 
              if(typingIdx<typingTxt.length){
                $(".typ").append(typingTxt[typingIdx]);
                typingIdx++; 
               } else{
                clearInterval(tyInt); 
               } 
            }
            
            a = false;
            
        }
        
    });
    
    //sc4-2 end
    
    
    var img_width=$('.sc5-img').width();
    
    
    /*$(window).resize(function(){
         img_width=$('#sc5-img-wrap img').width();
        
        $('#sc5-img-wrap').css({
            left : 0,
        });
     });*/
    
    $('#sc5-color-wrap li').each(function(index){
        $(this).attr('data-index', index);
    });

    $('#sc5-color-wrap li').click(function(){

        a = $(this).attr('data-index');

        //animate
        $('#sc5-img-wrap').animate({
            left: -img_width * a
        });

    });
    
    //sc5 end
    
    
    var b = true;
    
    $(window).scroll(function(){
                    
        var st = $(window).scrollTop();
        //console.log(st);

        if(st > 3400 && b == true) {
            
            $({ val : 0 }).animate({ val : 100 }, {
                duration: 1500,
                step: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $("#sc6-per1").text(num);
                },
                complete: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $("#sc6-per1").text(num);
                }
            }); //1 end

            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            
            b = false;
            
        }
        
    });
    
    //sc6 end
    
    
    $(window).scroll(function(){
        
        var st = $(window).scrollTop();
        //console.log(st);
        
        if (st > 4200) {
            $('#sc7-con-wrap li:nth-child(1)').css({
               animation: 'moving 1s forwards'
            });
            $('#sc7-con-wrap li:nth-child(2)').css({
               animation: 'moving 1s 0.2s forwards'
            });
            $('#sc7-con-wrap li:nth-child(3)').css({
               animation: 'moving 1s 0.4s forwards'
            });
            $('#sc7-con-wrap li:last-child').css({
               animation: 'moving 1s 0.6s forwards'
            });
        }
        
    });
    
    //sc7 end
    
    
    $('#top-btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    
    $(window).scroll(function(){
        
    var st = $(window).scrollTop();
    var ht = $('header').height();

    if(st > ht) {
        $('#top-btn').css({
            opacity: 1,
            right: '25px'
        });
    } else if (st < ht) {
        $('#top-btn').css({
            opacity: 0,
            right: '-35px'
        });
    }
    });
    
    //top btn end
    
    
    
    
    
    
    
    
}); //end





