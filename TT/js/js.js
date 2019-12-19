/*퀵메뉴*/
$(document).ready(function(){
   $(window).scroll(function(){
      $(".qic").stop().animate({
          top:$(document).scrollTop()+200+"px"
      },800);
   });
});

/*버튼 슬라이드*/
$(document).ready(function(){
    var index=0,
        imgs=$(".vs_slide img"),
        btns=$(".vsbtn_box button"),
        imgCount=$(imgs).size();
    
    imgs.hide();
    $(imgs[index]).show();
    $(btns[index]).addClass('on');
    
    btns.on("click",function(){
        index=$(this).attr("id");
        imgs.fadeOut(1000);
        btns.removeClass("on");
        $(imgs[index]).fadeIn(1000);
        $(btns[index]).addClass("on");
        return false;
    });
    /*자동슬라이드*/
    setInterval(function(){
       imgs.fadeOut(1000);
        btns.removeClass("on");
        if((imgCount-1)==index){
            index=0;
        }else{
            index=index+1
        }
        $(imgs[index]).fadeIn(1000);
        $(btns[index]).addClass("on");
    },3000);
});