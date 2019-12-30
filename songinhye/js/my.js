
                $(document).ready(function(){
                    //패럴
                    var win_h = $(window).height();
                    $(".common").each(function(index){
                        $(this).attr("data-page", win_h*index);
                    });
                       $(".common").on("mousewheel", function(e){
                           var curPage = parseInt($(this).attr("data-page"));
                            if(e.originalEvent.wheelDelta >= 0){
                                $("body, html").stop().animate({scrollTop:curPage - win_h});
                                return false;
                            } else {
                                $("body, html").stop().animate({scrollTop:curPage + win_h});
                                return false;
                            };
                        });  
                   });
$(document).ready(function(){
           $(".leftBtn > div").on("click",function(){
               $(this).not(":animated").animate({
                   left:"0"
               },500,function(){
                   $(this).find("span").css("color","#fff");
               });
           });
            $("body").on("click",function(){
               $(".leftBtn > div").not(":animated").animate({
                   left:"-225px"
               },500,function(){
                   $(this).find("span").css("color","#666");
               });
           });
        });
 $(document).ready(function() {
                    var $window=$(window),
                        cHeight, scrollHeight, startPoint;
                        $window.on("scroll", function() {
                        //현재 스크롤 위치
                        scrollHeight=$window.scrollTop();
                        cHeight = $("#page2").offset().top;
                        startPoint = cHeight - 500;
                        //실행문
                        if (scrollHeight>startPoint) {
                         $(".img_com_Box.box1").delay(500).animate({opacity:"1"},1000)
                            $(".img_com_Box.box2").delay(1000).animate({opacity:"1"},1000)
                            $(".img_com_Box.box3").delay(1500).animate({opacity:"1"},1000)
                        }
                    });
                });
 $(document).ready(function() {
            var act = 0;
                    var $window=$(window),
                        cHeight, scrollHeight, startPoint;
                  
                    $window.on("scroll", function() {
                        //현재 스크롤 위치
                        scrollHeight=$window.scrollTop();
                        cHeight = $("#page3").offset().top;
                        startPoint = cHeight - 500;
                        //실행문
                        if (scrollHeight>startPoint) {

                         $(".innerbar .innercolor").animate({marginLeft:"0%"},2000);
                     if(act <= 0){activateScene();}

                        }

                         //함수실행
                        function activateScene() {
                     act++;
                            var $mypercent = $(".text");
                            $mypercent.each(function() {
                                var $percentNumber = $mypercent.find(".percent_number"),
                                    percentdata = 100;
                                $percentNumber.text(0);
                                $({percent:0}).delay(1000).animate({
                                    percent: percentdata
                                },{
                                    duration: 1500,
                                    progress: function() {
                                        var now = this.percent
                                        $percentNumber.text(Math.floor(now));

                                    }
                                });
                            });
                        }
                    });
                    //스크롤 할때마다 반복수행 되도록함
                    $window.trigger("scroll");
                });
 $(document).ready(function(){
               $("button").on("click",function(){
                   $("button:first").removeClass("on");
                   $(this).addClass("on");
               }).on("click",function(){
                   $("button").removeClass("on");
                   $(this).addClass("on");
               });
                var all=$(".work_menu .all_btn"),
                    web=$(".work_menu .web_btn"),
                    mob=$(".work_menu .mobile_btn"),
                    med=$(".work_menu .media_btn");
                all.on("click",function(){
                   $("#work_box").find(".web,.mobile,.media").show(500); 
                });
                web.on("click",function(){
                    $("#work_box").find(".web,.mobile,.media").show();
                   $("#work_box").find(".mobile,.media").hide(500); 
                });
                mob.on("click",function(){
                    $("#work_box").find(".web,.mobile,.media").show();
                   $("#work_box").find(".web,.media").hide(500); 
                });
                med.on("click",function(){
                    $("#work_box").find(".web,.mobile,.media").show();
                   $("#work_box").find(".web,.mobile").hide(500); 
                });
            });
             $(document).ready(function(){
                   $("#work_box .clickme").on("mouseover",function(){
                      $(this).addClass("clickok"); 
                   }).on("mouseout",function(){
                        $(this).removeClass("clickok"); 
                    });
                });  
 $(document).ready(function(){
            $('#black,#big').hide();
             $("#work_box .clickme").on('click',function(){
                 $('#black').show();
                 $('#big').show();
                 return false;
             });
             $("#black,#big").on('click',function(){
                   $('#black,#big').hide();
             });
         });
         $(document).ready(function(){
             $("#work_box .clickme").on('click',function(){
                 var img_src=$(this).parents(".zoom").find("img").attr("src");
                 var img_alt=$(this).parents(".zoom").find("img").attr("alt");
                 var img_a=$(this).parents(".zoom").attr("href");
                 $(".view img").attr("src",img_src).attr("alt",img_alt);
                 $(".view a").attr("href",img_a);
             });
         });
$(document).ready(function(){
                $(".ltBtn").on("click",function(){
                     $(".page2 .contents").animate({"margin-top":"+=500px"},"slow","swing",function(){
                          $(".page2 .contents .img_com_Box:last").prependTo(".page2 .contents");
                         $(".page2 .contents").css("margin-top","0px");
                     });
                });
                $(".rtBtn").on("click",function(){
                   $(".page2 .contents").animate({
                       "margin-top":"-=500px" // -=  제 자리에서의 이미지의 위치 이동 (제 자리의 증감)
                   },"slow","swing",function(){
                       $(".page2 .contents .img_com_Box:first").appendTo(".page2 .contents");
                       $(".page2 .contents").css("margin-top","0px");
                });
            });
                $(window).resize(function (){
                   $(document).height();
                });
            });  