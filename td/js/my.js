$(document).ready(function(){
        $(".reItem .itemWrapBox").on("mouseover",function(){
           $(this).find(".item_coment_box").stop().animate({
               bottom:0
           },500);
        });
        $(".reItem .itemWrapBox").on("mouseout",function(){
           $(this).find(".item_coment_box").stop().animate({
               bottom:"-100%"
           },500);
        });
	   var $banner = $(".banDummy").find("ul");
		var $bannerWidth = $banner.children().outerWidth();
		var $bannerHeight = $banner.children().outerHeight();  
		var $length = $banner.children().length;
		var rollingInterval;

		rollingInterval = setInterval(function() { rollingStart(); }, 3000);
		function rollingStart() {
			$banner.css("width", $bannerWidth * $length + "px"); 
			$banner.css("height", $bannerHeight + "px"); 

	
			$banner.animate({left: - $bannerWidth + "px"}, 1500, function() { 
				$(this).append("<li>" + $(this).find("li:first").html() + "</li>");
				$(this).find("li:first").remove();
				$(this).css("left", 0);
			});
		}
    
    
                $(".saContents").hide();
                   $(".depbtn1").on("click",function(){
                      $(".depbtn2").removeClass("mainOn");
                      $(".saContents").fadeOut();
                      $(this).addClass("mainOn");
                      $(".reContents").fadeIn(500);
                      
                   });
                    $(".depbtn2").on("click",function(){
                      $(".depbtn1").removeClass("mainOn");
                      $(".reContents").fadeOut();
                      $(this).addClass("mainOn");
                      $(".saContents").fadeIn(500);
                   });
    
    
    
      $("#label2").css("display","none");
            $("#label1").on("click",function(){
              $("#ftinner").slideUp();
              $("#label1").css("display","none");
              $("#label2").css("display","block");
            });
             $("#label2").on("click",function(){
              $("#ftinner").slideDown();
              $("#label1").css("display","block");
              $("#label2").css("display","none");
            });
    
    $(".bg_back").hide();
           $(".modal").hide();
            $(".item_coment_box .moalOp").on("click",function(){
                $(".bg_back").show();
                $(".modal").show();
            });
            $(".modal .modal_close").on("click",function(){
               $(".bg_back").hide();
               $(".modal").hide();
            });
    
     $(".item_coment_box .moalOp").on("click",function(){
               var img_src=$(this).parents(".itemWrapBox").find("img").attr("src"); 
               $("#modalview").attr("src",img_src);
            });
            $(".item_coment_box .moalOp").on("click",function(){
               var h3_text=$(this).parents(".itemWrapBox").find(".item_coment_box h3").text();
               $("#itemName").text(h3_text);
            });
});

